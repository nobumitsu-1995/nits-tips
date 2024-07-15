import React from 'react'
import { ReactionStamp } from '@Organisms/ReactionStamp'
import { createPortal } from 'react-dom'
import {
  useReactionStampAction,
  useReactionStampState,
} from '@/lib/Hooks/useReactionStamp'

const Presenter: React.FC = () => {
  const reactionStampActions = useReactionStampAction()
  const reactionStampStates = useReactionStampState()

  return (
    <>
      {createPortal(
        <ReactionStamp {...reactionStampActions} {...reactionStampStates} />,
        document.querySelector('[data-reaction-stamp-entrypoint1]')!,
      )}
      {createPortal(
        <ReactionStamp {...reactionStampActions} {...reactionStampStates} />,
        document.querySelector('[data-reaction-stamp-entrypoint2]')!,
      )}
    </>
  )
}

export default Presenter
