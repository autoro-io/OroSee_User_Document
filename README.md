# OroSee ドキュメント

OroSee の公式ドキュメントサイトのリポジトリです。  
静的サイトジェネレーター [Astro](https://astro.build/) とドキュメントテーマ [Starlight](https://starlight.astro.build/) を使用して構築されています。

## 📚 ドキュメント構成

主なドキュメントは `src/content/docs/` ディレクトリ内に格納されています。

- **はじめに**: サービスの導入部分
- **ガイド**: 組織管理、プロジェクト管理、インタビュー管理などの操作マニュアル
- **サポート・付録**: よくある質問、用語集、お問い合わせ

## 🚀 ローカルでの実行方法

このプロジェクトを手元で動かしてプレビューする手順です。

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/autoro-io/OroSee_User_Document.git
   cd OroSee_User_Document
   ```
2. **依存関係のインストール**
   ```bash
   npm install
   ```

3. **開発サーバーの起動**
   ```bash
   npm run dev
   ```
   ブラウザで `http://localhost:4321` を開くとプレビューできます。

4. **ビルド (本番用ファイルの生成)**
   ```bash
   npm run build
   ```
   `dist/` ディレクトリに静的ファイルが出力されます。

## 🛠 プロジェクト構造

```text
.
├── public/           # 静的ファイル (画像など)
├── src/
│   ├── content/
│   │   └── docs/     # ドキュメントのMarkdownファイルはここ
│   └── content.config.ts
├── astro.config.mjs  # AstroとStarlightの設定ファイル
└── package.json
```

## 📝 編集・追加について

新しいページを追加する場合は `src/content/docs/` 内に `.md` または `.mdx` ファイルを作成してください。
サイドバーのメニュー構成は `astro.config.mjs` で管理されています。