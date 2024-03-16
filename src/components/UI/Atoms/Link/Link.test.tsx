import React from 'react'
import { composeStories } from '@storybook/react'
import { setup } from '@/testUtils'
import * as stories from './Link.stories'

const { Default, IsTargetBlank } = composeStories(stories)

test('hrefが正常に付与されている', () => {
  const { getByRole } = setup(<Default />)
  const link = getByRole('link', { name: 'link' })
  expect(link.getAttribute('href')).toBe('http://example.com')
})
test('isTargetBlankがfalseの時、targetは_selfでnoopenerは付与されない', async () => {
  const { getByRole } = setup(<Default />)
  const link = getByRole('link', { name: 'link' })
  expect(link.getAttribute('target')).toBe('_self')
  expect(link.getAttribute('rel')).toBe('noreferrer')
})

test('isTargetBlankがtrueの時、targetは_blankでnoopenerが付与される', async () => {
  const { getByRole } = setup(<IsTargetBlank />)
  const link = getByRole('link', { name: 'link' })
  expect(link.getAttribute('target')).toBe('_blank')
  expect(link.getAttribute('rel')).toBe('noreferrer noopener')
})
