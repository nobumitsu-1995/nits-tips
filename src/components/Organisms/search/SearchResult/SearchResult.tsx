import React from 'react'
import { ArticleList } from '@Organisms/Top/ArticleList'
import { NoResult } from '../NoResult'
import { Loading } from '@/components/UI/Atoms/Loading'
import type { ArticleCardData } from '@/lib/interfaces/Article'

type Props = {
  articles: ArticleCardData[]
  isLoading: boolean
}

export const SearchResult: React.FC<Props> = ({ articles, isLoading }) => {
  if (isLoading) return <Loading />
  if (articles.length === 0) return <NoResult />

  return <ArticleList articles={articles} />
}
