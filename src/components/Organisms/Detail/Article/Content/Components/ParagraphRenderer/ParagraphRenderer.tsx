import React from 'react'
import type { MarkdownComponents } from '@md-parser/react'
import * as styles from './ParagraphRenderer.css'

export const ParagraphRenderer: MarkdownComponents['paragraph'] = ({
  children,
}) => <p className={styles.paragraph}>{children}</p>
