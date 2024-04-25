import React from 'react'
import { Article } from '@Organisms/Detail/Article'
import { RelatedArticle } from '@Organisms/Detail/RelatedArticle'
import * as styles from './Main.css'
import type { ArticleCardData, ArticleData } from '@/lib/interfaces/Article'

type Props = {
  /** 記事の内容 */
  article: ArticleData
  /** 関連記事 */
  relatedArticles: ArticleCardData[]
}

export const Presenter: React.FC<Props> = ({ article, relatedArticles }) => (
  <article className={styles.main}>
    <Article {...article} />
    {relatedArticles.length !== 0 && (
      <RelatedArticle articles={relatedArticles} />
    )}
  </article>
)
