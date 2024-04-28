import React from 'react'
import { Heading } from '@Atoms/Heading'
import { SearchConditions } from '@Organisms/search/SearchConditions'
import { SearchResult } from '@Organisms/search/SearchResult'
import type { TagType } from '@Organisms/search/SearchConditions/TagFilter'
import type { CategoryType } from '@Organisms/search/SearchConditions/CategoryFilter'
import * as styles from './Result.css'

type Props = {
  categories: CategoryType[]
  tags: TagType[]
}

export const Presenter: React.FC<Props> = ({ categories, tags }) => (
  <section className={styles.result}>
    <Heading text="検索結果" />
    <div className={styles.container}>
      <div className={styles.searchConditionsContainer}>
        <SearchConditions categories={categories} tags={tags} />
      </div>
      <SearchResult />
    </div>
  </section>
)
