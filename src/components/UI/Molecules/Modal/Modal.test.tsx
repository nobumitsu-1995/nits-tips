import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './Modal.stories'

const { Default } = composeStories(stories)

test('buttonを押すとモーダルが開く', async () => {
  const { getByRole, getByText, user } = setup(<Default />)
  await user.click(getByRole('button', { name: 'button' }))
  expect(getByText('component')).toBeInTheDocument()
})
