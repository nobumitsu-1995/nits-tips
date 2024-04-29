import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchConditions } from './SearchConditions'
import { categories } from '@/testUtils/fixtures/categories'
import { tags } from '@/testUtils/fixtures/tags'
import { SearchFormProvider } from '@/lib/Hooks/useSearchForm'
import { createArtilceArray } from '@/testUtils/fixtures/articleData'

type ComponentType = typeof SearchConditions
type Story = StoryObj<ComponentType>

export default {
  component: SearchConditions,
  args: {
    categories,
    tags,
  },
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
} as Meta<ComponentType>

export const Default: Story = {}
