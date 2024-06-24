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

type ReactedStamp = {
  id?: number
  stampId: number
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
  reactedStamp?: ReactedStamp
  handlePostStamp: (payload: HandlePostStampPayload) => void
  handleDeleteStamp: (payload: HandleDeleteStampPayload) => void
}

export const useReactionStamp = (): UseReactionStampReturnType => {
  const [reactionStampSummary, setReactionStampSummary] = useState<
    ReactionStampSummary[]
  >([])
  const [reactedStamp, setReactedStamp] = useState<ReactedStamp | undefined>(
    undefined,
  )
  const [isLoading, setIsLoading] = useState(false)

  /** stamp情報の取得 */
  useEffect(() => {
    getReactionStamps()
      .then((res) => {
        setReactionStampSummary(res.ReactionStampSummary)
        setReactedStamp({
          id: res.ReactedStamp.id,
          stampId: res.ReactedStamp.stamp_id,
        })
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
      const updatedStamp = {
        ...prev[target],
        Total: prev[target].Total + 1,
      }
      return [...prev, updatedStamp]
    })
    setReactedStamp({
      stampId,
    })

    /** 実際の更新処理 */
    postReactionStamp({
      stamp_id: stampId,
      article_id: articleId,
    })
      .then((res) => {
        setReactedStamp({
          id: res.ID,
          stampId: res.StampId,
        })
      })
      .catch(() => {
        /** fetchに失敗した時、直前データに切り戻す */
        setReactionStampSummary((updatedStamp) => {
          const target = updatedStamp.findIndex(
            (stamp) => stamp.StampId === stampId,
          )
          const prev = {
            ...updatedStamp[target],
            Total: updatedStamp[target].Total - 1,
          }
          return [...updatedStamp, prev]
        })
        setReactedStamp(undefined)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleDeleteStamp = ({ id, stampId }: HandleDeleteStampPayload) => {
    /** 楽観的更新 */
    setIsLoading(true)
    setReactionStampSummary((prev) => {
      const target = prev.findIndex((stamp) => stamp.StampId === stampId)
      const updatedStamp = {
        ...prev[target],
        Total: prev[target].Total - 1,
      }
      return [...prev, updatedStamp]
    })
    setReactedStamp(undefined)

    /** 実際の更新処理 */
    deleteReactionStamp(id)
      .catch(() => {
        /** fetchに失敗した時、直前データに切り戻す */
        setReactionStampSummary((updatedStamp) => {
          const target = updatedStamp.findIndex(
            (stamp) => stamp.StampId === stampId,
          )
          const prev = {
            ...updatedStamp[target],
            Total: updatedStamp[target].Total + 1,
          }
          return [...updatedStamp, prev]
        })
        setReactedStamp({
          id,
          stampId,
        })
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
