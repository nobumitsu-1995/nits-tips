import React from 'react'
import * as styles from './ReactionButton.css'
import type { Stamp, StampId } from '../../model'

type Props = {
  isReacted: boolean
  stamp: Stamp
  onClick: (stampId: StampId) => void
}

export const ReactionButton: React.FC<Props> = ({
  isReacted,
  stamp,
  onClick,
}) => (
  <button
    className={styles.reactionButton}
    aria-label={`${isReacted ? `${stamp.label}リアクションを取り消す` : `${stamp.label}リアクションをする`}`}
    type="button"
    onClick={() => onClick(stamp.stampId)}
  >
    {stamp.icon}
  </button>
)
