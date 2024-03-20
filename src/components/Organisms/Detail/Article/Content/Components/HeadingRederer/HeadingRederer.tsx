import React from 'react'
import type { MarkdownComponents } from '@md-parser/react'
import * as styles from './HeadingRederer.css'
import { generateUUID } from '@/lib/helpers/generateUUID'

export const HeadingRenderer: MarkdownComponents['heading'] = ({
  children,
  level,
}) => {
  const uuid = generateUUID()
  switch (level) {
    case 1:
    case 2:
      return (
        <h2 id={uuid} className={styles.title2}>
          {children}
        </h2>
      )
    case 3:
      return (
        <h3 id={uuid} className={styles.title3}>
          {children}
        </h3>
      )
    case 4:
    case 5:
    case 6:
    default:
      return (
        <h4 id={uuid} className={styles.title4}>
          {children}
        </h4>
      )
  }
}
