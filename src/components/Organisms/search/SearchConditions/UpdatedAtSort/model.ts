export type SortType = 'desc' | 'asc'
export const SORT_TYPE: MappedConst<SortType> = {
  desc: 'desc',
  asc: 'asc',
}
export const ITEMS = [
  {
    value: SORT_TYPE.desc,
    label: '新しい順',
  },
  {
    value: SORT_TYPE.asc,
    label: '古い順',
  },
]
