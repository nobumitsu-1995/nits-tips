import React from 'react'
import * as styles from './PublishedAt.css'

type Props = {
  /** 公開日 */
  publishedAt: string
  /** 最終更新日 */
  updatedAt?: string
  /** fontのサイズ */
  fontSize?: number
}

export const PublishedAt: React.FC<Props> = ({
  publishedAt,
  updatedAt,
  fontSize = 11,
}) => (
  <p className={styles.publishedAt} style={{ fontSize }}>
    {updatedAt && <span>最終更新日: {updatedAt}</span>}
    <span>記事投稿日: {publishedAt}</span>
  </p>
)
