import type { MicroCMS } from '@/types/microCMS'
import { getMicroCMSContents } from './client'

const ENDPOINT = 'blogs'
type Args = {
  contentId: string
  draftKey: string
}
type Blog = MicroCMS['blog']

export const getDraftBlog = async ({ contentId, draftKey }: Args) => {
  const blog = await getMicroCMSContents<Blog | undefined>({
    endpoint: ENDPOINT,
    contentId,
    queries: {
      draftKey,
    },
  })

  if (!blog) return undefined

  return blog
}
