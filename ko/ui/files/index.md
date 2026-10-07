# Google Drive 연동

Ingantt는 프로젝트 파일을 Google Drive에 저장하여 어떤 기기에서든 접근할 수 있습니다. 이 문서에서는 로그인, Ingantt가 요청하는 권한, Drive와 Ingantt가 함께 동작하는 방식, 그리고 Google 로그인이 제대로 되지 않을 때 대처하는 방법을 다룹니다.

## Google에 로그인

프로젝트 화면에서 **Sign in with Google**을 클릭하십시오. 표준 Google 대화 상자가 열리고 아래 권한을 요청합니다. **Sign out of Google**로 언제든지 다시 로그아웃할 수 있습니다.

Ingantt는 다음 권한을 요청합니다:

- **프로필 정보 보기** — 계정을 식별하는 데 사용됩니다.
- **Google Drive에 연결** — **Web** 버전에만 해당됩니다. Google Drive 웹 인터페이스(**New** 버튼 또는 **Open with** 메뉴)에서 Ingantt 파일을 만들거나 열 수 있습니다.
- **이 앱에서 사용하는 특정 Google Drive 파일만 보기, 편집, 생성 및 삭제** — Ingantt가 Google Drive에서 자체 파일을 만들고 편집할 수 있습니다. Ingantt는 다른 파일에 접근할 수 없습니다.

> 세 번째 권한은 좁은 범위의 Google Drive 권한입니다. Ingantt는 Ingantt에서 만들었거나 Ingantt로 연 파일만 볼 수 있습니다. Drive의 나머지 부분은 Ingantt에 보이지 않으며, 이 때문에 Ingantt가 사용자를 대신해 Drive 폴더를 탐색할 수도 없습니다.

## Google Drive에서 프로젝트 만들기 및 열기

로그인하면 프로젝트 화면이 곧 사용자의 Drive가 됩니다:

- **Recent Projects** — 최근에 연 프로젝트가 날짜별로 묶여 표시됩니다.
- **Shared with me** — 다른 사람이 공유한 Ingantt 파일입니다.
- **Starred** — **Add to Starred**로 표시한 프로젝트입니다.
- **Trash** — 휴지통으로 옮긴 프로젝트입니다. **Restore**로 되돌릴 수 있습니다.

**Open** → **Open from Google Drive**로 기존 파일을 선택하거나, 해당 대화 상자의 **Upload** 탭에서 기기의 파일을 찾아보거나 끌어다 놓으십시오. Microsoft Project, Primavera 및 그 밖의 지원 형식도 이 방법으로 열 수 있습니다 — [가져오기 및 내보내기](/ko/getting-started/import-export/index.md)를 참조하십시오.

새 프로젝트는 프로젝트 화면의 **New**에서 만듭니다: **New project**, **New with AI** 또는 **New from template**. 웹에서 로그인한 상태라면 새 프로젝트는 처음부터 Google Drive를 대상으로 하며 그 이후로 자동 저장됩니다.

> **"Shared with me"에 파일이 보이지 않습니까?** Google은 공유된 파일을 먼저 Google Drive에서 열도록 요구합니다. Drive에서 해당 파일을 마우스 오른쪽 버튼으로 클릭하고 **Open with** → **Ingantt**를 선택하십시오. 그러면 목록에 나타납니다.

## Google Drive 자체 인터페이스에서 Ingantt 사용하기(웹)

웹에서는 반대로 Drive에서 Ingantt를 실행할 수 있습니다. **Google Drive에 연결** 권한이 바로 이를 위한 것입니다. Ingantt에 로그인할 때 이 권한을 허용하면 Ingantt가 내 계정의 Drive 앱으로 등록되어 Drive의 **New** 메뉴와 Ingantt 파일의 **Open with** 메뉴에 표시됩니다. [Google Workspace Marketplace](https://workspace.google.com/marketplace/app/gantt_chart_ai_project_planning_ingantt/286119906331){:target="_blank"}에서 Ingantt를 추가해도 같은 결과를 얻으므로 둘 다 할 필요는 없습니다.

- **New** → **More** → **Ingantt**는 현재 있는 Drive 폴더에 새 Ingantt 프로젝트를 만듭니다.
- Ingantt 파일을 마우스 오른쪽 버튼으로 클릭 → **Open with** → **Ingantt**는 해당 파일을 Ingantt for Web에서 엽니다.

두 경우 모두 Drive가 `web.ingantt.com`을 열고 사용할 폴더나 파일을 함께 전달하므로 바로 해당 프로젝트로 이동합니다.

## Google 로그인 문제 해결(웹)

**Google Drive의 New 또는 Open with 메뉴에 Ingantt가 없습니다.** Ingantt에서 Google 로그아웃 후 다시 로그인하고, 동의 화면에서 **Google Drive에 연결** 권한을 반드시 허용하십시오. Google은 이 권한이 허용된 뒤에야 Drive 메뉴 항목을 추가하는데, 이 권한은 건너뛰기 쉽습니다. Google Workspace Marketplace에서 Ingantt를 추가해도 같은 권한이 부여됩니다. 그런 다음 Drive를 새로 고치십시오. 직장이나 학교의 Google Workspace 계정을 사용하는 경우 관리자가 타사 Drive 앱을 비활성화했거나 Marketplace 설치를 제한했을 수 있습니다.

**다른 사람이 공유한 파일이 "Shared with me"에 없습니다.** Google Drive에서 **Open with** → **Ingantt**로 한 번 열어 주십시오. Ingantt는 Ingantt로 사용하는 파일에만 접근할 수 있으므로, 공유된 파일은 그렇게 최소 한 번 열기 전까지는 Ingantt에 보이지 않습니다.

**"Error saving file to Google Drive".** 먼저 연결 상태를 확인하십시오. 문제가 계속되면 Google에서 로그아웃한 뒤 다시 로그인하십시오 — 로그인이 만료되었거나 권한이 빠졌을 수 있습니다.

**"Could not sign in to Google."** Google 계정을 여러 개 사용한다면 팝업이 프로젝트를 소유한 계정으로 로그인하고 있는지 확인하십시오. 타사 쿠키나 팝업을 차단하는 브라우저 확장 프로그램도 Google 대화 상자가 완료되지 못하게 할 수 있습니다.

그래도 해결되지 않습니까? [지원팀에 문의](mailto:support@ingantt.com)하여 플랫폼, 브라우저, 표시되는 정확한 메시지를 알려 주십시오.

## 동영상 안내

[Google Drive와 함께 Ingantt for Web 사용하기](https://www.youtube.com/watch?v=sFg1a4tl4G4)

## 관련 문서

- [프로젝트 저장](/ko/getting-started/saving/index.md) — 저장 위치, 자동 저장 및 오프라인 작업.
- [프로젝트 공유](/ko/ui/sharing/index.md) — 다른 사람에게 계획에 대한 접근 권한 부여.
