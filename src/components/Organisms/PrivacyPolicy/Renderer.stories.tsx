import React from 'react'
import { MarkdownRenderer } from '@md-parser/react'
import type { Meta, StoryObj } from '@storybook/react'
import { components } from './Renderers'

const Markdown = ({ markdown }: { markdown: string }) => (
  <MarkdownRenderer components={components}>{markdown}</MarkdownRenderer>
)

type ComponentType = typeof Markdown
type Story = StoryObj<ComponentType>

export default {
  component: Markdown,
  args: {
    markdown: `## 基本方針
当サイトは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サイトで取扱う個人情報の取得、利用、管理を適正に行います。
---
## 適用範囲
本プライバシーポリシーは、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。
---
## リンク
当サイトは原則リンクフリーです。リンクを行う場合の許可や連絡は不要です。引用する際は、引用元の明記と該当ページへのリンクをお願いします。
ただし、画像ファイルへの直リンク、インラインフレームを使用したHTMLページ内で表示する形でのリンクはご遠慮ください。
`,
  },
} as Meta<ComponentType>

export const Default: Story = {}
