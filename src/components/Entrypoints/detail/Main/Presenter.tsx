import React, { type PropsWithChildren } from 'react'
import { Article } from '@Organisms/Detail/Article'
import { RelatedArticle } from '@Organisms/Detail/RelatedArticle'
import * as styles from './Main.css'
import type { ArticleCardData, ArticleData } from '@/lib/interfaces/Article'

type Props = PropsWithChildren<{
  /** 記事の内容 */
  article: ArticleData
  /** 関連記事 */
  relatedArticles: ArticleCardData[]
}>

export const Presenter: React.FC<Props> = ({
  article,
  relatedArticles,
  children,
}) => (
  <article className={styles.main}>
    <Article {...article}>{children}</Article>
    {relatedArticles.length !== 0 && (
      <RelatedArticle articles={relatedArticles} />
    )}
  </article>
)
