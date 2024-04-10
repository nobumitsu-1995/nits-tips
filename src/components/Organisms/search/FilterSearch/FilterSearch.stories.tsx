import type { Meta, StoryObj } from '@storybook/react'
import { FilterSearch } from './FilterSearch'
import { categories } from '@/testUtils/fixtures/categories'
import { tags } from '@/testUtils/fixtures/tags'

type ComponentType = typeof FilterSearch
type Story = StoryObj<ComponentType>

export default {
  component: FilterSearch,
  args: {
    categoriesData: categories.map((category) => ({
      id: category.id,
      label: category.label,
    })),
    tagsData: tags.map((tag) => ({
      id: tag.id,
      label: tag.label,
    })),
  },
} as Meta<ComponentType>

export const Default: Story = {}
