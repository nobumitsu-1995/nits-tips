import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './ArticleSection.stories'

const { NewestArticles, PopularArticles } = composeStories(stories)

test('ページ数が2以上の時、ページネーションが表示される', async () => {
  const { getByRole } = setup(<NewestArticles />)
  expect(getByRole('heading', { name: '新着記事' })).toBeInTheDocument()
  expect(
    getByRole('button', { name: '最初のページに移動' }),
  ).toBeInTheDocument()
})

test('ページ数が1以下の時、ページネーションは表示されない', async () => {
  const { getByRole, queryByRole } = setup(<PopularArticles />)
  expect(
    getByRole('heading', { name: 'よく読まれている記事' }),
  ).toBeInTheDocument()
  expect(
    queryByRole('button', { name: '最初のページに移動' }),
  ).not.toBeInTheDocument()
})
