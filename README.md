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

| コマンド               | アクション                               |
| :--------------------- | :--------------------------------------- |
| `npm run dev`          | 開発サーバーの起動。                     |
| `npm run build`        | 本番用ビルド。`htdocs/` に出力           |
| `npm run build:format` | 本番用ビルド後にソースコードを自動整形。 |
| `npm run preview`      | 本番用ビルド後のプレビュー。             |
| `npm run lint`         | ソースコードの検証。                     |
| `npm run format`       | ソースコードを自動整形。                 |

## ディレクトリ構成

```
.
├─ public/             # 静的ファイルを格納するディレクトリ
├─ src/                # サイト本体のソースコード
│  ├─ assets/         # ローカルアセット
│  │  └─ img/        # 最適化したい画像を格納するディレクトリ
│  ├─ components/     # コンポーネントを格納するディレクトリ
│  │  ├─ page/       # ページ固有のコンポーネントを格納するディレクトリ
│  │  └─ ui/         # 再利用可能なUIコンポーネントを格納するディレクトリ
│  ├─ config/         # サイトの設定を定義するファイル
│  ├─ layouts/        # ページのレイアウトを格納するディレクトリ
│  ├─ pages/          # サイトのページを格納するディレクトリ
│  ├─ scripts/        # JavaScriptファイルを格納するディレクトリ
│  ├─ styles/         # CSSを格納するディレクトリ
│  └─ utils/          # 汎用的なユーティリティ関数を格納するディレクトリ
├─ astro.config.mjs    # Astroの設定ファイル
├─ eslint.config.mjs   # ESLintの設定ファイル
├─ package.json        # 依存パッケージを管理するためのファイル
├─ tailwind.config.mjs # Tailwind CSSの設定ファイル
└─ tsconfig.json       # TypeScriptの設定ファイル
```