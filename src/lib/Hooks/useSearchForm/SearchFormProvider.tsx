import React from 'react'
import { createContext, useContext, type PropsWithChildren } from 'react'
import {
  useSearchForm,
  type UseSearchFormPayloadType,
  type UseSearchFormReturnType,
} from './useSearchForm'

type Common = 'articles' | 'isLoading'
type SearchFormAction = Omit<UseSearchFormReturnType, Common> | null
type SearchFormState = Pick<UseSearchFormReturnType, Common> | null

const SearchFormActionContext = createContext<SearchFormAction>(null)
const SearchFormStateContext = createContext<SearchFormState>(null)
const ActionProvider = SearchFormActionContext.Provider
const StateProvider = SearchFormStateContext.Provider

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
    handleSetCategory,
    handleSetTags,
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
        }}
      >
        {children}
      </StateProvider>
    </ActionProvider>
  )
}

export const useSearchFormAction = useContext(SearchFormActionContext)
export const useSearchFormState = useContext(SearchFormStateContext)
