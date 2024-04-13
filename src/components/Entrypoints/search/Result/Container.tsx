import React, { useEffect, useRef, useState } from 'react'
import { Presenter } from './Presenter'
import type { MicroCMS } from '@/types/microCMS'
import { convertToArticles } from '@/lib/helpers/convertToArticles'
import {
  SORT_TYPE,
  type SortType,
} from '@/components/Organisms/search/SearchConditions/UpdatedAtSort/UpdatedAtSort'
import { generateFilters } from '@/lib/helpers/generateFilters'
import { getBlogsData } from '@/lib/API/microCMS/getBlogs'
import {
  SEARCH_TYPE,
  type SearchType,
} from '@/components/Organisms/search/TextSearch'
import { replaceSpacesWithComma } from '@/lib/helpers/replaceSpacesWithComma'

type Props = {
  blogs: MicroCMS['blog'][]
  categories: MicroCMS['category'][]
  tags: MicroCMS['tag'][]
  selectedCategory: string
  selectedTags: string[]
  searchWord: string
  searchType: SearchType
}

export const Container: React.FC<Props> = ({
  blogs,
  categories,
  tags,
  selectedTags: _selectedTags,
  selectedCategory: _selectedCategory = '',
  searchWord: _searchWord = '',
  searchType: _searchType = SEARCH_TYPE.all,
}) => {
  const isFirstRender = useRef(true)
  const [sortType, setSortType] = useState<SortType>(SORT_TYPE.desc)
  const [selectedCategory, setCategory] = useState<string>(_selectedCategory)
  const [selectedTags, setTags] = useState<string[]>(_selectedTags)
  const [searchWord, setSearchWord] = useState<string>(_searchWord)
  const [searchType, setSearchType] = useState<SearchType>(_searchType)
  const [articles, setArticles] = useState(convertToArticles(blogs))
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    setIsLoading(true)
    const filters = generateFilters({
      category: selectedCategory,
      tag: selectedTags.join(','),
      searchWord: searchType === SEARCH_TYPE.title ? searchWord : '',
    })
    const q =
      searchType === SEARCH_TYPE.all
        ? encodeURI(replaceSpacesWithComma(searchWord ?? ''))
        : ''
    getBlogsData({
      filters,
      limit: 100,
      orders: sortType === SORT_TYPE.asc ? 'updatedAt' : '-updatedAt',
      q,
    })
      .then((res) => setArticles(convertToArticles(res ?? [])))
      .finally(() => setIsLoading(false))
  }, [sortType, selectedCategory, selectedTags])

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const filters = generateFilters({
      category: selectedCategory,
      tag: selectedTags.join(','),
      searchWord: searchType === SEARCH_TYPE.title ? searchWord : '',
    })
    const q =
      searchType === SEARCH_TYPE.all
        ? encodeURI(replaceSpacesWithComma(searchWord ?? ''))
        : ''

    getBlogsData({
      filters,
      limit: 100,
      orders: sortType === SORT_TYPE.asc ? 'updatedAt' : '-updatedAt',
      q,
    })
      .then((res) => setArticles(convertToArticles(res ?? [])))
      .finally(() => setIsLoading(false))
  }

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }

  return (
    <Presenter
      articles={articles}
      categories={categories.map((category) => ({
        id: category.id,
        label: category.label,
      }))}
      tags={tags.map((tag) => ({
        id: tag.id,
        label: tag.label,
        src: tag.icon?.url,
      }))}
      sortType={sortType}
      selectedCategory={selectedCategory}
      selectedTags={selectedTags}
      searchWord={searchWord}
      searchType={searchType}
      setSortType={setSortType}
      setCategory={setCategory}
      setTags={setTags}
      setSearchType={setSearchType}
      handleSubmitSearch={handleSubmitSearch}
      handleChangeSearch={handleChangeSearch}
      isLoading={isLoading}
    />
  )
}
