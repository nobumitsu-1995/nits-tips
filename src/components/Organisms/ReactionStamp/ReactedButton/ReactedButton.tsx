import React from 'react'
import * as styles from './ReactedButton.css'
import { type Stamp } from './model'

type Props = {
  stamp: Stamp
  count: number
  isActive: boolean
  onClick: () => void
}

export const ReactedButton: React.FC<Props> = ({
  stamp,
  count,
  isActive,
  onClick,
}) => (
  <button
    aria-label={`${count}の${stamp.label}リアクション ${isActive ? `${stamp.label}リアクションを取り消す` : `${stamp.label}リアクションをする`}`}
    role="switch"
    aria-checked={isActive}
    className={`${styles.reactedButton} ${isActive && styles.active}`}
    type="button"
    onClick={onClick}
  >
    {stamp.icon}
    <span className={styles.count}>{count}</span>
  </button>
)
