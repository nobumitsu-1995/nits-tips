import React from 'react'
import { ArticleSection } from '@Organisms/Top/ArticleSection'
// import * as styles from './NewestArticles.css'
import type { MicroCMS } from '@/types/microCMS'
import { convertToArticles } from '@/lib/helpers/convertToArticles'
import { useArticleWithPagination } from '@/lib/Hooks/useArticleWithPagination'

type Props = {
  /** 記事一覧 */
  blogs: MicroCMS['blog'][]
}

export const NewestArticles: React.FC<Props> = ({ blogs }) => {
  const articles = convertToArticles(blogs)
  const { currentArticles, totalPage, currentPage, setCurrentPage } =
    useArticleWithPagination({ articles })

  return (
    <ArticleSection
      title="新着記事"
      articles={currentArticles}
      totalPage={totalPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  )
}
