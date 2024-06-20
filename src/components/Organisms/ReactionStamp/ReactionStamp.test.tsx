import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './ReactionStamp.stories'

const { Default } = composeStories(stories)

test.todo('triggerボタンを押下すると、モーダルが開く', async () => {
  const { getByRole, user } = setup(<Default />)
  await user.click(getByRole('button', { name: 'スタンプでリアクションする' }))
})

test('自分がリアクション済みのスタンプは、アクティブボタンになる', () => {
  const { getByRole } = setup(<Default />)
  expect(
    getByRole('switch', {
      name: '24のloveリアクション loveリアクションを取り消す',
    }),
  ).toBeInTheDocument()
})
