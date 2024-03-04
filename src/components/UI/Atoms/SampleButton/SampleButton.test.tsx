import React from 'react'
import { setup } from '@/testUtils'
import { SampleButton } from './SampleButton'

test('sample test', async () => {
  const { getByRole, getByText, user } = setup(<SampleButton name="hoge" />)
  await user.click(getByRole('button', { name: 'button' }))
  expect(getByText('click').innerHTML).toBe('click')
})
