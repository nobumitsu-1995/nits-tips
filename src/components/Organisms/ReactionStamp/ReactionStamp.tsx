import React, { useEffect, useId, useRef, useState } from 'react'
import * as styles from './ReactionStamp.css'
import { TriggerButton } from './TriggerButton'
import { ReactionButtonModal } from './ReactionButtonModal'
import { ReactedButtons } from './ReactedButtons'
import type { StampId } from './model'
import type {
  useReactionStampAction,
  useReactionStampState,
} from '@/lib/Hooks/useReactionStamp'

type Props = ReturnType<typeof useReactionStampAction> &
  ReturnType<typeof useReactionStampState> & {
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
  const dialogRef = useRef<HTMLDialogElement>(null)
  const a11yId = useId()

  useEffect(() => {
    const dialogElement = dialogRef.current
    if (!dialogElement) return

    if (isOpen) {
      dialogElement.show()
      return
    }

    dialogElement.close()
  }, [isOpen])

  useEffect(() => {
    document.addEventListener('click', () => {
      const dialogElement = dialogRef.current
      if (!dialogElement || !isOpen) return
      setIsOpen(false)
    })
  }, [isOpen])

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClickStamp = (stampId: StampId) => {
    setIsOpen(false)
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
      <dialog className={styles.modal} ref={dialogRef} id={a11yId}>
        <ReactionButtonModal
          isDisabled={isLoading}
          reactedStampId={reactedStamp}
          onClick={handleClickStamp}
        />
      </dialog>
      <TriggerButton
        onClick={handleClick}
        ariaExpanded={isOpen}
        ariaControls={a11yId}
      />
      <ReactedButtons
        isDisabled={isLoading}
        reactedStamps={reactionStampSummary}
        onClick={handleClickStamp}
      />
    </div>
  )
}
