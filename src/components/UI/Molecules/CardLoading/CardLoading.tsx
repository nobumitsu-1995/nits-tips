import React from 'react'
import * as styles from './CardLoading.css'
import { Card } from '../../Atoms/Card'
import { TextLoading } from '../../Atoms/TextLoading'

export const CardLoading: React.FC = () => (
  <Card padding="24px 20px">
    <ul className={styles.publishedAt}>
      {Array(2)
        .fill('')
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className={styles.publishedAtItem} key={i}>
            <TextLoading height="11px" />
          </li>
        ))}
    </ul>
    <div className={styles.title}>
      <TextLoading height="200px" />
    </div>
    <div className={styles.text}>
      <TextLoading height="65px" />
    </div>
    <ul className={styles.tagList}>
      {Array(2)
        .fill('')
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className={styles.tagListItem} key={i}>
            <TextLoading height="24px" />
          </li>
        ))}
    </ul>
  </Card>
)
