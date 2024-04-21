import React from 'react'
import { composeStories } from '@storybook/react'
import * as stories from './CircleButton.stories'
import { setup } from '@/testUtils'

const { Default, WithoutTooltip } = composeStories(stories)

const onClickMock = vitest.fn()

test('クリックした時、onClick関数が発火する', async () => {
  const { user, getByRole } = setup(<Default onClick={onClickMock} />)
  await user.click(getByRole('button', { name: '記事URLをコピー' }))
  expect(onClickMock).toHaveBeenCalled()
})

test('withTooltipがtrueでhoverした時、ツールチップが表示される。', async () => {
  const { user, getByRole, getByText } = setup(
    <Default onClick={onClickMock} />,
  )
  await user.hover(getByRole('button', { name: '記事URLをコピー' }))
  expect(getByText('記事URLをコピー')).toBeInTheDocument()
})

test('withTooltipがfalseでhoverした時、ツールチップは表示されない。', async () => {
  const { user, getByRole, queryByText } = setup(
    <WithoutTooltip onClick={onClickMock} />,
  )
  await user.hover(getByRole('button', { name: '記事URLをコピー' }))
  expect(queryByText('記事URLをコピー')).not.toBeInTheDocument()
})
