import type { Meta, StoryObj } from '@storybook/react'
import { Content } from './Content'

type ComponentType = typeof Content
type Story = StoryObj<ComponentType>

export default {
  component: Content,
  args: {
    content: `# タイトル
## タイトル
## タイトル
## タイトル
### タイトル
#### タイトル
##### タイトル
###### タイトル
文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章


文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章

- リスト
- リスト
  - リスト
  - リスト
    - リスト
- リスト

1. Noリスト
2. Noリスト
3. Noリスト
4. Noリスト

| head1 | head2 |
| --- | --- |
| value1 | value2 |
| value1 | value2 |
| value1 | value2 |
---

\`code\`を使用した文章

\`\`\`javascript
  const code = 'block'
  console.log(code)
\`\`\`

[リンク](http://example.com)
![Qiita](https://placehold.co/400x400/F0DB4F/000 "Qiita")

> 引用の文章
*Italic*
**bold**`,
  },
} as Meta<ComponentType>

export const Default: Story = {}
