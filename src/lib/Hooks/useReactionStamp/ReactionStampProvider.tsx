import React, { type PropsWithChildren } from 'react'
import { createCustomComtext } from '@/lib/helpers/createCustomContext'
import {
  useReactionStamp,
  type UseReactionStampPayloadType,
  type UseReactionStampReturnType,
} from './useReactionStamp'
import { ToastProvider } from '../useToastProvider/useToastProvider'

type State = 'isLoading' | 'reactionStampSummary' | 'reactedStamp'
type ReactionStampAction = Omit<UseReactionStampReturnType, State>
type ReactionStampState = {
  articleId: string
} & Pick<UseReactionStampReturnType, State>

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
    articleId: '',
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
    <ToastProvider>
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
            articleId,
          }}
        >
          {children}
        </StateProvider>
      </ActionProvider>
    </ToastProvider>
  )
}

export const useReactionStampAction = useActionContext
export const useReactionStampState = useStateContext
