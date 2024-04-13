import React, { useEffect, useState } from 'react'
import { Presenter } from './Presenter'
import type { MicroCMS } from '@/types/microCMS'
import { convertToArticles } from '@/lib/helpers/convertToArticles'
import {
  SORT_TYPE,
  type SortType,
} from '@/components/Organisms/search/SearchConditions/UpdatedAtSort/UpdatedAtSort'
import { generateFilters } from '@/lib/helpers/generateFilters'
import { getBlogsData } from '@/lib/API/microCMS/getBlogs'

type Props = {
  blogs: MicroCMS['blog'][]
  categories: MicroCMS['category'][]
  tags: MicroCMS['tag'][]
  selectedCategory: string
  selectedTags: string[]
}

export const Container: React.FC<Props> = ({
  blogs,
  categories,
  tags,
  selectedTags: _selectedTags,
  selectedCategory: _selectedCategory = '',
}) => {
  const [sortType, setSortType] = useState<SortType>(SORT_TYPE.desc)
  const [selectedCategory, setCategory] = useState<string>(_selectedCategory)
  const [selectedTags, setTags] = useState<string[]>(_selectedTags)
  const [articles, setArticles] = useState(convertToArticles(blogs))
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const filters = generateFilters({
      category: selectedCategory,
      tag: selectedTags.join(','),
      searchWord: '',
    })
    getBlogsData({
      filters,
      limit: 100,
      orders: sortType === SORT_TYPE.asc ? 'updatedAt' : '-updatedAt',
    })
      .then((res) => setArticles(convertToArticles(res ?? [])))
      .finally(() => setIsLoading(false))
  }, [sortType, selectedCategory, selectedTags])

  return (
    <Presenter
      articles={articles}
      categories={categories}
      tags={tags.map((tag) => ({
        id: tag.id,
        label: tag.label,
        src: tag.icon?.url,
      }))}
      sortType={sortType}
      selectedCategory={selectedCategory}
      selectedTags={selectedTags}
      setSortType={setSortType}
      setCategory={setCategory}
      setTags={setTags}
      isLoading={isLoading}
    />
  )
}
