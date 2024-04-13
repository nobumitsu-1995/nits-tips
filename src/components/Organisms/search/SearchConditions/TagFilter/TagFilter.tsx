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
  selectedTags: string[]
  tags: TagType[]
  onClick: (id: string) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TagFilter: React.FC<Props> = ({
  selectedTags,
  tags,
  onClick,
  onChange,
}) => (
  <div className={styles.tagFilter}>
    <TagTitle tags={tags} selectedTags={selectedTags} onChange={onChange} />
    <CurrentTags selectedTags={selectedTags} tags={tags} onClick={onClick} />
  </div>
)
