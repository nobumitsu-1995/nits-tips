import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './ArticleIndex.stories'

const { Default } = composeStories(stories)

test('listitemがchildを含め全て描画されており、spanも正常な番号が付与されている', async () => {
  const { getAllByRole } = setup(<Default />)
  const listitem = getAllByRole('listitem')
  expect(listitem).toHaveLength(10)
  expect(listitem[4].textContent).toBe(
    '3-2. タイトル3-2@ojsfplkjvplsnfvpnsepfkvnpksdfnvpksenfpvnjspefkvnpskdfnvpksdnfpvnds',
  )
})
