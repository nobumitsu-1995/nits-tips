import React, { type ComponentProps } from 'react'
import type { ArticleCard } from '@Molecules/ArticleCard'
import { ArticleList } from '@Organisms/Top/ArticleList'
import { NoResult } from '../NoResult'
import { Loading } from '@/components/UI/Atoms/Loading'

type Props = {
  articles: ComponentProps<typeof ArticleCard>[]
  isLoading: boolean
}

export const SearchResult: React.FC<Props> = ({ articles, isLoading }) => {
  if (isLoading) return <Loading />
  if (articles.length === 0) return <NoResult />

  return <ArticleList articles={articles} />
}
