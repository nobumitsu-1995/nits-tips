import React from 'react'
import * as styles from './SearchConditions.css'
import { Card } from '@/components/UI/Atoms/Card'
import { UpdatedAtSort } from './UpdatedAtSort'
import { type SortType } from './UpdatedAtSort/UpdatedAtSort'
import type { MicroCMS } from '@/types/microCMS'
import { CategoryFilter } from './CategoryFilter'
import { TagFilter } from './TagFilter'
import type { TagType } from './TagFilter/TagFilter'

type Props = {
  sortType: SortType
  categories: MicroCMS['category'][]
  tags: TagType[]
  selectedCategory: string
  selectedTags: string[]
  setSortType: React.Dispatch<React.SetStateAction<SortType>>
  setCategory: React.Dispatch<React.SetStateAction<string>>
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}

export const SearchConditions: React.FC<Props> = ({
  sortType,
  categories,
  tags,
  selectedCategory,
  selectedTags,
  setSortType,
  setCategory,
  setTags,
}) => {
  const handleChangeSortType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value as SortType)
  }
  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }
  const handleClickTagButton = (id: string) => {
    const index = selectedTags.indexOf(id)
    const newValue = [...selectedTags]
    newValue.splice(index, 1)
    setTags(newValue)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: _val } = e.target
    const index = selectedTags.indexOf(_val)

    if (index > -1) {
      const newValue = [...selectedTags]
      newValue.splice(index, 1)
      setTags(newValue)
    } else {
      setTags((prev) => [...prev, _val])
    }
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
            selected={selectedCategory}
            handleChange={handleChangeCategory}
            categories={categories}
          />
        </div>
        <TagFilter
          selectedTags={selectedTags}
          tags={tags}
          onClick={handleClickTagButton}
          onChange={handleChange}
        />
      </div>
    </Card>
  )
}
