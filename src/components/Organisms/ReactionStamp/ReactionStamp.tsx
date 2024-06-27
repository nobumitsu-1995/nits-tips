/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import * as styles from './ReactionStamp.css'
import { TriggerButton } from './TriggerButton'
import { ReactionButtonModal } from './ReactionButtonModal'
import { ReactedButtons } from './ReactedButtons'
import type { useReactionStamp } from '@/lib/Hooks/useReactionStamp'
import type { StampId } from './model'

type Props = ReturnType<typeof useReactionStamp> & {
  articleId: string
}

export const ReactionStamp: React.FC<Props> = ({
  isLoading,
  reactionStampSummary,
  reactedStamp,
  handlePostStamp,
  handleDeleteStamp,
  articleId,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClickStamp = (stampId: StampId) => {
    reactedStamp.includes(stampId)
      ? handleDeleteStamp({
          stampId,
        })
      : handlePostStamp({
          stampId,
          articleId,
        })
  }

  return (
    <div className={styles.reactionStamp}>
      {isOpen && (
        <>
          <div className={`${styles.modal}`}>
            <ReactionButtonModal
              isDisabled={isLoading}
              reactedStampId={reactedStamp}
              onClick={handleClickStamp}
            />
          </div>
          <div
            className={styles.modalContainer}
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
      <TriggerButton onClick={handleClick} />
      <ReactedButtons
        isDisabled={isLoading}
        reactedStamps={reactionStampSummary}
        onClick={handleClickStamp}
      />
    </div>
  )
}
