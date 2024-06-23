import { HttpResponse } from 'msw'

export const deleteReactionStampResolver = () =>
  HttpResponse.json({
    ok: true,
    data: {},
  })
