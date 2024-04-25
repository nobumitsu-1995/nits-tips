import React from 'react'
import { Heading } from '@Atoms/Heading'
import { ArticleList } from '@Organisms/Top/ArticleList'
import * as styles from './Top.css'
import type { ArticleCardData } from '@/lib/interfaces/Article'

type Props = {
  /** 記事一覧 */
  articles: ArticleCardData[]
}

export const Presenter: React.FC<Props> = ({ articles }) => (
  <section className={styles.top}>
    <Heading text="記事一覧" />
    <div className={styles.container}>
      <ArticleList articles={articles} />
    </div>
  </section>
)
