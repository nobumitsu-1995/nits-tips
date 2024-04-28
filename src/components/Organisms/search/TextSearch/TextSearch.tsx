import React, { useEffect, useId, useState } from 'react'
import { Heading } from '@Atoms/Heading'
import * as styles from './TextSearch.css'
import { SearchForm } from '../SearchForm'
import {
  SearchTypeSelector,
  SEARCH_TYPE,
  type SearchType,
} from './SearchTypeSelector'
import { useSearchParams } from '@/lib/Hooks/useSearchParams'

type Storage = {
  searchWord?: string
  searchType?: SearchType
}

export const TextSearch: React.FC = () => {
  const { searchParams, setSearchParamsToStorage } = useSearchParams<Storage>()
  const [searchType, setSearchType] = useState<SearchType>(SEARCH_TYPE.all)
  const [searchWord, setSearchWord] = useState('')
  const a11yId = useId()

  useEffect(() => {
    if (!searchParams) return
    searchParams.searchWord && setSearchWord(searchParams.searchWord)
    searchParams.searchType && setSearchType(searchParams.searchType)
  }, [searchParams])

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }
  const handleSubmitForm = () => {
    setSearchParamsToStorage({ searchType, searchWord })
  }

  return (
    <section>
      <Heading id={a11yId} text="ワード検索" />
      <div className={styles.formContainer}>
        <SearchTypeSelector
          searchType={searchType}
          setSearchType={setSearchType}
        />
        <SearchForm
          id={a11yId}
          searchType={searchType}
          searchWord={searchWord}
          handleChangeSearch={handleChangeSearch}
          onSubmit={handleSubmitForm}
        />
      </div>
    </section>
  )
}
