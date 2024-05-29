import React from 'react'
import { Heading } from '@Atoms/Heading'
import { ArticleList } from '@Organisms/Top/ArticleList'
import * as styles from './Top.css'
import type { MicroCMS } from '@/types/microCMS'
import { convertToArticles } from '@/lib/helpers/convertToArticles'

type Props = {
  /** 記事一覧 */
  blogs: MicroCMS['blog'][]
}

export const Top: React.FC<Props> = ({ blogs }) => {
  const articles = convertToArticles(blogs)

  return (
    <section className={styles.top}>
      <Heading text="記事一覧" />
      <div className={styles.container}>
        <ArticleList articles={articles} />
      </div>
    </section>
  )
}
