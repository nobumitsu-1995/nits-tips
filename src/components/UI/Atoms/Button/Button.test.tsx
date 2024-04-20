import React from 'react'
import { composeStories } from '@storybook/react'
import * as stories from './Button.stories'
import { setup } from '@/testUtils'

const { Default, IsLoading, IsDisabled } = composeStories(stories)

const mockedOnClick = vitest.fn()

beforeEach(() => {
  vitest.resetAllMocks()
})
test('ボタンを押したとき、onClickが発火する', async () => {
  const { getByRole, user } = setup(<Default onClick={mockedOnClick} />)
  await user.click(getByRole('button', { name: '送信する(submit)' }))
  expect(mockedOnClick).toHaveBeenCalled()
})

test('isLoading=trueのとき、ボタンのテキストは表示されない', async () => {
  const { queryByRole, container } = setup(<IsLoading />)
  const button = await queryByRole('button', { name: '送信する(submit)' })
  expect(button).not.toBeInTheDocument()
  expect(container.querySelector('[aria-busy]="true"')).toHaveAttribute(
    'disabled',
  )
})

test('isDisabled=trueのとき、ボタンを押せない', async () => {
  const { getByRole, user } = setup(<IsDisabled onClick={mockedOnClick} />)
  const button = getByRole('button', { name: '送信する(submit)' })
  await user.click(button)
  expect(button).toHaveAttribute('disabled')
  expect(mockedOnClick).not.toBeCalled()
})
