import {
  REACTION_STAMPS,
  type StampId,
} from '@/components/Organisms/ReactionStamp/model'
import { customFetch } from './fetch'

type Args = {
  articleId: string
}

type Response = {
  ReactionStampSummary: {
    StampId: StampId
    Total: number
  }[]
  ReactedStamp: StampId[]
}

export const getReactionStamps = async ({ articleId }: Args) => {
  const response = await customFetch<undefined, Response>({
    method: 'GET',
    url: `/reactionStamps/${articleId}`,
  })

  if (!response.ok) {
    throw new Error(response.error)
  }

  const reactionStampSummary = response.data.ReactionStampSummary.map(
    (stamp) => ({
      stamp: REACTION_STAMPS.find(
        (reactionStamp) => reactionStamp.stampId === stamp.StampId,
      )!,
      count: stamp.Total,
      isChecked: response.data.ReactedStamp.some(
        (resReactedStamp) => resReactedStamp === stamp.StampId,
      ),
    }),
  )

  return {
    reactionStampSummary,
    reactedStamps: response.data.ReactedStamp,
  }
}
