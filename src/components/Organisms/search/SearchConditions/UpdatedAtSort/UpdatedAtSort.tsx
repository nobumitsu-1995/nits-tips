import React from 'react'
import { ICON_TYPE } from '@Atoms/Icon'
import { DropDown } from '@Molecules/DropDown'
import { ITEMS, type SortType } from './model'

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
