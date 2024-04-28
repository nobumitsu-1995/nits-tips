import React from 'react'
import { Card } from '@Atoms/Card'
import { Border } from '@Atoms/Border'
import * as styles from './SearchConditions.css'
import { UpdatedAtSort } from './UpdatedAtSort'
import { CategoryFilter, type CategoryType } from './CategoryFilter'
import { TagFilter, type TagType } from './TagFilter'
import { WordFilter } from './WordFilter'
import {
  useSearchFormAction,
  useSearchFormState,
} from '@/lib/Hooks/useSearchForm'

type Props = {
  categories: CategoryType[]
  tags: TagType[]
}

export const SearchConditions: React.FC<Props> = ({ categories, tags }) => {
  const {
    handleSetCategory,
    handleSetTags,
    handleDeleteTag,
    handleChangeSortType,
    handleSetSearch,
    handleSetSearchType,
    handleSubmitSearch,
  } = useSearchFormAction()
  const { selectedFilters, selectedWord } = useSearchFormState()

  return (
    <Card padding="12px 32px">
      <div className={styles.container}>
        <WordFilter
          searchWord={selectedWord.searchWord}
          searchType={selectedWord.searchType}
          setSearchType={handleSetSearchType}
          handleSubmitSearch={handleSubmitSearch}
          handleChangeSearch={handleSetSearch}
        />
        <Border margin="20px 0" />
        <div className={styles.searchConditions}>
          <div className={styles.itemContainer}>
            <UpdatedAtSort
              selected={selectedFilters.sortType}
              handleChange={handleChangeSortType}
            />
          </div>
          <div className={styles.itemContainer}>
            <CategoryFilter
              selected={selectedFilters.category}
              handleChange={handleSetCategory}
              categories={categories}
            />
          </div>
        </div>
        <TagFilter
          selectedTags={selectedFilters.tags}
          tags={tags}
          onClick={handleDeleteTag}
          onChange={handleSetTags}
        />
      </div>
    </Card>
  )
}
