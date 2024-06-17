import React from 'react'
import { setup } from '@/testUtils'
import { ReactionButton } from './ReactionButton'

test('sample test', async () => {
  const { getByRole, getByText, user } = setup(<ReactionButton name="hoge" />)
  await user.click(getByRole('button', { name: 'button' }))
  expect(getByText('click').innerHTML).toBe('click')
})
