import type { Meta, StoryObj } from '@storybook/react'
import { Top } from './Top'
import { blogs } from '@/testUtils/fixtures/blogsData'
import { tagData } from '@/testUtils/fixtures/tagData'

type ComponentType = typeof Top
type Story = StoryObj<ComponentType>

export default {
  component: Top,
  args: {
    blogs: blogs(15),
    tagsData: tagData,
  },
} as Meta<ComponentType>

export const Default: Story = {}
