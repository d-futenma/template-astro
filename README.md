# Template Astro 🚀
静的な Web サイトを制作するためのスターターテンプレートです。

## 使用ツール
- [Astro](https://astro.build/) - フレームワーク
- [Stylus](https://stylus-lang.com/) - CSS プリプロセッサー
- [Markuplint](https://markuplint.dev/) - HTML 静的コード解析用ツール
- [Stylelint](https://stylelint.io/) - CSS 静的コード解析用ツール
- [ESLint](https://eslint.org/) - JavaScript 静的コード解析用ツール
- [Prettier](https://prettier.io/) - コードフォーマッター

## 必須環境
[Node.js](https://nodejs.jp/) >= `18.17.0`  

## 環境構築
```
npm install
```

## 開発サーバーの起動
```
npm run dev
```

## 本番用ビルド
```
npm run build
```

## 開発用コマンド

| コマンド               | アクション                            |
| :--------------------- | :------------------------------------ |
| `npm run dev`          | 開発サーバーの起動。                  |
| `npm run build`        | 本番用ビルド                          |
| `npm run preview`      | 本番用ビルド後のプレビュー。          |
| `npm run lint:html`    | src/ 内の HTML 構文をチェック。       |
| `npm run lint:js`      | src/ 内の JavaScript 構文をチェック。 |
| `npm run format`       | ソースコードを自動整形。              |

## ディレクトリ構成
主に開発で使用するものを記載。
```
.
├─ public/           # 静的ファイルを格納するディレクトリ
├─ src/              # サイト本体のソースコード
│  ├─ components/    # コンポーネントを格納するディレクトリ
│  │  ├─ page/       # ページ固有のコンポーネントを格納するディレクトリ
│  │  └─ ui/         # 再利用可能なUIコンポーネントを格納するディレクトリ
│  ├─ images/        # 最適化したい画像を格納するディレクトリ
│  ├─ layouts/       # ページのレイアウトを格納するディレクトリ
│  ├─ pages/         # サイトのページを格納するディレクトリ
│  ├─ scripts/       # JavaScriptファイルを格納するディレクトリ
│  ├─ styles/        # CSSを格納するディレクトリ
│  ├─ utilities/     # 汎用的なユーティリティ関数を格納するディレクトリ
│  ├─ consts.js      # 汎用的な定数を定義するファイル
│  └─ site-config.js # サイトの設定を定義するファイル
├─ astro.config.js   # Astroの設定ファイル
├─ package.json      # 依存パッケージを管理するためのファイル
└─ tsconfig.json     # TypeScriptの設定ファイル
```
