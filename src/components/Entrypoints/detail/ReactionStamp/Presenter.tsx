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

  const articleHeaderDOM = document.querySelector(
    '[data-reaction-stamp-entrypoint1]',
  )
  const articleBottomDOM = document.querySelector(
    '[data-reaction-stamp-entrypoint2]',
  )

  if (!articleHeaderDOM || !articleBottomDOM) return null

  return (
    <>
      {createPortal(
        <ReactionStamp {...reactionStampActions} {...reactionStampStates} />,
        articleHeaderDOM,
      )}
      {createPortal(
        <ReactionStamp {...reactionStampActions} {...reactionStampStates} />,
        articleBottomDOM,
      )}
    </>
  )
}

export default Presenter
