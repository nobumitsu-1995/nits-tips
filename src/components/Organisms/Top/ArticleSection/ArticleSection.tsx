import React from 'react'
import { Heading } from '@Atoms/Heading'
import * as styles from './ArticleSection.css'
import { ArticleList } from '../ArticleList'
import type { ArticleCardData } from '@/lib/interfaces/Article'
import { Pagination } from '@/components/UI/Molecules/Pagination'

type Props = {
  /** sectionのタイトル */
  title: string
  /** 表示する記事の配列 */
  articles: ArticleCardData[]
  /** ページ数 */
  totalPage: number
  /** 現在表示されているページ数 */
  currentPage: number
  /** 現在ページを制御する関数 */
  setCurrentPage: (page: number) => void
}

export const ArticleSection: React.FC<Props> = ({
  title,
  articles,
  totalPage,
  currentPage,
  setCurrentPage,
}) => (
  <section className={styles.articleSection}>
    <Heading text={title} />
    <ArticleList articles={articles} />
    {totalPage > 1 && (
      <div className={styles.paginationContainer}>
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    )}
  </section>
)
