import React, { useState } from 'react'
import { ICON_TYPE } from '@Atoms/Icon'
import { DropDown } from './DropDown'
import { setup } from '@/testUtils'

const Component = () => {
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
}

test('値の選択が問題なくできる。', async () => {
  const { user, getByRole } = setup(<Component />)
  const combobox = getByRole('combobox', { name: '更新日時' })
  expect(combobox).toHaveDisplayValue(['新しい順'])
  await user.selectOptions(combobox, 'asc')
  expect(combobox).toHaveDisplayValue(['古い順'])
})
