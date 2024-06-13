import React from 'react'
import { setup } from '@/testUtils'
import { ReactedButton } from './ReactedButton'

test('sample test', async () => {
  const { getByRole, getByText, user } = setup(<ReactedButton name="hoge" />)
  await user.click(getByRole('button', { name: 'button' }))
  expect(getByText('click').innerHTML).toBe('click')
})
