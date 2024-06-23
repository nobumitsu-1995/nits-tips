import { HttpResponse } from 'msw'
import { reactionStamps } from '@/testUtils/fixtures/reactionStampData'

export const getReactionStampsResolver = () =>
  HttpResponse.json({
    ok: true,
    data: reactionStamps,
  })
