import React from 'react'
import { Card } from '@Atoms/Card'
import * as styles from './ArticleCard.css'
import { TagList } from '../TagList'
import { PublishedAt } from '../../Atoms/PublishedAt'
import type { ArticleCardData } from '@/lib/interfaces/Article'

type Props = ArticleCardData

export const ArticleCard: React.FC<Props> = ({
  id,
  title,
  description,
  tagData,
  publishedAt,
  updatedAt,
  thumbnail,
}) => (
  <Card padding="24px 0px">
    <div className={styles.container}>
      <PublishedAt publishedAt={publishedAt} updatedAt={updatedAt} />
    </div>
    <h3>
      <a href={`/detail/${id}/`}>
        <img className={styles.img} src={thumbnail} alt={title} />
      </a>
    </h3>
    <div className={styles.container}>
      <p className={styles.text}>{description}</p>
      <TagList tagData={tagData} />
    </div>
  </Card>
)
