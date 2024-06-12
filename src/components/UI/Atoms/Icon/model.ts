export type IconType =
  | 'search'
  | 'arrow_upward'
  | 'sell'
  | 'folder'
  | 'link'
  | 'open_in_new'
  | 'sort'
  | 'cancel'
  | 'add_reaction'

export const ICON_TYPE: MappedConst<IconType> = {
  arrow_upward: 'arrow_upward',
  search: 'search',
  sell: 'sell',
  folder: 'folder',
  link: 'link',
  open_in_new: 'open_in_new',
  sort: 'sort',
  cancel: 'cancel',
  add_reaction: 'add_reaction',
}

export const ICON_TYPE_ARRAY: MappedConstKey<IconType> = [
  'arrow_upward',
  'search',
  'sell',
  'folder',
  'link',
  'open_in_new',
  'sort',
  'cancel',
  'add_reaction',
]
