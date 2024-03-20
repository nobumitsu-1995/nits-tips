import React from 'react'
import { MarkdownRenderer } from '@md-parser/react'
import { components } from './Components'

type Props = {
  /** 記事の内容(markdown) */
  content: string
}

export const Content: React.FC<Props> = ({ content }) => (
  <MarkdownRenderer components={components}>{content}</MarkdownRenderer>
)
