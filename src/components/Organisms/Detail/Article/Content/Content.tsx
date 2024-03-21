import React, { useEffect, useRef } from 'react'
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
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    hljs.initHighlighting()
  })

  useEffect(() => {
    ref.current &&
      ref.current.querySelectorAll('code').forEach((pre) => {
        pre.setAttribute('tabindex', '0')
      })
  })

  useEffect(() => {
    ref.current &&
      ref.current.querySelectorAll('table').forEach((pre) => {
        pre.setAttribute('tabindex', '0')
      })
  })

  return (
    <div
      ref={ref}
      className={styles.content}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
