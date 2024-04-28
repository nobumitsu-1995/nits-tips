import { useEffect, useRef, useState } from 'react'
import { useFilterSearch } from '../useFilterSearch'
import { useWordSearch } from '../useWordSearch'
import type {
  UseFilterSearchPayloadType,
  UseFilterSearchReturnType,
} from '../useFilterSearch/useFilterSearch'
import type {
  UseWordSearchPayloadType,
  UseWordSearchReturnType,
} from '../useWordSearch/useWordSearch'
import { convertToArticles } from '@/lib/helpers/convertToArticles'
import { getBlogsData } from '@/lib/API/microCMS/getBlogs'
import type { ArticleCardData } from '@/lib/interfaces/Article'

export type UseSearchFormPayloadType = {
  initialArticles: ArticleCardData[]
} & UseFilterSearchPayloadType &
  UseWordSearchPayloadType

export type UseSearchFormReturnType = {
  articles: ArticleCardData[]
  isLoading: boolean
  handleSubmitSearch: (e: React.FormEvent<HTMLFormElement>) => void
} & Omit<UseFilterSearchReturnType, 'filterParams'> &
  Omit<UseWordSearchReturnType, 'wordParams'>

export const useSearchForm = ({
  initialArticles,
  initialTags,
  initialCategory,
  initialSearchType,
  initialSearchWord,
}: UseSearchFormPayloadType): UseSearchFormReturnType => {
  const isFirstRender = useRef(true)
  const [articles, setArticles] = useState(initialArticles)
  const [isLoading, setIsLoading] = useState(false)

  const {
    filterParams,
    selectedFilters,
    handleSetCategory,
    handleSetTags,
    handleChangeSortType,
  } = useFilterSearch({ initialTags, initialCategory })
  const { wordParams, selectedWord, handleSetSearch, handleSetSearchType } =
    useWordSearch({
      initialSearchType,
      initialSearchWord,
    })

  /** 絞り込み検索の実行処理 */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    setIsLoading(true)
    getBlogsData({
      ...filterParams,
      limit: 100,
    })
      .then((res) => setArticles(convertToArticles(res ?? [])))
      .finally(() => setIsLoading(false))
  }, [filterParams])

  /** ワード検索実行時に発火する関数 */
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getBlogsData({
      ...wordParams,
      limit: 100,
    })
      .then((res) => setArticles(convertToArticles(res ?? [])))
      .finally(() => setIsLoading(false))
  }

  return {
    articles,
    isLoading,
    selectedFilters,
    selectedWord,
    handleSetCategory,
    handleSetTags,
    handleChangeSortType,
    handleSetSearch,
    handleSetSearchType,
    handleSubmitSearch,
  }
}
