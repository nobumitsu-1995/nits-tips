import React, { type ComponentProps } from 'react'
import * as styles from './ArticleList.css'
import { ArticleCard } from '@/components/UI/Molecules/ArticleCard'

type Props = {
  /** 記事情報 */
  articles: ComponentProps<typeof ArticleCard>[]
}

export const ArticleList: React.FC<Props> = ({ articles }) => (
  <ul className={styles.articleList}>
    {articles.map((article) => (
      <li key={article.id}>
        <ArticleCard {...article} />
      </li>
    ))}
  </ul>
)
