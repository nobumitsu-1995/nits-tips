export type SearchType = 'all' | 'title'
export const SEARCH_TYPE: MappedConst<SearchType> = {
  all: 'all',
  title: 'title',
}

export const isSearchType = (value: string): value is SearchType =>
  value === SEARCH_TYPE.all || value === SEARCH_TYPE.title
