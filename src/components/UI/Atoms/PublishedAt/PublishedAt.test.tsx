import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './PublishedAt.stories'

const { WithoutUpdatedAt, WithUpdatedAt } = composeStories(stories)

test('updatedAtの指定がないとき、表示されない', async () => {
  const { getByText, queryByText } = setup(<WithoutUpdatedAt />)
  expect(getByText('記事投稿日: 2024/03/20')).toBeInTheDocument()
  expect(queryByText('最終更新日: 2024/03/21')).not.toBeInTheDocument()
})

test('updatedAtの指定があるとき、表示される', async () => {
  const { getByText } = setup(<WithUpdatedAt />)
  expect(getByText('記事投稿日: 2024/03/20')).toBeInTheDocument()
  expect(getByText('最終更新日: 2024/03/21')).toBeInTheDocument()
})
