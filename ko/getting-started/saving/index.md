# 프로젝트 저장

Ingantt는 프로젝트를 기기의 파일 또는 Google Drive의 파일로 저장합니다. 그 후에는 작업하는 동안 자동 저장이 해당 파일을 최신 상태로 유지합니다. 이 문서에서는 어떤 저장 위치가 선택되는지, 자동 저장이 언제 적용되는지, 그리고 적용될 수 없는 한 가지 경우를 설명합니다.

## 처음 저장하기

도구 모음의 **Save** 버튼을 클릭하거나 **File** 메뉴의 **Save file**을 사용하십시오.

프로젝트를 한 번도 저장한 적이 없으면 Ingantt가 저장 위치를 묻습니다. **Save project as**에서는 두 가지 위치를 선택할 수 있습니다:

- **Save to new local file** — 기기의 파일.
- **Save to new Google Drive file** — Google Drive의 파일. Google 로그인이 필요합니다.

저장 위치는 나중에 **File** 메뉴의 **Save file as**로 변경할 수 있습니다. 이 명령은 항상 새 파일을 만들고 그 파일에서 작업을 계속합니다.

프로젝트는 Microsoft Project와 완전히 호환되는 XML 형식으로 저장됩니다. 계획의 어떤 부분도 Ingantt에 종속되지 않습니다.

> 웹에서는 프로젝트를 만들 때 이미 Google에 로그인되어 있으면 Ingantt가 Google Drive를 자동으로 선택하고 프로젝트 이름으로 파일 이름을 지정합니다. 자동 저장이 시작되기 전에 한 번 저장할 필요가 없으며, 프로젝트 이름을 바꾸면 Drive 파일 이름도 바뀝니다.

## 자동 저장

자동 저장이 켜져 있으면 Ingantt는 저장되지 않은 변경 사항이 있을 때만 약 20초마다 백그라운드에서 프로젝트의 기존 파일에 모든 변경 사항을 기록합니다. 항상 프로젝트가 이미 가진 저장 위치에 기록하며, 새 위치를 선택하지는 않습니다.

기본적으로 켜져 있는지 여부는 플랫폼에 따라 다릅니다:

| 플랫폼 | 기본 자동 저장 | 변경 위치 |
|----------|--------------------|--------------------|
| **Web** | 켜짐 | **File** 메뉴 → **Work offline (no autosave)** |
| **Android, iOS, Windows, macOS** | 꺼짐 | **Options** 대화 상자 또는 **File** 메뉴의 **Enable autosave** |

**Save** 버튼은 자동 저장 표시기 역할도 합니다. *Saving…*, *File saved*, *File saved to Google Drive*, *Autosave pending…* 또는 저장이 실패한 경우 오류를 표시합니다.

자동 저장이 도움이 되지 않는 두 가지 상황이 있습니다:

- **프로젝트를 한 번도 저장하지 않은 경우.** 아직 업데이트할 파일이 없으므로 직접 한 번 저장하십시오.
- **브라우저에서 Ingantt를 사용하면서 로컬 파일에서 프로젝트를 연 경우.** 아래를 참조하십시오.

## 웹에서의 자동 저장과 로컬 파일

브라우저는 디스크에서 선택한 파일에 다시 쓸 수 없습니다. Ingantt for Web이 "로컬 파일"에 저장할 때는 대신 파일의 새 복사본을 다운로드합니다. 이는 명시적인 **Save**에는 적절한 동작이지만 20초마다 일어나기를 바라는 동작은 아닙니다.

따라서 **Ingantt for Web은 로컬 파일에 자동 저장하지 않습니다.** 브라우저에서 로컬 프로젝트 파일을 열었고 변경 사항이 자동으로 보관되기를 원한다면 **Save file as** → **Save to new Google Drive file**을 한 번 사용하십시오. 그 이후로는 자동 저장이 Drive 파일을 최신 상태로 유지합니다.

이는 [AI로 편집하기](/ko/getting-started/edit-with-ai/index.md)에도 같은 방식으로 영향을 미칩니다. 자동 저장이 없으면 AI가 변경한 내용은 직접 저장하기 전까지 저장되지 않은 상태로 남으며, Ingantt는 세션이 시작되기 전에 이를 경고합니다.

## 웹에서 오프라인으로 작업하기

**File** 메뉴의 <strong>Work offline (no autosave)</strong>는 현재 브라우저 탭의 자동 저장을 끕니다. 모든 변경 사항이 Google Drive로 전송되지 않게 하면서 편집을 계속하고 싶을 때 사용하십시오.

알아 둘 두 가지:

- 켜져 있는 동안에는 아무것도 저장되지 않으므로 탭을 닫기 전에 직접 저장하십시오. 켤 때 Ingantt가 이를 알려 줍니다.
- 이 설정은 세션별로 적용됩니다. 페이지를 새로 고치거나 새 탭을 열면 자동 저장이 다시 켜진 상태로 시작됩니다. Android, iOS, Windows, macOS에서는 대신 **Enable autosave** 설정이 기억됩니다.

## 복사본 다운로드

웹에서 **File** → **Download** → **Download XML**은 프로젝트의 저장 위치를 바꾸지 않고 프로젝트 복사본을 컴퓨터에 저장합니다. 백업용으로, 또는 Microsoft Project 사용자에게 파일을 전달할 때 사용하십시오.

PDF, PNG, CSV, XML, YAML, Markdown 등 다른 형식은 [가져오기 및 내보내기](/ko/getting-started/import-export/index.md)에서 다룹니다.

## 저장하지 않은 변경 사항이 있는 상태로 닫기

저장하지 않은 변경 사항이 있는 프로젝트를 닫으면 Ingantt가 **Save changes to** 메시지로 프로젝트의 변경 사항을 저장할지 묻고, 저장하지 않은 변경 사항은 사라진다고 경고합니다. 프로젝트를 휴지통으로 이동하기 전에도 같은 메시지가 표시됩니다.

## Ingantt에서 저장이 되지 않는 경우

- **"View only mode as trial ended"** 또는 **"Subscription inactive"** — 프로젝트는 여전히 남아 있고 읽을 수 있지만, 구독이 활성화될 때까지 저장이 꺼져 있습니다. [무료 체험](/ko/account/trial/index.md) 및 [구독 및 결제](/ko/account/subscription/index.md)를 참조하십시오.
- **"You are a viewer and cannot save"** — Google Drive 파일이 뷰어 또는 댓글 작성자 권한으로 공유되었습니다. 소유자에게 편집 권한을 요청하거나 **Save file as**로 자신의 복사본을 보관하십시오. [프로젝트 공유](/ko/ui/sharing/index.md)를 참조하십시오.
- **"Error saving file to Google Drive"** — 대개 연결 문제이거나 Google 로그인이 만료된 경우입니다. 연결을 확인하고 다시 로그인하십시오. [Google Drive 연동](/ko/ui/files/index.md)을 참조하십시오.
