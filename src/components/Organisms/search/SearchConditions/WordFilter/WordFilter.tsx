import React, { useId } from 'react'
import { Icon, ICON_TYPE } from '@Atoms/Icon'
import * as styles from './WordFilter.css'
import { SearchForm } from '../../SearchForm'
import {
  SearchTypeSelector,
  type SearchType,
} from '../../TextSearch/SearchTypeSelector'

type Props = {
  searchWord: string
  searchType: SearchType
  isLoading: boolean
  setSearchType: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmitSearch: (e: React.FormEvent<HTMLFormElement>) => void
  handleChangeSearch: React.ChangeEventHandler<HTMLInputElement>
}

export const WordFilter: React.FC<Props> = ({
  searchWord,
  searchType,
  isLoading,
  setSearchType,
  handleSubmitSearch,
  handleChangeSearch,
}) => {
  const a11yId = useId()

  return (
    <div>
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
        isLoading={isLoading}
      />
    </div>
  )
}
