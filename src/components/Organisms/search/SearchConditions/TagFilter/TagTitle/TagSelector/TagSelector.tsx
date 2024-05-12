import React from 'react'
import { Select } from '@Atoms/Select'
import * as styles from './TagSelector.css'
import type { TagType } from '../..'

type Props = {
  selectedTags: string[]
  tags: TagType[]
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TagSelector: React.FC<Props> = ({
  selectedTags,
  tags,
  handleChange,
}) => (
  <div className={styles.tagSelector}>
    {tags.map((tag) => (
      <Select
        key={tag.id}
        name="tag"
        value={tag.id}
        label={tag.label}
        isChecked={selectedTags.includes(tag.id)}
        onChange={handleChange}
      />
    ))}
  </div>
)
