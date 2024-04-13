import React from 'react'
import { ICON_TYPE } from '@Atoms/Icon'
import { DropDown } from '@Molecules/DropDown'

export type SortType = 'desc' | 'asc'
export const SORT_TYPE: MappedConst<SortType> = {
  desc: 'desc',
  asc: 'asc',
}
const ITEMS = [
  {
    value: SORT_TYPE.desc,
    label: '新しい順',
  },
  {
    value: SORT_TYPE.asc,
    label: '古い順',
  },
]

type Props = {
  selected: SortType
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const UpdatedAtSort: React.FC<Props> = ({ selected, handleChange }) => (
  <DropDown
    name="sort"
    label="更新日時"
    items={ITEMS}
    onChange={handleChange}
    selectedItem={selected}
    iconType={ICON_TYPE.sort}
  />
)
