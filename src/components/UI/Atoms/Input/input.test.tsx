import React from 'react'
import { composeStories } from '@storybook/react'
import * as stories from './Input.stories'
import { setup } from '@/testUtils'

const { Default, IsDisabled, IsError } = composeStories(stories)

test('正常に文字が入力できる。', async () => {
  const { getByRole, getByDisplayValue, user } = setup(<Default />)
  const input = getByRole('textbox')
  await user.type(input, 'example')
  expect(getByDisplayValue('example')).toBeTruthy()
})

test('isDisabled: trueの時、inputは操作できない', async () => {
  const { getByRole, user } = setup(<IsDisabled />)
  const input = getByRole('textbox')
  await user.type(input, 'example')
  expect(input).not.toHaveDisplayValue('example')
  expect(input).toHaveAttribute('disabled')
})

test('isDisabled: trueの時、inputは操作できない', async () => {
  const { getByRole } = setup(<IsError />)
  const input = getByRole('textbox')
  expect(input).toHaveAttribute('aria-invalid', 'true')
})
