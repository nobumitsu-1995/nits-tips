import React from 'react'
import type { IconType } from './model'

type Props = {
  /** 名前 */
  type: IconType
  /** アイコンのサイズ */
  size?: number
  /** アイコンの色 */
  color?: string
}

export const Icon: React.FC<Props> = ({ type, size = 16, color }) => (
  <span
    className="material-symbols-outlined"
    style={{ fontSize: `${size}px`, color: `${color}` }}
    aria-hidden
  >
    {type}
  </span>
)
