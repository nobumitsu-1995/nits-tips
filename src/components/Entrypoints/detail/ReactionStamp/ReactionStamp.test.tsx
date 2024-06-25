import React from 'react'
import { setup } from '@/testUtils'
import { ReactionStamp } from './ReactionStamp'

test('sample test', async () => {
  const { getByRole, getByText, user } = setup(<ReactionStamp />)
  await user.click(getByRole('button', { name: 'button' }))
  expect(getByText('click').innerHTML).toBe('click')
})
