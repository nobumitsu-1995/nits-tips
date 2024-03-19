import type { Meta, StoryObj } from '@storybook/react'
import { RelatedArticle } from './RelatedArticle'
import { createArtilceArray } from '@/testUtils/fixtures/articleData'

type ComponentType = typeof RelatedArticle
type Story = StoryObj<ComponentType>

export default {
  component: RelatedArticle,
  args: {
    articles: createArtilceArray().slice(0, 4),
  },
} as Meta<ComponentType>

export const Default: Story = {}
