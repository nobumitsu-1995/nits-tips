import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DropDown } from './DropDown'
import { ICON_TYPE } from '../../Atoms/Icon'

type ComponentType = typeof DropDown
type Story = StoryObj<ComponentType>

export default {
  component: DropDown,
  decorators: [
    () => {
      const [sortType, setSortType] = useState('desc')
      const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortType(e.target.value)
      }
      const items = [
        {
          value: 'desc',
          label: '新しい順',
        },
        {
          value: 'asc',
          label: '古い順',
        },
      ]

      return (
        <DropDown
          name="sort"
          label="更新日時"
          items={items}
          onChange={handleChange}
          selectedItem={sortType}
          iconType={ICON_TYPE.sort}
        />
      )
    },
  ],
} as Meta<ComponentType>

export const Default: Story = {}
