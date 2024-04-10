import React, { useId, useState } from 'react'
import { Heading } from '@Atoms/Heading'
import * as styles from './TextSearch.css'
import { SearchForm } from '../SearchForm'
import {
  SearchTypeSelector,
  SEARCH_TYPE,
  type SearchType,
} from './SearchTypeSelector'

export const TextSearch: React.FC = () => {
  const [searchType, setSearchType] = useState<SearchType>(SEARCH_TYPE.all)
  const a11yId = useId()
  return (
    <section>
      <Heading id={a11yId} text="ワード検索" />
      <div className={styles.formContainer}>
        <SearchTypeSelector
          searchType={searchType}
          setSearchType={setSearchType}
        />
        <SearchForm id={a11yId} searchType={searchType} />
      </div>
    </section>
  )
}
