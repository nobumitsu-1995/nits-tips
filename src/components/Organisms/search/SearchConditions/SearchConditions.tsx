import React, { useId } from 'react'
import * as styles from './SearchConditions.css'
import { Card } from '@/components/UI/Atoms/Card'
import { UpdatedAtSort } from './UpdatedAtSort'
import { type SortType } from './UpdatedAtSort/UpdatedAtSort'
import { CategoryFilter, type CategoryType } from './CategoryFilter'
import { TagFilter, type TagType } from './TagFilter'
import { Border } from '@/components/UI/Atoms/Border'
import {
  type SearchType,
  SearchTypeSelector,
} from '../TextSearch/SearchTypeSelector'
import { SearchForm } from '../SearchForm'
import { Icon, ICON_TYPE } from '@/components/UI/Atoms/Icon'

type Props = {
  sortType: SortType
  categories: CategoryType[]
  tags: TagType[]
  selectedCategory: string
  selectedTags: string[]
  searchWord: string
  searchType: SearchType
  setSortType: React.Dispatch<React.SetStateAction<SortType>>
  setCategory: React.Dispatch<React.SetStateAction<string>>
  setTags: React.Dispatch<React.SetStateAction<string[]>>
  setSearchType: React.Dispatch<React.SetStateAction<SearchType>>
  handleSubmitSearch: (e: React.FormEvent<HTMLFormElement>) => void
  handleChangeSearch: React.ChangeEventHandler<HTMLInputElement>
}

export const SearchConditions: React.FC<Props> = ({
  sortType,
  categories,
  tags,
  selectedCategory,
  selectedTags,
  searchWord,
  searchType,
  setSortType,
  setCategory,
  setTags,
  setSearchType,
  handleSubmitSearch,
  handleChangeSearch,
}) => {
  const a11yId = useId()
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
      <div className={styles.container}>
        <p id={a11yId} className={styles.label}>
          <Icon type={ICON_TYPE.search} size={24} />
          ワード検索
        </p>
        <SearchTypeSelector
          searchType={searchType}
          setSearchType={setSearchType}
        />
      </div>
      <SearchForm
        id={a11yId}
        searchWord={searchWord}
        onSubmit={handleSubmitSearch}
        handleChangeSearch={handleChangeSearch}
        searchType={searchType}
        isSlimType
      />
      <Border margin="20px 0" />
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
      </div>
      <TagFilter
        selectedTags={selectedTags}
        tags={tags}
        onClick={handleClickTagButton}
        onChange={handleChange}
      />
    </Card>
  )
}
