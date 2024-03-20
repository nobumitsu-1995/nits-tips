import React from 'react'
import type { MarkdownComponents } from '@md-parser/react'
import * as styles from './ListRenderer.css'

const List: MarkdownComponents['list'] = ({ children, ordered, start }) => {
  if (ordered)
    return (
      <ol className={styles.numberList} start={start}>
        {children}
      </ol>
    )
  return <ul className={styles.list}>{children}</ul>
}

const Item: MarkdownComponents['listItem'] = ({ children }) => (
  <li>{children}</li>
)

export const ListRenderer = {
  List,
  Item,
}
