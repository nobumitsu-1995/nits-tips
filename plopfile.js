const setup = (plop) => {
  plop.setGenerator('Component', {
    description: '新規コンポーネントの作成',
    prompts: [
      {
        type: 'list',
        name: 'particle',
        message: 'どの粒度に作成しますか？',
        choices: ['Entrypoints', 'Organisms', 'UI'],
      },
      {
        type: 'input',
        name: 'path',
        default: '/',
        message: 'パスを入力してください(粒度直下の場合は/)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネント名を入力してください(パスカルケース)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{particle}}{{path}}{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{particle}}{{path}}{{pascalCase name}}/index.ts',
        templateFile: 'templates/Component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{particle}}{{path}}{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/Component/test.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{particle}}{{path}}{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/Component/story.tsx.hbs',
      },
    ],
  })
  plop.setGenerator('Hooks', {
    description: 'カスタムHooksの作成',
  })
}

export default setup
