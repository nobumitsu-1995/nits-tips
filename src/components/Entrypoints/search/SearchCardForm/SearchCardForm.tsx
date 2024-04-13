import React, { useState } from 'react'
import { SearchForm } from '@Organisms/search/SearchForm'

export const SearchCardForm = () => {
  const [searchWord, setSearchWord] = useState('')
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }
  return (
    <SearchForm
      searchWord={searchWord}
      handleChangeSearch={handleChangeSearch}
    />
  )
}
