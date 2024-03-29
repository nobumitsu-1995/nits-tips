import type { ComponentProps } from 'react'
import type { ArticleCard } from '@Molecules/ArticleCard'
import type { MicroCMS } from '@/types/microCMS'
import { convertDate } from '@/lib/helpers/convertDate'
import { convertToTagData } from './converToTagData'

export const convertToArticles = (
  blogs: MicroCMS['blog'][],
): ComponentProps<typeof ArticleCard>[] =>
  blogs.map((data) => ({
    id: data.id,
    title: data.title,
    description: data.description,
    tagData: convertToTagData(data.tags),
    publishedAt: convertDate(data.publishedAt),
    updatedAt: convertDate(data.updatedAt),
  }))
