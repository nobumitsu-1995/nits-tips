import { useEffect, useState } from 'react'
import {
  isSortType,
  SORT_TYPE,
  type SortType,
} from '@/components/Organisms/search/SearchConditions/UpdatedAtSort'
import { generateFilters } from '@/lib/helpers/generateFilters'

type Order = 'updatedAt' | '-updatedAt'
const ORDER_VALUE: Record<SortType, Order> = {
  asc: 'updatedAt',
  desc: '-updatedAt',
}

type FilterParams = {
  filters: string
  orders: Order
}

type SelectedFilters = {
  tags: string[]
  category: string
}

export type UseFilterSearchPayloadType = {
  initialCategory?: string
  initialTags: string[]
}

export type UseFilterSearchReturnType = {
  filterParams?: FilterParams
  selectedFilters: SelectedFilters
  handleSetCategory: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSetTags: (e: React.ChangeEvent<HTMLInputElement>) => void
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

  const handleSetCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value)
  }

  const handleSetTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: _val } = e.target
    const index = selectedTags.indexOf(_val)

    if (index > -1) {
      const newValue = [...selectedTags]
      newValue.splice(index, 1)
      setTags(newValue)
    } else {
      setTags((prev) => [...prev, _val])
    }
  }

  const handleChangeSortType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    isSortType(value) && setSortType(value)
  }

  return {
    filterParams,
    selectedFilters: {
      tags: selectedTags,
      category: selectedCategory,
    },
    handleSetCategory,
    handleSetTags,
    handleChangeSortType,
  }
}
