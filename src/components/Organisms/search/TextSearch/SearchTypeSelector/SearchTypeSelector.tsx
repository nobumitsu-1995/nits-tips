import React from 'react'
import { Radio } from '@Atoms/Radio'
import * as styles from './SearchTypeSelector.css'
import { type SearchType, SEARCH_TYPE } from './model'

type Props = {
  /** 名前 */
  searchType: SearchType
  setSearchType: (e: React.ChangeEvent<HTMLInputElement>) => void
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
      onChange={setSearchType}
    />
    <Radio
      name="type"
      value={SEARCH_TYPE.title}
      label="タイトル検索"
      isChecked={searchType === SEARCH_TYPE.title}
      onChange={setSearchType}
    />
  </div>
)
