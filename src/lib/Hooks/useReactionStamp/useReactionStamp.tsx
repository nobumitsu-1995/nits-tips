import { useEffect, useState } from 'react'
import type { StampId } from '@/components/Organisms/ReactionStamp/model'
import {
  deleteReactionStamp,
  getReactionStamps,
  postReactionStamp,
} from '@/lib/API/reactionStamp'

type ReactionStampSummary = {
  StampId: StampId
  Total: number
}

type HandlePostStampPayload = {
  stampId: StampId
  articleId: string
}

type HandleDeleteStampPayload = {
  id: number
  stampId: StampId
}

type UseReactionStampReturnType = {
  isLoading: boolean
  reactionStampSummary: ReactionStampSummary[]
  reactedStamp: number[]
  handlePostStamp: (payload: HandlePostStampPayload) => void
  handleDeleteStamp: (payload: HandleDeleteStampPayload) => void
}

export const useReactionStamp = (): UseReactionStampReturnType => {
  const [reactionStampSummary, setReactionStampSummary] = useState<
    ReactionStampSummary[]
  >([])
  const [reactedStamp, setReactedStamp] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)

  /** stamp情報の取得 */
  useEffect(() => {
    getReactionStamps()
      .then((res) => {
        setReactionStampSummary(res.ReactionStampSummary)
        setReactedStamp(res.ReactedStamp.map((stamp) => stamp.stamp_id))
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e)
      })
  }, [])

  const handlePostStamp = ({ stampId, articleId }: HandlePostStampPayload) => {
    /** 楽観的更新 */
    setIsLoading(true)
    setReactionStampSummary((prev) => {
      const target = prev.findIndex((stamp) => stamp.StampId === stampId)
      // eslint-disable-next-line no-param-reassign
      prev[target] = {
        ...prev[target],
        Total: prev[target].Total + 1,
      }
      return prev
    })
    setReactedStamp((prev) => [...prev, stampId])

    /** 実際の更新処理 */
    postReactionStamp({
      stamp_id: stampId,
      article_id: articleId,
    })
      .catch(() => {
        /** fetchに失敗した時、直前データに切り戻す */
        setReactionStampSummary((updatedStamp) => {
          const target = updatedStamp.findIndex(
            (stamp) => stamp.StampId === stampId,
          )
          // eslint-disable-next-line no-param-reassign
          updatedStamp[target] = {
            ...updatedStamp[target],
            Total: updatedStamp[target].Total - 1,
          }
          return updatedStamp
        })
        setReactedStamp((prev) => prev.filter((stamp) => stamp !== stampId))
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleDeleteStamp = ({ stampId }: HandleDeleteStampPayload) => {
    /** 楽観的更新 */
    setIsLoading(true)
    setReactionStampSummary((prev) => {
      const target = prev.findIndex((stamp) => stamp.StampId === stampId)
      // eslint-disable-next-line no-param-reassign
      prev[target] = {
        ...prev[target],
        Total: prev[target].Total - 1,
      }
      return prev
    })
    setReactedStamp((prev) => prev.filter((stamp) => stamp !== stampId))

    /** 実際の更新処理 */
    deleteReactionStamp(stampId)
      .catch(() => {
        /** fetchに失敗した時、直前データに切り戻す */
        setReactionStampSummary((updatedStamp) => {
          const target = updatedStamp.findIndex(
            (stamp) => stamp.StampId === stampId,
          )
          // eslint-disable-next-line no-param-reassign
          updatedStamp[target] = {
            ...updatedStamp[target],
            Total: updatedStamp[target].Total + 1,
          }
          return updatedStamp
        })
        setReactedStamp((prev) => [...prev, stampId])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return {
    isLoading,
    reactionStampSummary,
    reactedStamp,
    handlePostStamp,
    handleDeleteStamp,
  }
}
