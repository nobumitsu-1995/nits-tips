import React, { useState } from 'react'
import { SearchForm } from '@Organisms/search/SearchForm'

export const SearchCardForm = () => {
  const [searchWord, setSearchWord] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }
  const handleSubmit = () => {
    setIsLoading(true)
  }
  return (
    <SearchForm
      searchWord={searchWord}
      handleChangeSearch={handleChangeSearch}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    />
  )
}
