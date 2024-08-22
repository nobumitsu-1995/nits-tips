import { useEffect, useRef, useState } from 'react'
import type { ArticleCardData } from '@/lib/interfaces/Article'

type UseArticleWithPaginationPayloadType = {
  /** 全ての記事データ */
  articles: ArticleCardData[]
}

type UseArticleWithPaginationReturnType = {
  /** 表示する記事の配列 */
  currentArticles: ArticleCardData[]
  /** ページ数 */
  totalPage: number
  /** 現在表示されているページ数 */
  currentPage: number
  /** 現在ページを制御する関数 */
  setCurrentPage: (page: number) => void
}

const ARTICLES_PER_PAGE = 6
export const calcTotalPage = (length: number) =>
  Math.ceil(length / ARTICLES_PER_PAGE)

export const useArticleWithPagination = ({
  articles,
}: UseArticleWithPaginationPayloadType): UseArticleWithPaginationReturnType => {
  const copyArticles = useRef(articles)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentArticles, setCurrentArticles] = useState(
    copyArticles.current.slice(0, ARTICLES_PER_PAGE),
  )
  const totalPage = calcTotalPage(copyArticles.current.length)

  useEffect(() => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
    const endIndex = startIndex + ARTICLES_PER_PAGE
    const filterdArticles = copyArticles.current.slice(startIndex, endIndex)
    setCurrentArticles(filterdArticles)
  }, [currentPage])

  return {
    currentArticles,
    totalPage,
    currentPage,
    setCurrentPage,
  }
}
