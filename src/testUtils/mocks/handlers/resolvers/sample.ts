import { HttpResponse } from 'msw'

export const sampleResolver = () =>
  HttpResponse.json({
    data: 'sample',
    result: true,
  })
