import type { Meta, StoryObj } from '@storybook/react'
import { NewestArticles } from './NewestArticles'
import { blogs } from '@/testUtils/fixtures/blogsData'

type ComponentType = typeof NewestArticles
type Story = StoryObj<ComponentType>

export default {
  component: NewestArticles,
  args: {
    blogs: blogs(15),
  },
} as Meta<ComponentType>

export const Default: Story = {}
