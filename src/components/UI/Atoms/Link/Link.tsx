import React from 'react'
import * as styles from './Link.css'
import { ICON_TYPE, Icon } from '../Icon'

type Props = {
  /** 表示するテキスト */
  text:
    | string
    | number
    | boolean
    | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    | Iterable<React.ReactNode>
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
    {isTagetBlank && <Icon type={ICON_TYPE.open_in_new} />}
  </a>
)
