import React from 'react'
import { ICON_TYPE } from '@Atoms/Icon'
import { DropDown } from '@Molecules/DropDown'

export type CategoryType = {
  id: string
  label: string
}

type Props = {
  selected: string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  categories: CategoryType[]
}

const ALL = {
  id: '',
  label: 'すべて',
}

export const CategoryFilter: React.FC<Props> = ({
  selected,
  handleChange,
  categories,
}) => (
  <DropDown
    name="category"
    label="カテゴリ"
    items={[ALL, ...categories].map((category) => ({
      value: category.id,
      label: category.label,
    }))}
    onChange={handleChange}
    selectedItem={selected}
    iconType={ICON_TYPE.folder}
  />
)
