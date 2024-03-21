import React, { type ComponentProps } from 'react'
import { Heading } from '@Atoms/Heading'
import { ArticleList } from '@Organisms/Top/ArticleList'
import type { ArticleCard } from '@Molecules/ArticleCard'
import * as styles from './Top.css'

type Props = {
  /** 記事一覧 */
  articles: ComponentProps<typeof ArticleCard>[]
}

export const Presenter: React.FC<Props> = ({ articles }) => (
  <section>
    <Heading text="記事一覧" />
    <div className={styles.container}>
      <ArticleList articles={articles} />
    </div>
  </section>
)
