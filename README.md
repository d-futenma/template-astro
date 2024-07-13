# Frontend Template

静的サイト構築のためのフロントエンド開発環境です。  
以下のツールを採用しています。

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Markuplint](https://markuplint.dev/)
- [Prettier](https://prettier.io/)

## 導入

依存パッケージのインストール:

```
npm i
```

## 開発用コマンド

| コマンド          | アクション                     |
| :---------------- | :----------------------------- |
| `npm run dev`     | 開発サーバーの起動。           |
| `npm run build`   | 本番用ビルド。`htdocs/` に出力 |
| `npm run preview` | 本番用ビルド後のプレビュー。   |
| `npm run lint`    | ソースコードの検証。           |
| `npm run format`  | ソースコードを自動整形。       |

## ディレクトリ構成

```
├─ public/             # 静的ファイルを格納するディレクトリ
├─ src/                # サイト本体のソースコード
│   ├─ components/    # 再利用可能なUIコンポーネント
│   ├─ config/        # サイトの設定や変数を定義するファイル
│   ├─ layouts/       # ページのレイアウトを格納するディレクトリ
│   ├─ pages/         # サイトのページを格納するディレクトリ
│   ├─ scripts/       # JavaScriptファイルを格納するディレクトリ
│   └─ styles/        # CSSを格納するディレクトリ
├─ astro.config.mjs    # Astroの設定ファイル
├─ package.json        # プロジェクトの設定、依存関係、スクリプトなどを管理するためのファイル
├─ tailwind.config.mjs # Tailwind CSSの設定ファイル
└─ tsconfig.json       # TypeScriptの設定ファイル
```
