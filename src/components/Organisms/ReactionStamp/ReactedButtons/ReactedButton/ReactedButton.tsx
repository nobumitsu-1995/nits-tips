import React from 'react'
import * as styles from './ReactedButton.css'
import { type Stamp, type StampId } from '../../model'

type Props = {
  stamp: Stamp
  count: number
  isChecked: boolean
  onClick: (stampId: StampId) => void
}

export const ReactedButton: React.FC<Props> = ({
  stamp,
  count,
  isChecked,
  onClick,
}) => (
  <button
    aria-label={`${count}の${stamp.label}リアクション ${isChecked ? `${stamp.label}リアクションを取り消す` : `${stamp.label}リアクションをする`}`}
    role="switch"
    aria-checked={isChecked}
    className={`${styles.reactedButton} ${isChecked && styles.active}`}
    type="button"
    onClick={() => onClick(stamp.stampId)}
  >
    {stamp.icon}
    <span className={styles.count}>{count}</span>
  </button>
)
