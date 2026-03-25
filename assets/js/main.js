/**
 * Ingantt Help — main.js
 *
 * Features (all run inside a single DOMContentLoaded listener or IIFEs):
 *  1. Theme toggle (light/dark) with localStorage persistence
 *  2. Dark image swap (data-dark-src / data-light-src)
 *  3. Sidebar toggle (mobile hamburger, backdrop, focus trap)
 *  4. Sidebar collapse/expand with sessionStorage
 *  5. TOC generation & scroll-spy
 *  6. Heading anchor links (already in HTML — no creation needed)
 *  7. Mobile search/sidebar mutual exclusivity
 *  8. Language switcher with lazy-loaded lang-map.json
 */

/* ------------------------------------------------------------------ */
/*  1. Theme toggle                                                    */
/* ------------------------------------------------------------------ */
(function initThemeToggle() {
  var html = document.documentElement;

  function currentTheme() {
    return html.getAttribute('data-theme') || 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);

    var hljsLight = document.getElementById('hljs-light');
    var hljsDark  = document.getElementById('hljs-dark');
    if (hljsLight) hljsLight.disabled = (theme === 'dark');
    if (hljsDark)  hljsDark.disabled  = (theme === 'light');

    updateDarkImages();
  }

  // The inline <script> in <head> already sets data-theme before paint.
  // We still wire up the toggle button and system-preference listener here.

  var toggleBtn = document.querySelector('.theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }

  // System preference change — only honour when no explicit choice stored.
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Expose for use by other features (dark-image swap needs it).
  window.__inganttTheme = { current: currentTheme };
})();

/* ------------------------------------------------------------------ */
/*  2. Dark image swap                                                 */
/* ------------------------------------------------------------------ */
function updateDarkImages() {
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  var images = document.querySelectorAll('img[data-dark-src]');
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    if (isDark) {
      if (!img.getAttribute('data-light-src')) {
        img.setAttribute('data-light-src', img.getAttribute('src'));
      }
      img.setAttribute('src', img.getAttribute('data-dark-src'));
    } else {
      var lightSrc = img.getAttribute('data-light-src');
      if (lightSrc) {
        img.setAttribute('src', lightSrc);
      }
    }
  }
}

// Run on initial load (after the inline theme script has already set data-theme).
document.addEventListener('DOMContentLoaded', updateDarkImages);

