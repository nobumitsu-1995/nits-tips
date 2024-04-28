import React from 'react'
import { Presenter } from './Presenter'
import type { MicroCMS } from '@/types/microCMS'
import { convertToArticles } from '@/lib/helpers/convertToArticles'
import { type SearchType } from '@/components/Organisms/search/TextSearch'
import { convertToTagData } from '@/lib/helpers/convertToTagData'
import { convertToCategoryData } from '@/lib/helpers/convertToCategoryData'
import { SearchFormProvider } from '@/lib/Hooks/useSearchForm'

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
  selectedTags,
  selectedCategory,
  searchWord,
  searchType,
}) => (
  <SearchFormProvider
    initialArticles={convertToArticles(blogs)}
    initialTags={selectedTags}
    initialCategory={selectedCategory}
    initialSearchType={searchType}
    initialSearchWord={searchWord}
  >
    <Presenter
      categories={convertToCategoryData(categories)}
      tags={convertToTagData(tags)}
    />
  </SearchFormProvider>
)
