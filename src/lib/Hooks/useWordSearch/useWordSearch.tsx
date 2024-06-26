import { useCallback, useEffect, useState } from 'react'
import {
  SEARCH_TYPE,
  type SearchType,
} from '@/components/Organisms/search/TextSearch'
import { replaceSpacesWithComma } from '@/lib/helpers/replaceSpacesWithComma'
import { generateFilters } from '@/lib/helpers/generateFilters'
import { isSearchType } from '@/components/Organisms/search/TextSearch/SearchTypeSelector'

type WordParams = {
  filters: string
  q: string
}

export type UseWordSearchPayloadType = {
  initialSearchWord?: string
  initialSearchType?: SearchType
}

export type UseWordSearchReturnType = {
  wordParams?: WordParams
  searchWord: string
  searchType: SearchType
  handleSetSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSetSearchType: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const useWordSearch = ({
  initialSearchWord = '',
  initialSearchType = SEARCH_TYPE.all,
}: UseWordSearchPayloadType): UseWordSearchReturnType => {
  const [searchWord, setSearchWord] = useState<string>(initialSearchWord)
  const [searchType, setSearchType] = useState<SearchType>(initialSearchType)
  const [wordParams, setWordParams] = useState<WordParams>()

  useEffect(() => {
    const filters = generateFilters({
      category: '',
      tag: '',
      searchWord: searchType === SEARCH_TYPE.title ? searchWord : '',
    })
    const q =
      searchType === SEARCH_TYPE.all
        ? encodeURI(replaceSpacesWithComma(searchWord ?? ''))
        : ''

    setWordParams({
      filters,
      q,
    })
  }, [searchType, searchWord])

  const handleSetSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchWord(e.target.value)
    },
    [setSearchWord],
  )

  const handleSetSearchType = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      isSearchType(value) && setSearchType(value)
    },
    [setSearchType],
  )

  return {
    wordParams,
    searchWord,
    searchType,
    handleSetSearch,
    handleSetSearchType,
  }
}
