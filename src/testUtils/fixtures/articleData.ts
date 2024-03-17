import type { ComponentProps } from 'react'
import type { ArticleCard } from '@Molecules/ArticleCard'
import { tagData as tags } from './tagData'

type ArticleType = ComponentProps<typeof ArticleCard>

export const createArticle = ({
  id = '1',
  title = 'このあのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
  description = 'このあのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。このあのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
  tagData = tags,
  publishedAt = '2024/03/17',
  updatedAt = '2024/03/17',
}: Partial<ArticleType>): ArticleType => ({
  id,
  title,
  description,
  tagData,
  publishedAt,
  updatedAt,
})
