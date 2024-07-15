import React from 'react'
import { ReactionStampProvider } from '@/lib/Hooks/useReactionStamp'
import Presenter from './Presenter'

type Props = {
  /** 記事ID */
  articleId: string
}

export const Container: React.FC<Props> = ({ articleId }) => (
  <ReactionStampProvider articleId={articleId}>
    <Presenter />
  </ReactionStampProvider>
)
