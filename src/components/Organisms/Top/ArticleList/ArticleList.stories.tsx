import type { Meta, StoryObj } from '@storybook/react'
import { ArticleList } from './ArticleList'
import { createArtilceArray } from '@/testUtils/fixtures/articleData'

type ComponentType = typeof ArticleList
type Story = StoryObj<ComponentType>

export default {
  component: ArticleList,
  args: {
    articles: createArtilceArray(),
  },
} as Meta<ComponentType>

export const Default: Story = {}
