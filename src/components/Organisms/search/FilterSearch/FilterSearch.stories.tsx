import type { Meta, StoryObj } from '@storybook/react'
import { FilterSearch } from './FilterSearch'
import { categories } from '@/testUtils/fixtures/categories'
import { tagData } from '@/testUtils/fixtures/tagData'

type ComponentType = typeof FilterSearch
type Story = StoryObj<ComponentType>

export default {
  component: FilterSearch,
  args: {
    categoriesData: categories.map((category) => ({
      id: category.id,
      label: category.label,
      href: '/',
    })),
    tagsData: tagData,
  },
} as Meta<ComponentType>

export const Default: Story = {}
