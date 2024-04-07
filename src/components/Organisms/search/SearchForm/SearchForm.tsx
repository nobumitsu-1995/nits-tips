import React, { useState } from 'react'
import { Icon } from '@Atoms/Icon'
import * as styles from './SearchForm.css'

type Props = {
  /** a11yのid指定用 */
  id?: string
}

export const SearchForm: React.FC<Props> = ({ id }) => {
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
      <button type="submit" aria-label="検索" className={styles.button}>
        <Icon type="search" size={24} />
      </button>
    </form>
  )
}
