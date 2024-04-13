import type { MicroCMS } from '@/types/microCMS'
import { client } from './client'

type Tag = MicroCMS['tag']

const ENDPOINT = 'tags'

export const getAllTags = async () => {
  const data = await client.getAllContents<Tag>({
    endpoint: ENDPOINT,
  })

  if (!data) return []

  return data
}
