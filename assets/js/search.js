/**
 * Ingantt Help — search.js
 *
 * Client-side search with:
 *  - Lazy loading of search index on first focus
 *  - Debounced filtering (300ms)
 *  - Title matches ranked above keyword-only matches
 *  - Keyboard navigation (arrow keys, Enter, Escape)
 *  - Click-outside to close
 */
(function initSearch() {
  var searchInput   = document.querySelector('.search-input');
  var searchResults = document.querySelector('.search-results');
  if (!searchInput || !searchResults) return;

  var indexCache    = null;   // parsed JSON array, set after first fetch
  var indexLoading  = false;  // true while fetch is in-flight
  var debounceTimer = null;
  var selectedIndex = -1;     // currently highlighted result index

  /* ------------------------------------------------------------------ */
  /*  Helpers                                                            */
  /* ------------------------------------------------------------------ */

  /** Detect current language from <html lang="...">. */
  function currentLang() {
    return document.documentElement.getAttribute('lang') || 'en';
  }

  /** Escape HTML special characters to prevent XSS when building snippets. */
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /** Escape special regex characters in user input. */
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /* ------------------------------------------------------------------ */
  /*  Index loading (lazy, on first focus)                               */
  /* ------------------------------------------------------------------ */

  function loadIndex(callback) {
    if (indexCache !== null) {
      callback();
      return;
    }
    if (indexLoading) return; // already in-flight
    indexLoading = true;

    // Show loading state
    var loadingText = searchResults.getAttribute('data-loading') || 'Loading\u2026';
    searchResults.innerHTML = '<div class="search-result-item" style="pointer-events:none;opacity:.6">' + loadingText + '</div>';
    searchResults.removeAttribute('hidden');

    var lang = currentLang();
    var xhr  = new XMLHttpRequest();
    xhr.open('GET', '/assets/js/data/search-' + lang + '.json', true);
    xhr.onload = function () {
      indexLoading = false;
      if (xhr.status === 200) {
        try {
          indexCache = JSON.parse(xhr.responseText);
        } catch (_) {
          indexCache = [];
        }
      } else {
        indexCache = [];
      }
      callback();
    };
    xhr.onerror = function () {
      indexLoading = false;
      indexCache = [];
      callback();
    };
    xhr.send();
  }

  /* ------------------------------------------------------------------ */
  /*  Search & ranking                                                   */
  /* ------------------------------------------------------------------ */

  /**
   * Find the slug of the section containing the query match.
   * Returns '' if the match is in the intro (before any heading) or not found.
   */
  function findSectionSlug(sections, query) {
    if (!sections) return '';
    var lowerQuery = query.toLowerCase();
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].text && sections[i].text.toLowerCase().indexOf(lowerQuery) !== -1) {
        return sections[i].slug || '';
      }
    }
    return '';
  }

  /**
   * Filter the cached index for `query`.
   * Returns an array of result objects (max 20), title matches first.
   * Each result includes a `hash` property with the anchor fragment (if any).
   */
  function search(query) {
    if (!indexCache || !query) return [];

    var lowerQuery = query.toLowerCase();
    var titleMatches   = [];
    var keywordMatches = [];

    for (var i = 0; i < indexCache.length; i++) {
      var entry = indexCache[i];
      if (entry.title && entry.title.toLowerCase().indexOf(lowerQuery) !== -1) {
        titleMatches.push({ entry: entry, hash: '' });
      } else if (entry.keywords && entry.keywords.toLowerCase().indexOf(lowerQuery) !== -1) {
        var slug = findSectionSlug(entry.sections, query);
        keywordMatches.push({ entry: entry, hash: slug ? '#' + slug : '' });
      }
    }

    var combined = titleMatches.concat(keywordMatches);
    return combined.slice(0, 20);
  }

  /* ------------------------------------------------------------------ */
  /*  Snippet generation                                                 */
  /* ------------------------------------------------------------------ */

  /**
   * Build an HTML snippet showing context around the first match of `query`
   * within the entry's keywords (full text). Falls back to the short snippet.
   */
  function buildSnippet(entry, query) {
    var text = entry.keywords || entry.snippet || '';
    var lowerText  = text.toLowerCase();
    var lowerQuery = query.toLowerCase();
    var matchIdx   = lowerText.indexOf(lowerQuery);

    if (matchIdx === -1) {
      // No match found in text — just return the start of snippet
      var fallback = (entry.snippet || '').substring(0, 120);
      return escapeHtml(fallback) + (fallback.length >= 120 ? '\u2026' : '');
    }

    // Extract a window around the match
    var contextRadius = 60;
    var start = Math.max(0, matchIdx - contextRadius);
    var end   = Math.min(text.length, matchIdx + query.length + contextRadius);

    var before = text.substring(start, matchIdx);
    var match  = text.substring(matchIdx, matchIdx + query.length);
    var after  = text.substring(matchIdx + query.length, end);

    // Clean up: trim to word boundaries where possible
    if (start > 0) {
      var spaceIdx = before.indexOf(' ');
      if (spaceIdx !== -1) {
        before = before.substring(spaceIdx + 1);
      }
    }
    if (end < text.length) {
      var lastSpace = after.lastIndexOf(' ');
      if (lastSpace !== -1) {
        after = after.substring(0, lastSpace);
      }
    }

    // Replace newlines with spaces for cleaner display
    before = before.replace(/\n/g, ' ');
    match  = match.replace(/\n/g, ' ');
    after  = after.replace(/\n/g, ' ');

    var prefix = start > 0 ? '\u2026' : '';
    var suffix = end < text.length ? '\u2026' : '';

    return prefix + escapeHtml(before) + '<mark>' + escapeHtml(match) + '</mark>' + escapeHtml(after) + suffix;
  }

  /* ------------------------------------------------------------------ */
  /*  Rendering                                                          */
  /* ------------------------------------------------------------------ */

  function renderResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '';
      searchResults.setAttribute('hidden', '');
      selectedIndex = -1;
      return;
    }

    var html = '';
    for (var i = 0; i < results.length; i++) {
      var r = results[i].entry;
      var hash = results[i].hash;
      var qParam = '?q=' + encodeURIComponent(query);
      html += '<a class="search-result-item" href="' + escapeHtml(r.url) + qParam + hash + '">'
            + '<div class="search-result-title">' + escapeHtml(r.title) + '</div>'
            + '<div class="search-result-theme">' + escapeHtml(r.theme) + '</div>'
            + '<div class="search-result-snippet">' + buildSnippet(r, query) + '</div>'
            + '</a>';
    }

    searchResults.innerHTML = html;
    searchResults.removeAttribute('hidden');
    selectedIndex = -1;
  }

  function clearResults() {
    searchResults.innerHTML = '';
    searchResults.setAttribute('hidden', '');
    selectedIndex = -1;
  }

  /* ------------------------------------------------------------------ */
  /*  Selection (keyboard nav)                                           */
  /* ------------------------------------------------------------------ */

  function getResultItems() {
    return searchResults.querySelectorAll('.search-result-item');
  }

  function updateSelection(newIndex) {
    var items = getResultItems();
    if (items.length === 0) return;

    // Remove old selection
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('selected');
    }

    // Clamp index
    if (newIndex < 0) newIndex = items.length - 1;
    if (newIndex >= items.length) newIndex = 0;

    selectedIndex = newIndex;
    items[selectedIndex].classList.add('selected');

    // Scroll into view if needed
    items[selectedIndex].scrollIntoView({ block: 'nearest' });
  }

  /* ------------------------------------------------------------------ */
  /*  Event handlers                                                     */
  /* ------------------------------------------------------------------ */

  // Lazy-load index on first focus.
  var indexRequested = false;
  searchInput.addEventListener('focus', function () {
    if (!indexRequested) {
      indexRequested = true;
      loadIndex(function () {
        // If there is already a query typed, run search immediately.
        var q = searchInput.value.trim();
        if (q) {
          var results = search(q);
          renderResults(results, q);
        } else {
          clearResults();
        }
      });
    }
  });

  // Debounced input handler.
  searchInput.addEventListener('input', function () {
    var q = searchInput.value.trim();

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    if (!q) {
      clearResults();
      return;
    }

    debounceTimer = setTimeout(function () {
      // Ensure index is loaded (it should be after focus, but just in case).
      loadIndex(function () {
        var results = search(q);
        renderResults(results, q);
      });
    }, 300);
  });

  // Keyboard navigation.
  searchInput.addEventListener('keydown', function (e) {
    var items = getResultItems();

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (items.length > 0) {
        updateSelection(selectedIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (items.length > 0) {
        updateSelection(selectedIndex - 1);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items.length > 0) {
        var target = selectedIndex >= 0 ? items[selectedIndex] : items[0];
        if (target && target.href) {
          window.location.href = target.href;
        }
      }
    } else if (e.key === 'Escape') {
      clearResults();
      searchInput.blur();
    }
  });

  // Click outside closes dropdown.
  document.addEventListener('click', function (e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      clearResults();
    }
  });
})();
