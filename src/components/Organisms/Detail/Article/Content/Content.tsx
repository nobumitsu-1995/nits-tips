import React, { useEffect } from 'react'
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/a11y-dark.min.css'
import { setupHljs } from '@/lib/helpers/setupHljs'
import * as styles from './Content.css'

type Props = {
  /** 記事の内容(markdown) */
  content: string
}

setupHljs()

export const Content: React.FC<Props> = ({ content }) => {
  useEffect(() => {
    hljs.initHighlighting()
  })

  return (
    // eslint-disable-next-line react/no-danger
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
