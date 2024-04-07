import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './Select.stories'

const { Default } = composeStories(stories)

test('checkboxを選択することで、選択済みの切り替えができる', async () => {
  const { getByRole, getByText, queryByText, user } = setup(<Default />)
  await user.click(getByRole('checkbox', { name: '選択肢１' }))
  expect(getByText('1')).toBeTruthy()
  await user.click(getByRole('checkbox', { name: '選択肢１' }))
  expect(queryByText('1')).toBeFalsy()
  await user.click(getByRole('checkbox', { name: '選択肢３' }))
  await user.click(getByRole('checkbox', { name: '選択肢２' }))
  expect(getByText('3,2')).toBeTruthy()
})