/* ------------------------------------------------------------------ */
/*  3. Sidebar toggle (mobile)                                         */
/* ------------------------------------------------------------------ */
(function initSidebarToggle() {
  var hamburger = document.querySelector('.hamburger');
  var backdrop  = document.querySelector('.sidebar-backdrop');
  var sidebar   = document.querySelector('.sidebar');
  if (!hamburger) return;

  function openSidebar() {
    document.body.classList.add('sidebar-open');
    hamburger.setAttribute('aria-expanded', 'true');
    if (backdrop) backdrop.hidden = false;
    // Close search overlay if open.
    closeSearchOverlay();
    // Move focus into sidebar.
    if (sidebar) sidebar.focus();
  }

  function closeSidebar() {
    document.body.classList.remove('sidebar-open');
    hamburger.setAttribute('aria-expanded', 'false');
    if (backdrop) backdrop.hidden = true;
    hamburger.focus();
  }

  function isSidebarOpen() {
    return document.body.classList.contains('sidebar-open');
  }

  hamburger.addEventListener('click', function () {
    if (isSidebarOpen()) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  // Backdrop click closes sidebar.
  if (backdrop) {
    backdrop.addEventListener('click', closeSidebar);
  }

  // Nav link click inside sidebar closes sidebar.
  if (sidebar) {
    sidebar.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        closeSidebar();
      }
    });
  }

  // Focus trapping inside sidebar when open.
  document.addEventListener('keydown', function (e) {
    if (!isSidebarOpen()) return;

    if (e.key === 'Escape') {
      closeSidebar();
      return;
    }

    if (e.key !== 'Tab') return;

    var focusable = sidebar.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    var first = focusable[0];
    var last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Expose for mutual-exclusivity with search.
  window.__inganttSidebar = { close: closeSidebar, isOpen: isSidebarOpen };
})();

/* ------------------------------------------------------------------ */
/*  4. Sidebar collapse / expand with sessionStorage                   */
/* ------------------------------------------------------------------ */
(function initSidebarCollapse() {
  var themeHeaders = document.querySelectorAll('.theme-header');
  if (themeHeaders.length === 0) return;

  /** Derive a slug for a theme-group by inspecting the first page link. */
  function themeSlug(header) {
    var group = header.closest('.theme-group');
    if (!group) return null;
    var link = group.querySelector('.theme-pages a');
    if (!link) return null;
    // href = /<lang>/<theme-slug>/<page-slug>/
    var parts = link.getAttribute('href').split('/').filter(Boolean);
    // parts: [ lang, themeSlug, pageSlug ]
    return parts.length >= 2 ? parts[1] : null;
  }

  /** Read persisted expanded set. */
  function readExpanded() {
    try {
      var raw = sessionStorage.getItem('expandedThemes');
      return raw ? JSON.parse(raw) : [];
    } catch (_) {
      return [];
    }
  }

  /** Write persisted expanded set. */
  function saveExpanded(arr) {
    try {
      sessionStorage.setItem('expandedThemes', JSON.stringify(arr));
    } catch (_) { /* quota exceeded — ignore */ }
  }

  // Find slug of current (active) theme so we can force it open.
  var currentLink = document.querySelector('[aria-current="page"]');
  var currentGroup = currentLink ? currentLink.closest('.theme-group') : null;
  var currentHeader = currentGroup ? currentGroup.querySelector('.theme-header') : null;
  var currentSlug = currentHeader ? themeSlug(currentHeader) : null;

  // Restore from sessionStorage.
  var expanded = readExpanded();

  for (var i = 0; i < themeHeaders.length; i++) {
    var header = themeHeaders[i];
    var slug = themeSlug(header);

    // Current theme always expanded.
    if (slug === currentSlug) {
      header.setAttribute('aria-expanded', 'true');
    } else if (expanded.indexOf(slug) !== -1) {
      header.setAttribute('aria-expanded', 'true');
    } else if (slug !== currentSlug) {
      // If not current and not in stored expanded list, collapse.
      header.setAttribute('aria-expanded', 'false');
    }
  }

  // Toggle handler.
  for (var j = 0; j < themeHeaders.length; j++) {
    themeHeaders[j].addEventListener('click', function () {
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');

      // Update sessionStorage.
      var slug = themeSlug(this);
      var stored = readExpanded();
      var idx = stored.indexOf(slug);
      if (isExpanded) {
        // Collapsing — remove.
        if (idx !== -1) stored.splice(idx, 1);
      } else {
        // Expanding — add.
        if (idx === -1) stored.push(slug);
      }
      saveExpanded(stored);
    });
  }
})();

/* ------------------------------------------------------------------ */
/*  5. TOC generation & scroll-spy                                     */
/* ------------------------------------------------------------------ */
(function initTOC() {
  document.addEventListener('DOMContentLoaded', function () {
    var content = document.querySelector('.content');
    var toc     = document.querySelector('.toc');
    if (!content || !toc) return;

    var headings = content.querySelectorAll('h2[id], h3[id]');
    if (headings.length === 0) return;

    // Build nested list.
    var rootUl  = document.createElement('ul');
    var lastH2Li = null;
    var lastH3Ul = null;

    for (var i = 0; i < headings.length; i++) {
      var h = headings[i];
      var text = h.textContent.replace(/\s*#\s*$/, '').trim(); // strip the anchor '#' text
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = text;

      if (h.tagName === 'H2') {
        var li = document.createElement('li');
        li.appendChild(a);
        rootUl.appendChild(li);
        lastH2Li = li;
        lastH3Ul = null; // reset
      } else {
        // H3 — nest under preceding H2.
        if (!lastH3Ul) {
          lastH3Ul = document.createElement('ul');
          if (lastH2Li) {
            lastH2Li.appendChild(lastH3Ul);
          } else {
            rootUl.appendChild(lastH3Ul);
          }
        }
        var li3 = document.createElement('li');
        li3.appendChild(a);
        lastH3Ul.appendChild(li3);
      }
    }

    toc.appendChild(rootUl);

    // Smooth-scroll on TOC link click.
    toc.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (!link) return;
      e.preventDefault();
      var targetId = link.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', '#' + targetId);
      }
    });

    // Scroll-spy (throttled via rAF).
    var HEADER_OFFSET = 80;
    var tocLinks = toc.querySelectorAll('a');
    var headingEls = [];
    for (var k = 0; k < tocLinks.length; k++) {
      var id = tocLinks[k].getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (el) headingEls.push({ el: el, link: tocLinks[k] });
    }

    var rafPending = false;
    function onScroll() {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(function () {
        rafPending = false;
        var scrollY = window.scrollY || window.pageYOffset;
        var active = null;
        for (var m = 0; m < headingEls.length; m++) {
          if (headingEls[m].el.offsetTop - HEADER_OFFSET <= scrollY) {
            active = headingEls[m].link;
          }
        }
        for (var n = 0; n < tocLinks.length; n++) {
          tocLinks[n].classList.remove('active');
        }
        if (active) active.classList.add('active');
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial highlight
  });
})();

/* ------------------------------------------------------------------ */
/*  7. Mobile search / sidebar mutual exclusivity                      */
/* ------------------------------------------------------------------ */
function closeSearchOverlay() {
  document.body.classList.remove('search-overlay-open');
}

(function initSearchToggle() {
  var searchToggle = document.querySelector('.search-toggle');
  var searchInput  = document.querySelector('.search-input');
  if (!searchToggle) return;

  searchToggle.addEventListener('click', function () {
    // If sidebar is open, close it first.
    if (window.__inganttSidebar && window.__inganttSidebar.isOpen()) {
      window.__inganttSidebar.close();
    }

    var isOpen = document.body.classList.contains('search-overlay-open');
    if (isOpen) {
      closeSearchOverlay();
    } else {
      document.body.classList.add('search-overlay-open');
      if (searchInput) searchInput.focus();
    }
  });
})();

/* ------------------------------------------------------------------ */
/*  8. Language switcher                                                */
/* ------------------------------------------------------------------ */
(function initLangSwitcher() {
  var langMapCache = null;

  document.addEventListener('DOMContentLoaded', function () {
    var select = document.querySelector('.lang-select');
    if (!select) return;

    select.addEventListener('change', function () {
      var targetLang = this.value;
      var option = this.options[this.selectedIndex];
      var firstPage = option.getAttribute('data-first-page') || '/' + targetLang + '/';

      // Extract language-stripped path: pathname like /en/theme/page/ => theme/page
      var pathname = window.location.pathname;
      var parts = pathname.split('/').filter(Boolean);
      // parts[0] is the current lang code, rest is the path.
      var strippedPath = parts.length > 1 ? parts.slice(1).join('/') : '';

      // Lazy-fetch lang-map.json.
      fetchLangMap(function (langMap) {
        if (langMap && strippedPath && langMap[strippedPath]) {
          // Check if target language has this page.
          var langs = langMap[strippedPath];
          if (langs.indexOf(targetLang) !== -1) {
            window.location.href = '/' + targetLang + '/' + strippedPath + '/';
            return;
          }
        }
        // Fallback: navigate to first page for the target language.
        window.location.href = firstPage;
      });
    });
  });

  function fetchLangMap(callback) {
    if (langMapCache !== null) {
      callback(langMapCache);
      return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/assets/js/data/lang-map.json', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        try {
          langMapCache = JSON.parse(xhr.responseText);
        } catch (_) {
          langMapCache = {};
        }
      } else {
        langMapCache = {};
      }
      callback(langMapCache);
    };
    xhr.onerror = function () {
      langMapCache = {};
      callback(langMapCache);
    };
    xhr.send();
  }
})();

