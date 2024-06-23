import { HttpResponse } from 'msw'

export const postReactionStampResolver = () =>
  HttpResponse.json({
    ok: true,
    data: {
      ID: 68,
      StampId: 2,
    },
  })
