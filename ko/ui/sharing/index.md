# 프로젝트 공유

Google Drive에 저장된 Ingantt 프로젝트는 다른 Drive 파일과 같은 방식으로 공유할 수 있습니다. 지정한 사람, 조직, 또는 링크가 있는 모든 사람과 공유할 수 있습니다. 웹에서는 이 모든 작업을 Ingantt 안에서 수행합니다.

## 시작하기 전에

공유는 Google Drive 파일에서만 작동합니다. Google에 로그인하고 프로젝트를 Drive에 저장해야 합니다. 기기의 로컬 파일에 있는 프로젝트는 공유할 것이 없습니다. [프로젝트 저장](/ko/getting-started/saving/index.md)을 참조하십시오.

> **Share** 버튼은 Ingantt for Web의 기능입니다. Android, iOS, Windows, macOS에서는 대신 Google Drive에서 파일을 공유하십시오. Drive를 열고 Ingantt 파일을 찾아 Drive 자체의 **Share** 명령을 사용합니다. 권한은 어느 쪽이든 Drive 파일에 저장되므로 결과는 동일합니다.

## 특정 사람과 공유

1. 프로젝트를 열고 헤더의 **Share**를 클릭하거나 **File** 메뉴에서 **Share**를 선택합니다. **Share on Google Drive** 대화 상자가 열립니다.
2. **People with access** 아래에 이미 접근 권한이 있는 모든 사람이 소유자부터 표시됩니다.
3. **Add**를 클릭하고 상대방의 이메일 주소를 입력한 다음 부여할 역할을 선택하고 확인합니다.
4. 대화 상자를 닫습니다. Ingantt가 새 권한을 Drive에 저장하고 *Access updated*로 확인해 줍니다.

역할은 Google Drive의 역할과 같습니다:

| 역할 | 할 수 있는 일 |
|------|------------------|
| **Viewer** | 프로젝트를 열어 볼 수 있습니다. 변경 사항을 저장할 수 없습니다. |
| **Commenter** | Viewer와 같으며, 추가로 Google Drive에서 파일에 댓글을 달 수 있습니다. 변경 사항을 저장할 수 없습니다. |
| **Editor** | 프로젝트를 열고 변경 사항을 저장할 수 있습니다. |
| **Owner** | 파일 삭제와 소유권 이전을 포함한 모든 작업을 할 수 있습니다. |

누군가의 역할을 변경하려면 이름 옆에서 다른 역할을 선택하십시오. 제거하려면 해당 행을 삭제하십시오.

> 상대방이 실제로 Google에 로그인할 수 있는 주소를 입력하십시오. Ingantt가 주소가 Gmail 또는 Google Workspace에 속한다고 확인할 수 없으면 경고를 표시합니다. Google 계정이 없는 주소로 Drive 공유를 하면 상대방이 프로젝트를 열 수 없기 때문입니다.

## 일반 접근 권한 — 링크 및 조직

**General access**는 개별적으로 지정하지 않은 모든 사람에 대한 접근을 제어합니다:

- **Restricted** — **People with access**에 나열된 사람만. 기본값입니다.
- **Anyone with the link** — 링크가 있는 모든 사람이, 선택한 역할(Viewer, Commenter 또는 Editor)로.
- **Domain** — Google Workspace 조직의 모든 사람이, 선택한 역할로. 이 옵션은 프로젝트 소유자가 Workspace 도메인에 속한 경우에만 표시되며, 개인 Gmail 계정에는 제공되지 않습니다.

**Copy link**는 프로젝트의 Google Drive 링크를 복사합니다. 접근이 허용된 사람은 누구나 그 링크를 열어 Ingantt에서 계획을 편집할 수 있습니다.

**Share** 버튼의 툴팁에서 현재 상태를 한눈에 확인할 수 있습니다. *Private — only you can access*, *Shared with specific people*, *Anyone with the link can view/comment/edit* 또는 도메인에 해당하는 상태가 표시됩니다.

## 접근 권한을 변경할 수 있는 사람

파일 **Owner**(소유자)만 항상 접근 권한을 관리할 수 있습니다. **Editor** 역할도 소유자가 Google Drive에서 이를 끄지 않은 한 접근 권한을 관리할 수 있습니다.

뷰어 또는 댓글 작성자로 공유받은 프로젝트에서 대화 상자를 열면 **You are a viewer and cannot manage access**라고 표시되며, 현재 일반 접근 권한 상태를 변경할 수 없는 상태로 보여 줍니다. 더 많은 권한이 필요하면 소유자에게 요청하십시오.

## 공유 프로젝트에서 작업하기

- 모두가 같은 Drive 파일을 열지만 Ingantt는 실시간 공동 편집 도구가 아닙니다. 저장할 때마다 프로젝트 파일 전체가 기록되므로, 두 사람이 계획을 열어 둔 채 둘 다 저장하면 마지막 저장이 우선하고 다른 사람의 변경 사항은 덮어쓰입니다. 시작하기 전에 누가 편집할지 정하고, 무언가 사라졌다고 생각되면 Google Drive에서 파일의 버전 기록을 확인하십시오.
- 뷰어 또는 댓글 작성자가 저장을 시도하면 **You are a viewer and cannot save**가 표시됩니다. 대신 **Save file as**로 개인 복사본을 보관하십시오.
- 편집하려면 모든 공동 작업자에게 각자의 활성 Ingantt 구독 또는 체험이 필요합니다. 계획을 공유해도 구독이 공유되지는 않습니다. [구독 및 결제](/ko/account/subscription/index.md)를 참조하십시오.
- Ingantt의 Share 대화 상자에서는 Google **그룹** 주소로의 공유를 지원하지 않습니다. 개별 주소로 공유하거나 Google Drive에서 그룹 공유를 관리하십시오.

## 관련 문서

- [Google Drive 연동](/ko/ui/files/index.md) — 로그인, 권한, 공유 파일 열기.
- [프로젝트 저장](/ko/getting-started/saving/index.md) — 프로젝트가 저장되는 위치와 시점.