/* ------------------------------------------------------------------ */
/*  9. Search term highlighting                                        */
/* ------------------------------------------------------------------ */
(function initSearchHighlight() {
  document.addEventListener('DOMContentLoaded', function () {
    var params = new URLSearchParams(window.location.search);
    var query = params.get('q');
    if (!query) return;

    var content = document.querySelector('.content');
    if (!content) return;

    highlightTextNodes(content, query);

    // Clean the ?q= param from the URL without reloading.
    var cleanUrl = window.location.pathname + window.location.hash;
    history.replaceState(null, '', cleanUrl);
  });

  function highlightTextNodes(root, query) {
    var lowerQuery = query.toLowerCase();
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var matches = [];

    while (walker.nextNode()) {
      var node = walker.currentNode;
      // Skip text inside <script>, <style>, <code>, or existing <mark> tags.
      var parent = node.parentElement;
      if (parent && /^(SCRIPT|STYLE|CODE|MARK|PRE)$/i.test(parent.tagName)) continue;

      var text = node.textContent;
      var idx = text.toLowerCase().indexOf(lowerQuery);
      if (idx !== -1) {
        matches.push({ node: node, index: idx });
      }
    }

    // Process in reverse to avoid invalidating node references.
    for (var i = matches.length - 1; i >= 0; i--) {
      var m = matches[i];
      var textNode = m.node;
      var idx = m.index;

      var before = textNode.textContent.substring(0, idx);
      var matched = textNode.textContent.substring(idx, idx + query.length);
      var after = textNode.textContent.substring(idx + query.length);

      var mark = document.createElement('mark');
      mark.className = 'search-highlight';
      mark.textContent = matched;

      var parentNode = textNode.parentNode;
      if (after) parentNode.insertBefore(document.createTextNode(after), textNode.nextSibling);
      parentNode.insertBefore(mark, textNode.nextSibling);
      textNode.textContent = before;
    }
  }
})();
