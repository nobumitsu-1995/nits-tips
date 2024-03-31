import type { MicroCMS } from '@/types/microCMS'
import { client } from './client'

type Blog = MicroCMS['blog']

const ENDPOINT = 'blogs'

export const getAllBlogs = async () => {
  const data = await client.getAllContents<Blog>({
    endpoint: ENDPOINT,
    queries: {
      filters: `isHidden[not_equals]true`,
    },
  })

  if (!data) return []

  return data
}
