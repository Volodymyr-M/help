# Google Driveとの連携

InganttはプロジェクトファイルをGoogle Driveに保存するため、どのデバイスからでもアクセスできます。この記事では、サインインの方法、Inganttがリクエストする権限、DriveとInganttがどのように連携するか、そしてGoogleサインインが正常に動作しない場合の対処法を説明します。

## Googleへのサインイン

プロジェクト画面で**Sign in with Google**をクリックします。標準のGoogleダイアログが開き、以下の権限を求められます。**Sign out of Google**でいつでもサインアウトできます。

Inganttは以下の権限をリクエストします：

- **See your profile info** — アカウントの識別に使用されます。
- **Connect itself to your Google Drive** — **Web**版のみ。Google DriveのWebインターフェースからInganttファイルを作成または開くことができます（**New**ボタンまたは**Open with**メニュー）。
- **See, edit, create, and delete only the specific Google Drive files you use with this app** — InganttがGoogle Driveに独自のファイルを作成・編集できるようにします。Inganttはお客様の他のファイルにはアクセスできません。

> 3つ目の権限は、Google Driveの限定的なスコープです。Inganttが参照できるのは、Inganttで作成したファイルまたはInganttで開いたファイルだけです。Driveのそれ以外の部分はInganttからは見えません。そのため、InganttがDriveのフォルダーを代わりに閲覧することもできません。

## Google Driveでのプロジェクトの作成と開き方

サインインすると、プロジェクト画面があなたのDriveになります：

- **Recent Projects** — 最近開いたプロジェクトを日付ごとにまとめて表示します。
- **Shared with me** — 他の人があなたと共有したInganttファイルです。
- **Starred** — **Add to Starred**でマークしたプロジェクトです。
- **Trash** — ゴミ箱に移動したプロジェクトです。**Restore**で元に戻せます。

既存のファイルを選ぶには**Open** → **Open from Google Drive**を使用し、デバイス上のファイルを参照またはドラッグして取り込むには同じダイアログの**Upload**タブを使用します。Microsoft Project、Primavera、その他の対応形式もこの方法で開けます。[インポートとエクスポート](/ja/getting-started/import-export/index.md)をご覧ください。

新しいプロジェクトは、プロジェクト画面の**New**から作成します：**New project**、**New with AI**、または**New from template**です。Webでサインインしている場合、新しいプロジェクトは最初からGoogle Driveを保存先とし、以降は自動保存されます。

> **「Shared with me」にファイルが見つからない場合は？** Googleの仕様により、共有されたファイルは最初にGoogle Driveから開く必要があります。Driveでそのファイルを右クリックし、**Open with** → **Ingantt**を選択してください。その後、一覧に表示されます。

## Google Drive自体のインターフェースからInganttを使う（Web）

Webでは、逆にDriveからInganttを起動することもできます。これが**Connect itself to your Google Drive**権限の目的です。Inganttにサインインするときにこの権限を許可すると、Inganttがあなたのアカウントのドライブアプリとして登録され、Driveの**New**メニューとInganttファイルの**Open with**メニューに表示されます。[Google Workspace Marketplace](https://workspace.google.com/marketplace/app/gantt_chart_ai_project_planning_ingantt/286119906331){:target="_blank"}からInganttを追加しても同じ結果になります。両方を行う必要はありません。

- **New** → **More** → **Ingantt**で、現在開いているDriveフォルダーに新しいInganttプロジェクトを作成します。
- Inganttファイルを右クリック → **Open with** → **Ingantt**で、Ingantt for Webでそのファイルを開きます。

どちらの場合も、Driveは`web.ingantt.com`を開いて使用するフォルダーまたはファイルを渡すため、目的のプロジェクトに直接移動できます。

## Googleへのサインインのトラブルシューティング（Web）

**Google Driveの「New」や「Open with」メニューにInganttが表示されない。** InganttでGoogleからサインアウトし、再度サインインして、同意画面で**Connect itself to your Google Drive**権限を必ず許可してください。GoogleがDriveのメニュー項目を追加するのはこの権限が許可された後だけで、見落としやすい項目です。Google Workspace MarketplaceからInganttを追加しても同じ権限が付与されます。その後、Driveを再読み込みしてください。職場や学校のGoogle Workspaceアカウントを使用している場合は、管理者がサードパーティのDriveアプリを無効にしているか、Marketplaceからのインストールを制限している可能性があります。

**共有されたファイルが「Shared with me」にない。** Google Driveから**Open with** → **Ingantt**で一度開いてください。InganttはInganttで使用したファイルにしかアクセスできないため、共有ファイルはこの方法で少なくとも一度開くまでInganttからは見えません。

**「Error saving file to Google Drive」と表示される。** まず接続を確認してください。それでも続く場合は、Googleからサインアウトして再度サインインしてください。サインインの有効期限が切れたか、権限が失われた可能性があります。

**「Could not sign in to Google.」と表示される。** 複数のGoogleアカウントを使用している場合は、ポップアップがプロジェクトを所有するアカウントでサインインしていることを確認してください。サードパーティCookieやポップアップをブロックするブラウザ拡張機能も、Googleダイアログの完了を妨げることがあります。

それでも解決しない場合は、[サポートにお問い合わせ](mailto:support@ingantt.com)いただき、プラットフォーム、ブラウザ、表示された正確なメッセージをお知らせください。

## 動画による解説

[Ingantt for WebをGoogle Driveで使う](https://www.youtube.com/watch?v=sFg1a4tl4G4)

## 関連項目

- [プロジェクトの保存](/ja/getting-started/saving/index.md) — 保存先、自動保存、オフラインでの作業。
- [プロジェクトの共有](/ja/ui/sharing/index.md) — 他の人に計画へのアクセス権を与える。
