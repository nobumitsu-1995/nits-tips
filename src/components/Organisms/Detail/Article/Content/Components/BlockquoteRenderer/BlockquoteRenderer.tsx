import React from 'react'
import type { MarkdownComponents } from '@md-parser/react'
import * as styles from './BlockquoteRenderer.css'

export const BlockquoteRenderer: MarkdownComponents['blockquote'] = ({
  children,
}) => <blockquote className={styles.blockquote}>{children}</blockquote>
