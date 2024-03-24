import type { MicroCMS } from '@/types/microCMS'
import { getMicroCMSContents } from './client'

type Response = {
  contents: MicroCMS['blog'][]
}

const ENDPOINT = 'blogs'

export const getBlogsData = async () => {
  const blogs = await getMicroCMSContents<Response | undefined>({
    endpoint: ENDPOINT,
  })

  if (!blogs) return undefined

  return blogs.contents
}
