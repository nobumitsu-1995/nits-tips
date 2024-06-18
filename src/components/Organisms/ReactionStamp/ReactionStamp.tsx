/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import * as styles from './ReactionStamp.css'
import { TriggerButton } from './TriggerButton'
import { ReactionButtonModal } from './ReactionButtonModal'
import { REACTION_STAMPS } from './model'
import { ReactedButton } from './ReactedButton'

export const ReactionStamp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.reactionStamp}>
      {isOpen && (
        <>
          <div className={`${styles.modal}`}>
            <ReactionButtonModal
              reactedStampId={[1, 2, 3]}
              onClick={() => {}}
            />
          </div>
          <div
            className={styles.modalContainer}
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
      <TriggerButton onClick={handleClick} />
      {[
        { stamp: REACTION_STAMPS[0], count: 12, isChecked: false },
        { stamp: REACTION_STAMPS[5], count: 24, isChecked: true },
      ].map((stamp) => (
        <ReactedButton
          key={stamp.stamp.stampId}
          stamp={stamp.stamp}
          count={stamp.count}
          isChecked={stamp.isChecked}
          onClick={() => {}}
        />
      ))}
    </div>
  )
}
