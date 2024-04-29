import { useCallback, useEffect, useState } from 'react'
import {
  isSortType,
  SORT_TYPE,
  type SortType,
} from '@/components/Organisms/search/SearchConditions/UpdatedAtSort'
import { generateFilters } from '@/lib/helpers/generateFilters'

type Order = 'updatedAt' | '-updatedAt'
export const ORDER_VALUE: Record<SortType, Order> = {
  asc: 'updatedAt',
  desc: '-updatedAt',
}

type FilterParams = {
  filters: string
  orders: Order
}

export type UseFilterSearchPayloadType = {
  initialCategory?: string
  initialTags: string[]
}

export type UseFilterSearchReturnType = {
  filterParams?: FilterParams
  tags: string[]
  category: string
  sortType: SortType
  handleSetCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void
  handleSetTags: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleDeleteTag: (id: string) => void
  handleChangeSortType: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const useFilterSearch = ({
  initialCategory = '',
  initialTags,
}: UseFilterSearchPayloadType): UseFilterSearchReturnType => {
  const [selectedCategory, setCategory] = useState<string>(initialCategory)
  const [selectedTags, setTags] = useState<string[]>(initialTags)
  const [sortType, setSortType] = useState<SortType>(SORT_TYPE.desc)
  const [filterParams, setFilterParams] = useState<FilterParams>()

  useEffect(() => {
    const filters = generateFilters({
      category: selectedCategory,
      tag: selectedTags.join(','),
      searchWord: '',
    })
    const orders =
      sortType === SORT_TYPE.asc ? ORDER_VALUE.asc : ORDER_VALUE.desc

    setFilterParams({
      filters,
      orders,
    })
  }, [selectedCategory, selectedTags, sortType, generateFilters])

  const handleSetCategory = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setCategory(event.target.value)
    },
    [setCategory],
  )

  const handleSetTags = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value: _val } = e.target
      const index = selectedTags.indexOf(_val)

      if (index > -1) {
        const newValue = [...selectedTags]
        newValue.splice(index, 1)
        setTags(newValue)
      } else {
        setTags((prev) => [...prev, _val])
      }
    },
    [selectedTags, setTags],
  )

  const handleDeleteTag = useCallback(
    (id: string) => {
      const index = selectedTags.indexOf(id)
      const newValue = [...selectedTags]
      newValue.splice(index, 1)
      setTags(newValue)
    },
    [selectedTags, setTags],
  )

  const handleChangeSortType = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target
      isSortType(value) && setSortType(value)
    },
    [isSortType, setSortType],
  )

  return {
    filterParams,
    tags: selectedTags,
    category: selectedCategory,
    sortType,
    handleSetCategory,
    handleSetTags,
    handleDeleteTag,
    handleChangeSortType,
  }
}
