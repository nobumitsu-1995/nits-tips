import React from 'react'
import { ICON_TYPE } from '@Atoms/Icon'
import { DropDown } from '@Molecules/DropDown'
import type { MicroCMS } from '@/types/microCMS'

type Props = {
  selected: string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  categories: MicroCMS['category'][]
}

export const CategoryFilter: React.FC<Props> = ({
  selected,
  handleChange,
  categories,
}) => (
  <DropDown
    name="category"
    label="カテゴリ"
    items={categories.map((category) => ({
      value: category.id,
      label: category.label,
    }))}
    onChange={handleChange}
    selectedItem={selected}
    iconType={ICON_TYPE.folder}
  />
)
