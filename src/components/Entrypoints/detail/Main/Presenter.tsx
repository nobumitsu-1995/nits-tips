import React, { type ComponentProps } from 'react'
import { Article } from '@Organisms/Detail/Article'
import { RelatedArticle } from '@Organisms/Detail/RelatedArticle'
import type { ArticleCard } from '@Molecules/ArticleCard'
import * as styles from './Main.css'

type Props = {
  /** 記事の内容 */
  article: ComponentProps<typeof Article>
  /** 関連記事 */
  relatedArticles: ComponentProps<typeof ArticleCard>[]
}

export const Presenter: React.FC<Props> = ({ article, relatedArticles }) => (
  <article className={styles.main}>
    <Article {...article} />
    {relatedArticles.length !== 0 && (
      <RelatedArticle articles={relatedArticles} />
    )}
  </article>
)
