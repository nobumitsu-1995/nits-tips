import React from 'react'
import { setup } from '@/testUtils'
import { ReactionButtonModal } from './ReactionButtonModal'

test('sample test', async () => {
  const { getByRole, getByText, user } = setup(
    <ReactionButtonModal name="hoge" />,
  )
  await user.click(getByRole('button', { name: 'button' }))
  expect(getByText('click').innerHTML).toBe('click')
})
