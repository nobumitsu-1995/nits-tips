import React, { type PropsWithChildren } from 'react'
import { TagList } from '@Molecules/TagList'
import { PublishedAt } from '@Atoms/PublishedAt'
import * as styles from './Header.css'
import { Author } from './Author'
import type { ArticleData } from '@/lib/interfaces/Article'

type Props = PropsWithChildren<Omit<ArticleData, 'content'>>

export const Header: React.FC<Props> = ({
  author,
  title,
  tagData,
  publishedAt,
  updatedAt,
  children,
}) => (
  <div>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <PublishedAt
          publishedAt={publishedAt}
          updatedAt={updatedAt}
          fontSize={14}
        />
        <TagList tagData={tagData} />
      </div>
      <Author {...author} />
    </div>
    <div className={styles.reactionStampContainer}>{children}</div>
  </div>
)
