import React from 'react'
import * as styles from './Content.css'

type Props = {
  /** 記事の内容(markdown) */
  content: string
}

export const Content: React.FC<Props> = ({ content }) => (
  <div
    className={styles.content}
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: content }}
  />
)
