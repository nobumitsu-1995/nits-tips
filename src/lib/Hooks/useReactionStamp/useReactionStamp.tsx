import { useEffect, useState } from 'react'
import {
  REACTION_STAMPS,
  type Stamp,
  type StampId,
} from '@/components/Organisms/ReactionStamp/model'
import {
  deleteReactionStamp,
  getReactionStamps,
  postReactionStamp,
} from '@/lib/API/reactionStamp'
import { TOAST_TYPE, useToastProvider } from '../useToastProvider'

type ReactionStampSummary = {
  stamp: Stamp
  count: number
  isChecked: boolean
}

type HandlePostStampPayload = {
  stampId: StampId
  articleId: string
}

type HandleDeleteStampPayload = {
  stampId: StampId
}

export type UseReactionStampPayloadType = {
  articleId: string
}

export type UseReactionStampReturnType = {
  isLoading: boolean
  reactionStampSummary: ReactionStampSummary[]
  reactedStamp: StampId[]
  handlePostStamp: (payload: HandlePostStampPayload) => void
  handleDeleteStamp: (payload: HandleDeleteStampPayload) => void
}

const INITIAL_STAMP_SUMMARY: ReactionStampSummary[] = REACTION_STAMPS.map(
  (stamp) => ({
    stamp,
    count: 0,
    isChecked: false,
  }),
)

const ERROR_TEXT =
  'スタンプの押下に失敗しました。しばらくしてから再度お試しください。'

export const useReactionStamp = ({
  articleId,
}: UseReactionStampPayloadType): UseReactionStampReturnType => {
  const [reactionStampSummary, setReactionStampSummary] = useState<
    ReactionStampSummary[]
  >(INITIAL_STAMP_SUMMARY)
  const { showToast } = useToastProvider()
  const [reactedStamp, setReactedStamp] = useState<StampId[]>([])
  const [isLoading, setIsLoading] = useState(false)

  /** stamp情報の取得 */
  useEffect(() => {
    getReactionStamps({ articleId })
      .then((res) => {
        setReactionStampSummary(res.reactionStampSummary)
        setReactedStamp(res.reactedStamps)
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e)
      })
  }, [articleId, showToast])

  // eslint-disable-next-line no-shadow
  const handlePostStamp = ({ stampId, articleId }: HandlePostStampPayload) => {
    /** 楽観的更新 */
    setIsLoading(true)
    setReactionStampSummary((prev) => {
      const target = prev.findIndex(({ stamp }) => stamp.stampId === stampId)
      // eslint-disable-next-line no-param-reassign
      prev[target] = {
        ...prev[target],
        count: prev[target].count + 1,
        isChecked: true,
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
            ({ stamp }) => stamp.stampId === stampId,
          )
          // eslint-disable-next-line no-param-reassign
          updatedStamp[target] = {
            ...updatedStamp[target],
            count: updatedStamp[target].count - 1,
            isChecked: false,
          }
          return updatedStamp
        })
        setReactedStamp((prev) => prev.filter((stamp) => stamp !== stampId))
        showToast({
          message: ERROR_TEXT,
          type: TOAST_TYPE.failed,
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleDeleteStamp = ({ stampId }: HandleDeleteStampPayload) => {
    /** 楽観的更新 */
    setIsLoading(true)
    setReactionStampSummary((prev) => {
      const target = prev.findIndex((stamp) => stamp.stamp.stampId === stampId)
      // eslint-disable-next-line no-param-reassign
      prev[target] = {
        ...prev[target],
        count: prev[target].count - 1,
        isChecked: false,
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
            (stamp) => stamp.stamp.stampId === stampId,
          )
          // eslint-disable-next-line no-param-reassign
          updatedStamp[target] = {
            ...updatedStamp[target],
            count: updatedStamp[target].count + 1,
            isChecked: true,
          }
          return updatedStamp
        })
        setReactedStamp((prev) => [...prev, stampId])
        showToast({
          message: ERROR_TEXT,
          type: TOAST_TYPE.failed,
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
