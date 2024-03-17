import React from 'react'
import { setup } from '@/testUtils'
import { FormInput } from './FormInput'

test('sample test', async () => {
  const { getByRole, getByText, user } = setup(<FormInput name="hoge" />)
  await user.click(getByRole('button', { name: 'button' }))
  expect(getByText('click').innerHTML).toBe('click')
})
