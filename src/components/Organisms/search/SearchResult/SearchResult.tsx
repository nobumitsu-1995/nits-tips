import React from 'react'
import { ArticleList } from '@Organisms/Top/ArticleList'
import { NoResult } from '../NoResult'
import { useSearchFormState } from '@/lib/Hooks/useSearchForm'
import { Loading } from './Loading'

export const SearchResult: React.FC = () => {
  const { articles, isLoading } = useSearchFormState()
  if (isLoading) return <Loading />
  if (articles.length === 0) return <NoResult />

  return <ArticleList articles={articles} />
}
