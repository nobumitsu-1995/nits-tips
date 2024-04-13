import React from 'react'
import * as styles from './TagFilter.css'
import { TagTitle } from './TagTitle'
import { CurrentTags } from './CurrentTags'

export type TagType = {
  id: string
  label: string
  src?: string
}

type Props = {
  selectedTags: TagType[]
  tags: TagType[]
  onClick: (id: string) => void
}

export const TagFilter: React.FC<Props> = ({ selectedTags, tags, onClick }) => (
  <div className={styles.tagFilter}>
    <TagTitle tags={tags} />
    <CurrentTags selectedTags={selectedTags} onClick={onClick} />
  </div>
)
