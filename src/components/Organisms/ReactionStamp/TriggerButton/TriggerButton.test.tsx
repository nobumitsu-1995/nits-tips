import React from 'react'
import { setup } from '@/testUtils'
import { TriggerButton } from './TriggerButton'

test('sample test', async () => {
  const { getByRole, getByText, user } = setup(<TriggerButton name="hoge" />)
  await user.click(getByRole('button', { name: 'button' }))
  expect(getByText('click').innerHTML).toBe('click')
})
