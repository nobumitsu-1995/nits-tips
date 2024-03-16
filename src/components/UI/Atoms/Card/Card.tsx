import React, { type PropsWithChildren } from 'react'
import * as styles from './Card.css'

type Props = {
  /** 余白 */
  padding?: string
  /** hover時のスタイル */
  hoverStyle?: string
} & PropsWithChildren

export const Card: React.FC<Props> = ({
  padding = '24px 20px',
  hoverStyle,
  children,
}) => (
  <div
    className={`${styles.card} ${hoverStyle}`}
    style={{ padding: `${padding}` }}
  >
    {children}
  </div>
)
