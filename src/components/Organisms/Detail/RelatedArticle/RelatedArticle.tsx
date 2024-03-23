import React, { type ComponentProps } from 'react'
import { Card } from '@Atoms/Card'
import { Heading } from '@Atoms/Heading'
import { ArticleCard } from '@Molecules/ArticleCard'
import * as styles from './RelatedArticle.css'

type Props = {
  /** 記事情報 */
  articles: ComponentProps<typeof ArticleCard>[]
}

export const RelatedArticle: React.FC<Props> = ({ articles }) => (
  <Card padding="36px 48px">
    <Heading text="関連記事" />
    <ul className={styles.list}>
      {articles.map((article) => (
        <li key={article.id}>
          <ArticleCard {...article} />
        </li>
      ))}
    </ul>
  </Card>
)
