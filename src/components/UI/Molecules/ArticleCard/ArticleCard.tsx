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
}) => (
  <Card padding="24px 20px">
    <PublishedAt publishedAt={publishedAt} updatedAt={updatedAt} />
    <h3>
      <a href={`/detail/${id}/`} className={styles.title}>
        {title}
      </a>
    </h3>
    <p className={styles.text}>{description}</p>
    <TagList tagData={tagData} />
  </Card>
)
