import React from 'react'
import { composeStories } from '@storybook/react'
import * as stories from './FormInput.stories'
import { setup } from '@/testUtils'

const { Default, IsDisabled, IsError } = composeStories(stories)

test('値の入力が問題なくできる', async () => {
  const { getByRole, user } = setup(<Default />)
  const input = getByRole('textbox')
  await user.type(input, 'example')
  expect(input).toHaveDisplayValue('example')
})

test('isDisabledがtrueの時、値の入力はできない', async () => {
  const { getByRole, user } = setup(<IsDisabled />)
  const input = getByRole('textbox')
  await user.type(input, 'example')
  expect(input).not.toHaveDisplayValue('example')
  expect(input).toHaveAttribute('disabled')
})

test('isErrorがtrueの時、値の入力はできずエラー分が出る。', async () => {
  const { getByRole, getByText } = setup(<IsError />)
  const input = getByRole('textbox')
  expect(input).toHaveAttribute('aria-invalid', 'true')
  expect(input).toHaveAccessibleDescription('※この値は必須です')
  expect(getByText('※この値は必須です')).toHaveAttribute('aria-live', 'polite')
})
