import { HttpResponse } from 'msw'

export const sampleResolver = () =>
  HttpResponse.json({
    result: true,
    data: 'sample',
  })
