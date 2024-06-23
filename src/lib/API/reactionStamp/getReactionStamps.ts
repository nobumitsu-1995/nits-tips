import type { StampId } from '@/components/Organisms/ReactionStamp/model'
import { customFetch } from './fetch'

type Response = {
  ReactionStampSummary: {
    StampId: StampId
    Total: number
  }[]
  ReactedStamp: {
    id: number
    stamp_id: number
  }
}

export const getReactionStamps = async () => {
  const response = await customFetch<undefined, Response>({
    method: 'GET',
    url: '/reactionStamps',
  })

  if (!response.ok) {
    throw new Error(response.error)
  }

  return response.data
}
