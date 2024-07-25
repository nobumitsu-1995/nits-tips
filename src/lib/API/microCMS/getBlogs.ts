import type { MicroCMSQueries } from 'microcms-js-sdk'
import type { MicroCMS } from '@/types/microCMS'
import { getMicroCMSContents } from './client'

type Response = {
  contents: MicroCMS['blog'][]
}

const ENDPOINT = 'blogs'

export const getBlogsData = async (query?: MicroCMSQueries) => {
  const blogs = await getMicroCMSContents<Response | undefined>({
    endpoint: ENDPOINT,
    queries: {
      orders: '-publishedAt',
      limit: 15,
      ...query,
    },
  })

  if (!blogs) return undefined

  return blogs.contents
}
