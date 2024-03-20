import React from 'react'
import { type MarkdownComponents } from '@md-parser/react'
import { Border } from '@Atoms/Border'
import { Link } from '@/components/UI/Atoms/Link'
import { HeadingRenderer } from './HeadingRederer'
import { ParagraphRenderer } from './ParagraphRenderer'
import { BlockquoteRenderer } from './BlockquoteRenderer'
import { ListRenderer } from './ListRenderer'
import { TableRenderer } from './TableRenderer'
import { CodeRenderer, InlineCodeRenderer } from './CodeRenderer'

export const components: MarkdownComponents = {
  heading: HeadingRenderer,
  paragraph: ParagraphRenderer,
  divider: () => <Border />,
  blockquote: BlockquoteRenderer,
  link: ({ href, children }) => (
    <Link href={href} text={children ?? href} isTagetBlank />
  ),
  list: ListRenderer.List,
  listItem: ListRenderer.Item,
  image: ({ alt, src, title }) => (
    <img loading="lazy" src={src} alt={alt} title={title} />
  ),
  strong: ({ children }) => <strong>{children}</strong>,
  emphasis: ({ children }) => <em>{children}</em>,
  strikeThrough: ({ children }) => <del>{children}</del>,
  subscript: ({ children }) => <sub>{children}</sub>,
  superscript: ({ children }) => <sup>{children}</sup>,
  code: CodeRenderer,
  inlineCode: InlineCodeRenderer,
  table: TableRenderer.Teble,
  tableRow: TableRenderer.Row,
  tableHeader: TableRenderer.Header,
  tableData: TableRenderer.Data,
  checkbox: () => '',
}
