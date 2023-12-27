# Frontend Template

静的サイト構築のためのフロントエンド開発環境です。  
以下のツールを採用しています。

- [Astro](https://astro.build/)
- [Stylus](https://stylus-lang.com/)
- [Prettier](https://prettier.io/)
- [Markuplint](https://markuplint.dev/)

## 動作要件

- [Node.js](https://nodejs.org/en) 18.14.1以降

## 導入

依存パッケージのインストール:

```
npm i
```

## 開発用コマンド

| コマンド               | アクション                                       |
| :--------------------- | :----------------------------------------------- |
| `npm run dev`          | 開発サーバーの起動。                             |
| `npm run build`        | 本番用ビルド。                                   |
| `npm run preview`      | 本番用ビルド後のプレビュー。                     |
| `npm run format`       | ソースコードを整形。                             |
| `npm run lint`         | ソースコードの静的検証。                         |

## ディレクトリ構成

```
├── htdocs/             # ビルドしたファイルの出力先
├── public/             # 静的ファイルを格納するディレクトリ
├── src/                # サイト本体のソースコード
│   ├── components/     # 再利用可能なUIコンポーネント
│   ├── layouts/        # ページのレイアウトを定義するコンポーネント
│   ├── pages/          # サイトの各ページに対応するコンポーネント
│   ├── scripts/        # JavaScriptファイルを格納するディレクトリ
│   ├── styles/         # CSS（Stylus）を格納するディレクトリ
│   └── site.config.js  # サイトの設定や変数を定義するファイル
├── astro.config.mjs    # Astroプロジェクトの設定ファイル
├── package.json        # プロジェクトの依存関係やスクリプトを定義
└── tsconfig.json       # TypeScriptのコンパイラオプションを設定
```
