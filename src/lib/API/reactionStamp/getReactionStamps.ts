import {
  REACTION_STAMPS,
  type StampId,
} from '@/components/Organisms/ReactionStamp/model'
import { customFetch } from './fetch'

type Response = {
  ReactionStampSummary: {
    StampId: StampId
    Total: number
  }[]
  ReactedStamp: {
    id: number
    stamp_id: StampId
  }[]
}

export const getReactionStamps = async () => {
  const response = await customFetch<undefined, Response>({
    method: 'GET',
    url: '/reactionStamps',
  })

  if (!response.ok) {
    throw new Error(response.error)
  }

  const reactedStamps = response.data.ReactedStamp.map(
    (stamp) => stamp.stamp_id,
  )
  const reactionStampSummary = response.data.ReactionStampSummary.map(
    (stamp) => ({
      stamp: REACTION_STAMPS.find(
        (reactionStamp) => reactionStamp.stampId === stamp.StampId,
      )!,
      count: stamp.Total,
      isChecked: response.data.ReactedStamp.some(
        (resReactedStamp) => resReactedStamp.stamp_id === stamp.StampId,
      ),
    }),
  )

  return {
    reactionStampSummary,
    reactedStamps,
  }
}
