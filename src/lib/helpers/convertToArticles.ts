import type { MicroCMS } from '@/types/microCMS'
import { convertDate } from '@/lib/helpers/convertDate'
import { convertToTagData } from './convertToTagData'
import type { ArticleCardData } from '../interfaces/Article'

export const convertToArticles = (
  blogs: MicroCMS['blog'][],
): ArticleCardData[] =>
  blogs.map((data) => ({
    id: data.id,
    title: data.title,
    description: data.description,
    tagData: convertToTagData(data.tags),
    publishedAt: convertDate(data.publishedAt),
    updatedAt: convertDate(data.updatedAt),
  }))
