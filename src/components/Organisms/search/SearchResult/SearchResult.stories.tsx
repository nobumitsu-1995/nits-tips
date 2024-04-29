import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchResult } from './SearchResult'
import { createArtilceArray } from '@/testUtils/fixtures/articleData'
import { SearchFormProvider } from '@/lib/Hooks/useSearchForm'

type ComponentType = typeof SearchResult
type Story = StoryObj<ComponentType>

export default {
  component: SearchResult,
} as Meta<ComponentType>

export const Default: Story = {
  decorators: [
    (Component) => (
      <SearchFormProvider
        initialArticles={createArtilceArray()}
        initialTags={[]}
      >
        <Component />
      </SearchFormProvider>
    ),
  ],
  tags: ['skip-test'],
}
export const NoResult: Story = {
  args: {
    articles: [],
  },
  decorators: [
    (Component) => (
      <SearchFormProvider initialArticles={[]} initialTags={[]}>
        <Component />
      </SearchFormProvider>
    ),
  ],
}
