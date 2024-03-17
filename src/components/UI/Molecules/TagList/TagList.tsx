import React, { type ComponentProps } from 'react'
import * as styles from './TagList.css'
import { Tag } from '../Tag'

type Props = {
  /** タグデータの配列 */
  tagData: ComponentProps<typeof Tag>[]
}

export const TagList: React.FC<Props> = ({ tagData }) => (
  <ul className={styles.tagList}>
    {tagData.map((tag) => (
      <li key={tag.label}>
        <Tag src={tag.src} label={tag.label} href={tag.href} />
      </li>
    ))}
  </ul>
)
