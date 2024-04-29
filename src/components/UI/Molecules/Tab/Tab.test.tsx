import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './Tab.stories'

const { Default } = composeStories(stories)

test('タブの切り替えが問題なくできる', async () => {
  const { getByRole, user } = setup(<Default />)
  expect(getByRole('tabpanel', { name: 'ワード検索' })).toBeInTheDocument()
  await user.click(getByRole('tab', { name: '絞り込み検索' }))
  expect(getByRole('tabpanel', { name: '絞り込み検索' })).toBeInTheDocument()
})
