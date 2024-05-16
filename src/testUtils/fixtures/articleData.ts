import { tagData as tags } from './tagData'
import type { ArticleCardData } from '@/lib/interfaces/Article'

export const createArticle = ({
  id = '1',
  title = 'このあのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
  description = 'このあのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。このあのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
  tagData = tags,
  publishedAt = '2024/03/17',
  updatedAt = '2024/03/17',
  thumbnail = 'https://placehold.co/1200x630/F0DB4F/000',
}: Partial<ArticleCardData>): ArticleCardData => ({
  id,
  title,
  description,
  tagData,
  publishedAt,
  updatedAt,
  thumbnail,
})

export const createArtilceArray = (n = 15) =>
  [...new Array(n)].map((_, index) => createArticle({ id: index.toString() }))
