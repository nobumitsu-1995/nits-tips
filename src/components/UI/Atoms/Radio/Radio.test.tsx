import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './Radio.stories'

const { Default } = composeStories(stories)

test('ラジオボタンをクリックすることで、選択されているvalueが切り替わる', async () => {
  const { getByRole, getByText, queryByText, user } = setup(<Default />)
  await user.click(getByRole('radio', { name: '選択肢１' }))
  expect(getByText('1')).toBeTruthy()
  await user.click(getByRole('radio', { name: '選択肢２' }))
  expect(queryByText('1')).toBeFalsy()
  expect(getByText('2')).toBeTruthy()
  await user.click(getByRole('radio', { name: '選択肢３' }))
  expect(getByText('3')).toBeTruthy()
  expect(getByText('3')).toBeTruthy()
})
