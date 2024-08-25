import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './Pagination.stories'

const { Default } = composeStories(stories)

test('ページをクリックすることで、現在ページが変更される', async () => {
  const { getByRole, getByText, user } = setup(<Default />)
  expect(getByText('現在のページ：1')).toBeInTheDocument()

  await user.click(getByRole('button', { name: '2' }))
  expect(getByText('現在のページ：2')).toBeInTheDocument()
})

test('最後に移動するボタンを押すと最終ページに戻り、最初に戻るボタンを押すと最初のページに戻る', async () => {
  const { getByRole, getByText, user } = setup(<Default />)
  expect(getByText('現在のページ：1')).toBeInTheDocument()

  await user.click(getByRole('button', { name: '最後のページに移動' }))
  expect(getByText('現在のページ：5')).toBeInTheDocument()

  await user.click(getByRole('button', { name: '最初のページに移動' }))
  expect(getByText('現在のページ：1')).toBeInTheDocument()
})

test('次へボタンを押すと次のページに移動し、前に戻るボタンを押すと前のページに戻る', async () => {
  const { getByRole, getByText, user } = setup(<Default />)
  expect(getByText('現在のページ：1')).toBeInTheDocument()

  await user.click(getByRole('button', { name: '次のページに移動' }))
  await user.click(getByRole('button', { name: '次のページに移動' }))
  expect(getByText('現在のページ：3')).toBeInTheDocument()

  await user.click(getByRole('button', { name: '前のページに移動' }))
  expect(getByText('現在のページ：2')).toBeInTheDocument()
})
