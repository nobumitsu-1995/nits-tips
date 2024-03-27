import React, { type ComponentProps } from 'react'
import { ArticleList } from '@Organisms/Top/ArticleList'
import { Heading } from '@Atoms/Heading'
import type { ArticleCard } from '@Molecules/ArticleCard'
import { NoResult } from '@Organisms/search/NoResult'
import * as styles from './Result.css'

type Props = {
  /** 記事一覧 */
  articles: ComponentProps<typeof ArticleCard>[]
}

export const Presenter: React.FC<Props> = ({ articles }) => (
  <section className={styles.result}>
    <Heading text="検索結果" />
    <div className={styles.container}>
      {articles.length === 0 ? (
        <NoResult />
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  </section>
)
