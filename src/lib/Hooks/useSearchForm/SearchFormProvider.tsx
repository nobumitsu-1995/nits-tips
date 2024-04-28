import React, { type PropsWithChildren } from 'react'
import {
  useSearchForm,
  type UseSearchFormPayloadType,
  type UseSearchFormReturnType,
} from './useSearchForm'
import { createCustomComtext } from '@/lib/helpers/createCustomContext'

type Common = 'articles' | 'isLoading' | 'selectedFilters' | 'selectedWord'
type SearchFormAction = Omit<UseSearchFormReturnType, Common>
type SearchFormState = Pick<UseSearchFormReturnType, Common>

const [ActionProvider, useActionContext] =
  createCustomComtext<SearchFormAction>()
const [StateProvider, useStateContext] = createCustomComtext<SearchFormState>()

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
    selectedFilters,
    selectedWord,
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
          selectedFilters,
          selectedWord,
        }}
      >
        {children}
      </StateProvider>
    </ActionProvider>
  )
}

export const useSearchFormAction = useActionContext
export const useSearchFormState = useStateContext
