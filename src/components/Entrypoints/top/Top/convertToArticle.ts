import type { ComponentProps } from 'react'
import type { ArticleCard } from '@Molecules/ArticleCard'
import type { MicroCMS } from '@/types/microCMS'
import { convertDate } from '@/lib/helpers/convertDate'

/** TODO: hrefとsrcの設定 */
const convertToTagData = (tags: MicroCMS['tag'][]) =>
  tags.map((data) => ({
    label: data.label,
    href: `https://example.com/?id=${data.id}`,
    src: data.id,
  }))

export const convertToArticle = (
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
