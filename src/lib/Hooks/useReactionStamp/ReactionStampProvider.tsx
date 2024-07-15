import React, { type PropsWithChildren } from 'react'
import { createCustomComtext } from '@/lib/helpers/createCustomContext'
import {
  useReactionStamp,
  type UseReactionStampPayloadType,
  type UseReactionStampReturnType,
} from './useReactionStamp'

type State = 'isLoading' | 'reactionStampSummary' | 'reactedStamp'
type ReactionStampAction = Omit<UseReactionStampReturnType, State>
type ReactionStampState = Pick<UseReactionStampReturnType, State>

const [ActionProvider, useActionContext] =
  createCustomComtext<ReactionStampAction>({
    handlePostStamp: () => {},
    handleDeleteStamp: () => {},
  })
const [StateProvider, useStateContext] =
  createCustomComtext<ReactionStampState>({
    isLoading: false,
    reactionStampSummary: [],
    reactedStamp: [],
  })

export const ReactionStampProvider = ({
  articleId,
  children,
}: PropsWithChildren<UseReactionStampPayloadType>) => {
  const {
    isLoading,
    reactionStampSummary,
    reactedStamp,
    handlePostStamp,
    handleDeleteStamp,
  } = useReactionStamp({ articleId })

  return (
    <ActionProvider
      value={{
        handleDeleteStamp,
        handlePostStamp,
      }}
    >
      <StateProvider
        value={{
          isLoading,
          reactionStampSummary,
          reactedStamp,
        }}
      >
        {children}
      </StateProvider>
    </ActionProvider>
  )
}

export const useReactionStampAction = useActionContext
export const useReactionStampState = useStateContext
