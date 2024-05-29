import type { Meta, StoryObj } from '@storybook/react'
import { Top } from './Top'
import { blogs } from '@/testUtils/fixtures/blogsData'

type ComponentType = typeof Top
type Story = StoryObj<ComponentType>

export default {
  component: Top,
  args: {
    blogs: blogs(15),
  },
} as Meta<ComponentType>

export const Default: Story = {}
