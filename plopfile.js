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
  plop.setGenerator('mockAPI', {
    description: 'mockAPIの設定を追加',
    prompts: [
      {
        type: 'list',
        name: 'action',
        message: 'どのactionのhandlerを追加しますか？',
        choices: ['all', 'get', 'put', 'patch', 'post', 'httpDelete'],
      },
      {
        type: 'input',
        name: 'path',
        default: '/',
        message: 'mockするAPIのpathを入力してください',
      },
      {
        type: 'input',
        name: 'name',
        message: '作成するresolverの名前を入力してください(キャメルケース)',
      },
    ],
    actions: [
      {
        type: 'append',
        path: 'src/testUtils/mocks/handlers/handlers.ts',
        pattern: '  sampleResolver,',
        template: '  {{camelCase name}}Resolver,',
      },
      {
        type: 'append',
        path: 'src/testUtils/mocks/handlers/handlers.ts',
        pattern: 'export const handlers = [',
        template: "  {{action}}('{{path}}', {{camelCase name}}Resolver),",
      },
      {
        type: 'append',
        path: 'src/testUtils/mocks/handlers/resolvers/index.ts',
        pattern: "export { sampleResolver } from './sample/all.ts'",
        template:
          "export { {{camelCase name}}Resolver } from '.{{path}}/{{action}}.ts'",
      },
      {
        type: 'add',
        path: 'src/testUtils/mocks/handlers/resolvers{{path}}/{{action}}.ts',
        templateFile: 'templates/mockAPI/resolver.ts.hbs',
      },
    ],
  })
}

export default setup
