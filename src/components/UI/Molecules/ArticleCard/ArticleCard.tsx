import React from 'react'
import { Card } from '@Atoms/Card'
import * as styles from './ArticleCard.css'
import { TagList } from '../TagList'
import { PublishedAt } from '../../Atoms/PublishedAt'
import type { TagData } from '@/lib/interfaces/Tag'

type Props = {
  /** 記事ID */
  id: string
  /** 記事タイトル */
  title: string
  /** 記事概要 */
  description: string
  /** タグデータ */
  tagData: TagData[]
  /** 公開日 */
  publishedAt: string
  /** 最終更新日 */
  updatedAt?: string
}

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
