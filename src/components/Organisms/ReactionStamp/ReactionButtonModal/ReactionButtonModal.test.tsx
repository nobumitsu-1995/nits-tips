import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './ReactionButtonModal.stories'

const { Default } = composeStories(stories)

test('リアクション状況によって適切なボタンラベルが入る', async () => {
  const { getByRole } = setup(<Default />)

  expect(
    getByRole('button', { name: 'goodリアクションを取り消す' }),
  ).toBeInTheDocument()
  expect(
    getByRole('button', { name: 'watchリアクションを取り消す' }),
  ).toBeInTheDocument()
  expect(
    getByRole('button', { name: 'niceリアクションをする' }),
  ).toBeInTheDocument()
  expect(
    getByRole('button', { name: 'geniusリアクションをする' }),
  ).toBeInTheDocument()
  expect(
    getByRole('button', { name: 'hoorayリアクションを取り消す' }),
  ).toBeInTheDocument()
  expect(
    getByRole('button', { name: 'loveリアクションをする' }),
  ).toBeInTheDocument()
})
