import type { StampId } from '@/components/Organisms/ReactionStamp/model'
import { customFetch } from './fetch'

type Arguments = {
  stamp_id: StampId
  article_id: string
}

type Response = {
  hoge: string
}

export const postReactionStamp = async (args: Arguments) => {
  const response = await customFetch<Arguments, Response>({
    method: 'POST',
    url: '/reactionStamps',
    body: args,
  })

  if (!response.ok) {
    throw new Error(response.error)
  }

  return response.data
}
