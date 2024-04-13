import type { Meta, StoryObj } from '@storybook/react'
import { SearchConditions } from './SearchConditions'
import { categories } from '@/testUtils/fixtures/categories'
import { tags } from '@/testUtils/fixtures/tags'

type ComponentType = typeof SearchConditions
type Story = StoryObj<ComponentType>

export default {
  component: SearchConditions,
  args: {
    categories,
    tags,
    selectedTags: tags.map((tag) => tag.id),
  },
} as Meta<ComponentType>

export const Default: Story = {}
