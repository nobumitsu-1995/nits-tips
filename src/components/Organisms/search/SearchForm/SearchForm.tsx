import React, { useState } from 'react'
import { Icon } from '@Atoms/Icon'
import * as styles from './SearchForm.css'
import { SEARCH_TYPE, type SearchType } from '../TextSearch'

type Props = {
  /** a11yのid指定用 */
  id?: string
  /** 検索方法（全文検索 or タイトル検索） */
  searchType?: SearchType
}

export const SearchForm: React.FC<Props> = ({
  id,
  searchType = SEARCH_TYPE.all,
}) => {
  const [searchWord, setSearchWord] = useState('')

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }

  return (
    <form
      aria-labelledby={id}
      className={styles.form}
      action="/search/result/"
      method="get"
    >
      <input
        type="search"
        placeholder="検索"
        aria-labelledby={id}
        name="searchWord"
        value={searchWord}
        onChange={handleChangeSearch}
        required
        className={styles.input}
      />
      <input type="text" name="searchType" value={searchType} hidden />
      <button type="submit" aria-label="検索" className={styles.button}>
        <Icon type="search" size={24} />
      </button>
    </form>
  )
}
