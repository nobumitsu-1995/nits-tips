import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './Tag.stories'
import * as styles from './Tag.css'

const { Default, WithoutImage } = composeStories(stories)

test('srcが指定されているとき、画像が表示される。', async () => {
  const { getByRole } = setup(<Default />)
  const image = getByRole('link', { name: 'javascript' }).querySelector(
    `.${styles.image}`,
  )
  expect(image?.getAttribute('src')).toBe(
    'https://placehold.co/400x400/F0DB4F/000',
  )
})

test('srcが指定されていない時、folderアイコンが表示される。', async () => {
  const { getByRole } = setup(<WithoutImage />)
  const icon = getByRole('link', { name: 'javascript' }).querySelector(
    '.material-symbols-outlined',
  )
  expect(icon?.innerHTML).toBe('folder')
})
