import React from 'react'
import * as styles from './ReactionButtonModal.css'
import { REACTION_STAMPS, type StampId } from '../model'
import { ReactionButton } from './ReactionButton'

type Props = {
  reactedStampId: StampId[]
  onClick: (stampId: StampId) => void
}

export const ReactionButtonModal: React.FC<Props> = ({
  reactedStampId,
  onClick,
}) => (
  <div className={styles.reactionButtonModal}>
    {REACTION_STAMPS.map((stamp) => (
      <ReactionButton
        key={stamp.stampId}
        stamp={stamp}
        onClick={onClick}
        isReacted={reactedStampId.includes(stamp.stampId)}
      />
    ))}
  </div>
)
