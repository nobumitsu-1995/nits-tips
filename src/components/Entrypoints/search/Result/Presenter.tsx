import React, { type ComponentProps } from 'react'
import { Heading } from '@Atoms/Heading'
import type { ArticleCard } from '@Molecules/ArticleCard'
import type { SortType } from '@Organisms/search/SearchConditions/UpdatedAtSort/UpdatedAtSort'
import { SearchConditions } from '@Organisms/search/SearchConditions'
import { SearchResult } from '@Organisms/search/SearchResult'
import type { TagType } from '@Organisms/search/SearchConditions/TagFilter'
import type { CategoryType } from '@Organisms/search/SearchConditions/CategoryFilter'
import type { SearchType } from '@Organisms/search/TextSearch'
import * as styles from './Result.css'

type Props = {
  /** 記事一覧 */
  articles: ComponentProps<typeof ArticleCard>[]
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
  isLoading: boolean
}

export const Presenter: React.FC<Props> = ({
  articles,
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
  isLoading,
}) => (
  <section className={styles.result}>
    <Heading text="検索結果" />
    <div className={styles.container}>
      <div className={styles.searchConditionsContainer}>
        <SearchConditions
          sortType={sortType}
          categories={categories}
          tags={tags}
          selectedCategory={selectedCategory}
          selectedTags={selectedTags}
          searchWord={searchWord}
          searchType={searchType}
          setSortType={setSortType}
          setCategory={setCategory}
          setTags={setTags}
          setSearchType={setSearchType}
          handleSubmitSearch={handleSubmitSearch}
          handleChangeSearch={handleChangeSearch}
        />
      </div>
      <SearchResult isLoading={isLoading} articles={articles} />
    </div>
  </section>
)
