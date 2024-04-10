import React, { useState } from 'react'
import * as styles from './SearchConditions.css'
import { Card } from '@/components/UI/Atoms/Card'
import { UpdatedAtSort } from './UpdatedAtSort'
import { SORT_TYPE, type SortType } from './UpdatedAtSort/UpdatedAtSort'
import type { MicroCMS } from '@/types/microCMS'
import { CategoryFilter } from './CategoryFilter'
import { TagFilter } from './TagFilter'

type Props = {
  categories: MicroCMS['category'][]
  selectedTags: MicroCMS['tag'][]
}

export const SearchConditions: React.FC<Props> = ({
  categories,
  selectedTags,
}) => {
  const [sortType, setSortType] = useState<SortType>(SORT_TYPE.desc)
  const [category, setCategory] = useState(categories[0].id)
  const [tags, setTags] = useState(selectedTags)

  const handleChangeSortType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value as SortType)
  }
  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }
  const handleClickTagButton = (id: string) => {
    const updatedTags = tags.filter((tag) => tag.id !== id)
    setTags(updatedTags)
  }

  return (
    <Card padding="12px 32px">
      <div className={styles.searchConditions}>
        <div className={styles.itemContainer}>
          <UpdatedAtSort
            selected={sortType}
            handleChange={handleChangeSortType}
          />
        </div>
        <div className={styles.itemContainer}>
          <CategoryFilter
            selected={category}
            handleChange={handleChangeCategory}
            categories={categories}
          />
        </div>
        <TagFilter tags={tags} onClick={handleClickTagButton} />
      </div>
    </Card>
  )
}
