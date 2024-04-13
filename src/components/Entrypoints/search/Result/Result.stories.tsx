import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'
import { blogs } from '@/testUtils/fixtures/blogsData'
import { categories } from '@/testUtils/fixtures/categories'
import { tags } from '@/testUtils/fixtures/tags'

type ComponentType = typeof Container
type Story = StoryObj<ComponentType>

export default {
  component: Container,
  args: {
    blogs: blogs(15),
    categories,
    tags,
    selectedTags: tags.map((tag) => tag.id),
  },
} as Meta<ComponentType>

export const Default: Story = {}
