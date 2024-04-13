import React from 'react'
import { Radio } from '@Atoms/Radio'
import * as styles from './SearchTypeSelector.css'

export type SearchType = 'all' | 'title'
export const SEARCH_TYPE: MappedConst<SearchType> = {
  all: 'all',
  title: 'title',
}

type Props = {
  /** 名前 */
  searchType: SearchType
  setSearchType: React.Dispatch<React.SetStateAction<SearchType>>
}

export const SearchTypeSelector: React.FC<Props> = ({
  searchType,
  setSearchType,
}) => (
  <div className={styles.searchTypeSelector}>
    <Radio
      name="type"
      value={SEARCH_TYPE.all}
      label="全文検索"
      isChecked={searchType === SEARCH_TYPE.all}
      onChange={() => {
        setSearchType(SEARCH_TYPE.all)
      }}
    />
    <Radio
      name="type"
      value={SEARCH_TYPE.title}
      label="タイトル検索"
      isChecked={searchType === SEARCH_TYPE.title}
      onChange={() => {
        setSearchType(SEARCH_TYPE.title)
      }}
    />
  </div>
)
