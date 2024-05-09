import type { SearchType } from '@/components/Organisms/search/TextSearch'
import { generateSearchUrlQuery } from '@/lib/helpers/generateSearchUrlQuery'

type FilterSearch = {
  tags: string[]
  category: string
}

type WordSearch = {
  searchType: SearchType
  searchWord: string
}

type Args = FilterSearch | WordSearch

export const updateQueryParams = (args: Args) => {
  const newQueryParamValue = generateSearchUrlQuery(args)
  const newUrl = `${window.location.pathname}?${newQueryParamValue}`
  window.history.replaceState(null, '', newUrl)
}
