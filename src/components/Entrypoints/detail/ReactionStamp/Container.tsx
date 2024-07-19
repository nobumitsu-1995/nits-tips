import React from 'react'
import { ReactionStampProvider } from '@/lib/Hooks/useReactionStamp'
import Presenter from './Presenter'
import { ToastProvider } from '@/lib/Hooks/useToastProvider/useToastProvider'

type Props = {
  /** 記事ID */
  articleId: string
}

export const Container: React.FC<Props> = ({ articleId }) => (
  <ToastProvider>
    <ReactionStampProvider articleId={articleId}>
      <Presenter />
    </ReactionStampProvider>
  </ToastProvider>
)
