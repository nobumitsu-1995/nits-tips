import { createClient, type MakeRequest } from 'microcms-js-sdk'

const SERVICE_DOMAIN = 'nits-tips'

export const client = createClient({
  serviceDomain: SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
})

export const getMicroCMSContents = <T>({
  endpoint,
  contentId,
  queries,
}: MakeRequest) =>
  client
    .get<T>({
      endpoint,
      ...(contentId && { contentId }),
      ...(queries && { queries }),
    })
    .catch(() => undefined)
