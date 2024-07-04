import React from 'react'
import { ReactionStamp as ReactionStampComponent } from '@Organisms/ReactionStamp'
import { useReactionStamp } from '@/lib/Hooks/useReactionStamp'

type Props = {
  articleId: string
}

export const ReactionStamp: React.FC<Props> = ({ articleId }) => {
  const returnValue = useReactionStamp({ articleId })
  return <ReactionStampComponent articleId={articleId} {...returnValue} />
}
