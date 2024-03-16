import React from 'react'
import * as styles from './Link.css'

type Props = {
  /** 表示するテキスト */
  text: string
  /** 遷移先URL */
  href: string
  /** trueの時、target=_blank指定になる */
  isTagetBlank?: boolean
}

export const Link: React.FC<Props> = ({ text, href, isTagetBlank = false }) => (
  <a
    href={href}
    target={isTagetBlank ? '_blank' : '_self'}
    rel={`noreferrer${isTagetBlank ? ' noopener' : ''}`}
    className={styles.link}
  >
    {text}
  </a>
)
