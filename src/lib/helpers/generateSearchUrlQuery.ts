import {
  SEARCH_TYPE,
  type SearchType,
} from '@/components/Organisms/search/TextSearch'

type FilterSearch = {
  tags: string[]
  category: string
}

type WordSearch = {
  searchType: SearchType
  searchWord: string
}

type Args = FilterSearch | WordSearch

const isWordSearch = (args: Args): args is WordSearch =>
  'searchType' in args &&
  Object.values(SEARCH_TYPE).includes(args.searchType) &&
  'searchWord' in args
const isFilterSearch = (args: Args): args is WordSearch =>
  'category' in args && 'tags' in args

const generateWordSearchUrl = ({ searchWord, searchType }: WordSearch) =>
  `searchWord=${searchWord}&searchType=${SEARCH_TYPE[searchType]}`
const generateFilterSearchUrl = ({ tags, category }: FilterSearch) =>
  tags.length > 0
    ? `category=${category}&tag=${tags.join(',')}`
    : `category=${category}`

export const generateSearchUrlQuery = (args: Args): string => {
  if (isWordSearch(args)) {
    return generateWordSearchUrl(args)
  }
  if (isFilterSearch(args)) {
    return generateFilterSearchUrl(args)
  }

  return ''
}
