import { HttpResponse } from 'msw'

export const sampleResolver = () => {
  return HttpResponse.json({
    data: 'sample',
    result: true,
  })
}
