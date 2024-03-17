import React from 'react'
import type { IconType } from './model'

type Props = {
  /** 名前 */
  type: IconType
  /** アイコンのサイズ */
  size?: number
  /** アイコンの色 */
  color?: string
  /** iconに追加するstyle(className) */
  style?: string
}

export const Icon: React.FC<Props> = ({
  type,
  size = 16,
  color,
  style = '',
}) => (
  <span
    className={`material-symbols-outlined ${style}`}
    style={{ fontSize: `${size}px`, color: `${color}` }}
    aria-hidden
  >
    {type}
  </span>
)
