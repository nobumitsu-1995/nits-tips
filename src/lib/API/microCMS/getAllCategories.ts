import type { MicroCMS } from '@/types/microCMS'
import { client } from './client'

type Category = MicroCMS['category']

const ENDPOINT = 'categories'

export const getAllCategories = async () => {
  const data = await client.getAllContents<Category>({
    endpoint: ENDPOINT,
  })

  if (!data) return []

  return data
}
