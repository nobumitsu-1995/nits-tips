import React, { type ComponentProps } from 'react'
import { TagList } from '@Molecules/TagList'
import { PublishedAt } from '@Atoms/PublishedAt'
import * as styles from './Header.css'
import { Author } from './Header/Author'

type Props = {
  /** 著者 */
  author: {
    name: string
    src: string
    href: string
  }
  /** 名前 */
  title: string
  /** タグデータ */
  tagData: ComponentProps<typeof TagList>['tagData']
  /** 公開日 */
  publishedAt: string
  /** 最終更新日 */
  updatedAt?: string
}

export const Header: React.FC<Props> = ({
  author,
  title,
  tagData,
  publishedAt,
  updatedAt,
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
  </div>
)
