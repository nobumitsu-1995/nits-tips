import React, { type ComponentProps } from 'react'
import { Heading } from '@Atoms/Heading'
import type { ArticleCard } from '@Molecules/ArticleCard'
import type { SortType } from '@Organisms/search/SearchConditions/UpdatedAtSort/UpdatedAtSort'
import { SearchConditions } from '@Organisms/search/SearchConditions'
import { SearchResult } from '@Organisms/search/SearchResult'
import * as styles from './Result.css'
import type { MicroCMS } from '@/types/microCMS'
import type { TagType } from '@/components/Organisms/search/SearchConditions/TagFilter/TagFilter'

type Props = {
  /** 記事一覧 */
  articles: ComponentProps<typeof ArticleCard>[]
  sortType: SortType
  categories: MicroCMS['category'][]
  tags: TagType[]
  selectedCategory: string
  selectedTags: string[]
  setSortType: React.Dispatch<React.SetStateAction<SortType>>
  setCategory: React.Dispatch<React.SetStateAction<string>>
  setTags: React.Dispatch<React.SetStateAction<string[]>>
  isLoading: boolean
}

export const Presenter: React.FC<Props> = ({
  articles,
  sortType,
  categories,
  tags,
  selectedCategory,
  selectedTags,
  setSortType,
  setCategory,
  setTags,
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
          setSortType={setSortType}
          setCategory={setCategory}
          setTags={setTags}
        />
      </div>
      <SearchResult isLoading={isLoading} articles={articles} />
    </div>
  </section>
)
