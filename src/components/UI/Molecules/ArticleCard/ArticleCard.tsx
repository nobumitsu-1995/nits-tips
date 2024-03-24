import React, { type ComponentProps } from 'react'
import { Card } from '@Atoms/Card'
import * as styles from './ArticleCard.css'
import { TagList } from '../TagList'
import { PublishedAt } from '../../Atoms/PublishedAt'

type Props = {
  /** 記事ID */
  id: string
  /** 記事タイトル */
  title: string
  /** 記事概要 */
  description: string
  /** タグデータ */
  tagData: ComponentProps<typeof TagList>['tagData']
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
