import type { StampId } from '@/components/Organisms/ReactionStamp/model'
import { fetchWithRetry } from './fetch'

type Arguments = {
  stamp_id: StampId
  article_id: string
}

type Response = {
  ID: number
  StampId: number
}

export const postReactionStamp = async (args: Arguments) => {
  const response = await fetchWithRetry<Arguments, Response>({
    method: 'POST',
    url: '/reactionStamps',
    body: args,
  })

  if (!response.ok) {
    throw new Error(response.error)
  }

  return response.data
}
