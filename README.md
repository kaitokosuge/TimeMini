<h1>プロジェクト概要</h1>
<p>アプリケーションTimeをリファクタ＋機能ブラッシュアップしたものです（https://github.com/Rei1449/progate-hack）</p>
<p>Timeは時間管理アプリで、エンジニアの時間効率を最大化することを目的に開発しました。</p>

<h2>技術</h2>
<ul><li> Next.js ver13</li><li>vitest</li><li> tailwind css</li></ul>

<h1>本リポジトリの環境構築</h1>
<h2>Next.js ver13プロジェクト作成</h2>

```
npx create-next-app@13 timeminiapp && cd timeminiapp && npm i next@13
```

<h2>prettierファイル追加</h2>

.prettierrc を root で作成

```.prettierrc
{
    "singleQuote": true,
    "trailingComma": "all",
    "tabWidth": 4
}
```

<h2>Eslintファイル編集</h2>
.eslintrc.jsonに以下を追加しました。（console.logをエラーとして扱う）

```
{
    "rules": {
        "no-console": "error",
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                "message": "Unexpected property on console object was called"
            }
        ]
    }
}
```

<h2>Vitest インストール</h2>

```
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom
```

<p>vitest.config.ts</p>

```
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
plugins: [react()],
test: {
environment: 'jsdom',
},
})
```

package.json に test コマンドを追加

```
{
  "scripts": {
    ...
    "test": "vitest"
  }
}
```

<p>カバレッジライブラリインストール</p>

```
npm i -D @vitest/coverage-v8
```

vitest.config.ts

```
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8'
    },
  },
})
```

package.json

```
{
  "scripts": {
    ...
    "coverage": "vitest run --coverage"
  }
}
```

参考資料<br/>
https://ja.next-community-docs.dev/docs/app/building-your-application/testing/vitest  
https://vitest.dev/guide/coverage

<h2>shadcn/ui インストール</h2>

ボタンコンポーネント追加

```
npx shadcn@latest init
```

```
npx shadcn@latest add button
```

<h1>構成</h1>
<h2>appフォルダ</h2>
ルーティング。
各ページのトップレベルコンポーネント
（基本的にlayout.tsxを持たせる）
<h2>componentsフォルダ</h2>
処理を持たないヘッダーやサイドバー等のコンポーネントを格納。shadcn/uiコンポーネントもuiフォルダ内に格納。
<h2>featuresフォルダ</h2>
処理を持つコンポーネントを機能ごとにフォルダリングし格納。

<h2>テストファイルに関して</h2>
<p>テスト対象モジュールと同階層に__tests__フォルダを作成する</p>
