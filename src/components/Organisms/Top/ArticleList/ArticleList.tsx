import React from 'react'
import * as styles from './ArticleList.css'
import { ArticleCard } from '@/components/UI/Molecules/ArticleCard'
import type { ArticleCardData } from '@/lib/interfaces/Article'

type Props = {
  /** 記事情報 */
  articles: ArticleCardData[]
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
