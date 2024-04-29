import React, { type PropsWithChildren } from 'react'
import {
  useSearchForm,
  type UseSearchFormPayloadType,
  type UseSearchFormReturnType,
} from './useSearchForm'
import { createCustomComtext } from '@/lib/helpers/createCustomContext'

type Common =
  | 'articles'
  | 'isLoading'
  | 'searchWord'
  | 'searchType'
  | 'tags'
  | 'category'
  | 'sortType'
type SearchFormAction = Omit<UseSearchFormReturnType, Common>
type SearchFormState = Pick<UseSearchFormReturnType, Common>

const [ActionProvider, useActionContext] =
  createCustomComtext<SearchFormAction>({
    handleSetCategory: () => {},
    handleSetTags: () => {},
    handleDeleteTag: () => {},
    handleChangeSortType: () => {},
    handleSetSearch: () => {},
    handleSetSearchType: () => {},
    handleSubmitSearch: () => {},
  })
const [StateProvider, useStateContext] = createCustomComtext<SearchFormState>({
  tags: [],
  category: '',
  sortType: 'desc',
  searchWord: '',
  searchType: 'all',
  articles: [],
  isLoading: false,
})

export const SearchFormProvider = ({
  initialArticles,
  initialTags,
  initialCategory,
  initialSearchType,
  initialSearchWord,
  children,
}: PropsWithChildren<UseSearchFormPayloadType>) => {
  const {
    articles,
    isLoading,
    tags,
    category,
    sortType,
    searchWord,
    searchType,
    handleSetCategory,
    handleSetTags,
    handleDeleteTag,
    handleChangeSortType,
    handleSetSearch,
    handleSetSearchType,
    handleSubmitSearch,
  } = useSearchForm({
    initialArticles,
    initialTags,
    initialCategory,
    initialSearchType,
    initialSearchWord,
  })

  return (
    <ActionProvider
      value={{
        handleSetCategory,
        handleSetTags,
        handleDeleteTag,
        handleChangeSortType,
        handleSetSearch,
        handleSetSearchType,
        handleSubmitSearch,
      }}
    >
      <StateProvider
        value={{
          articles,
          isLoading,
          tags,
          category,
          sortType,
          searchWord,
          searchType,
        }}
      >
        {children}
      </StateProvider>
    </ActionProvider>
  )
}

export const useSearchFormAction = () => useActionContext()
export const useSearchFormState = () => useStateContext()
