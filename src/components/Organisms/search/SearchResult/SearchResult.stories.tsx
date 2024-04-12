import type { Meta, StoryObj } from '@storybook/react'
import { SearchResult } from './SearchResult'
import { createArtilceArray } from '@/testUtils/fixtures/articleData'

type ComponentType = typeof SearchResult
type Story = StoryObj<ComponentType>

export default {
  component: SearchResult,
  args: {
    articles: createArtilceArray(),
    isLoading: false,
  },
} as Meta<ComponentType>

export const Default: Story = {}
export const NoResult: Story = {
  args: {
    articles: [],
  },
}
export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
}
