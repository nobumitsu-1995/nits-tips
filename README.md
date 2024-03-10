# Astro + React + Typescriptテンプレート

## 概要

AstroとReact, Typescriptによる開発環境のテンプレートです。
microCMSを使用することが前提となっていますが、他のHeadless CMSなどと組み合わせることも可能です。

主に以下ライブラリを導入しており、`npm ci`後にすぐに開発に入れるようになっています。

- Astro
- React
- Typescript
- vanilla-extract
- storybook
- msw
- vitest
- testing-library

## scaffoldingツールの使用方法

scaffoldingツールであるplopを使用したテンプレートジェネレータを作成しています。

- 新規コンポーネントのテンプレート作成
- Hooksのテンプレート作成
- mswのハンドラーのテンプレート作成

を以下の手順で自動で行うことができます。

### 新規コンポーネント

```sh
npm ci　// 初回のみ
npm run generate:scaffold
> Component - 新規コンポーネントの作成 → Enter
```

### Hooks

```sh
npm ci　// 初回のみ
npm run generate:scaffold
> Hooks - カスタムHooksの作成  → Enter
```

### mswのハンドラー

```sh
npm ci　// 初回のみ
npm run generate:scaffold
> mockAPI - mockAPIの設定を追加 → Enter
```

## microCMSのレスポンス型の自動生成

以下の手順を実行することでmicroCMSで作成したAPIのレスポンスの型を自動で生成することができます。

1. microCMSのAPIスキーマをエクスポートする（[こちら](https://document.microcms.io/manual/export-and-import-api-schema)を参照）
2. 出力されたjsonファイルをprojectの`src/lib/schema`下に配置する
3. `npm run generate:cms-type`を実行する
4. `src/types/cms-type.t.ts`に型が吐き出されます

## ディレクトリ構造

以下のような使用方法を想定しています。

```
components
┣ UI
┃ ┣ Atoms　　　　全ページで共通使用されるコンポーネントの最小単位
┃ ┗ Molecules　 　全ページで共通使用されるコンポーネントでAtomsを組み合わせて作成されている
┣ Organisms　　 　そのEntrypointsで使用される固有のコンポーネント、通常使いまわされることはない
┗ Entrypoints　　　pagesで呼び出されるコンポーネント。
     ┗ Pagename　　URLと対応したディレクトリにコンポーネントは定義していく。
         ┣ Container 　実際のコンポーネントはContainer/Presentationalパターンで作成する。Hooksはここで呼ばれる。
         ┗ Presenter 　見た目はここで完成させる。

lib
┣ API　　fetchする関数を置く
┣ Hooks  カスタムHooksを置く
┣ interfaces　共通で使用される定数や型
┗ helpers　　 共通で使用できるような関数を定義する

testUtils
┣ mocks　　  mswの設定ファイル
┗ fixtures　   テストなどで使用するデータやデータ作成用関数を置く
```
