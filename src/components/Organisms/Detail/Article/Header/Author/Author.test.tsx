import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './Author.stories'

const { Default } = composeStories(stories)

test('linkが正しく設定されている', async () => {
  const { getByRole } = setup(<Default />)
  expect(
    getByRole('link', { name: '@nobumitsu-1995のgithubトップ' }).getAttribute(
      'href',
    ),
  ).toBe('https://github.com/nobumitsu-1995')
  expect(
    getByRole('link', { name: '@nobumitsu-1995' }).getAttribute('href'),
  ).toBe('https://github.com/nobumitsu-1995')
})
