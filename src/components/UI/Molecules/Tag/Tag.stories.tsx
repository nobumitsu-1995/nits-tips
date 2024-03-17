import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag'

type ComponentType = typeof Tag
type Story = StoryObj<ComponentType>

export default {
  component: Tag,
  args: {
    label: 'javascript',
    href: 'http://example.com',
  },
} as Meta<ComponentType>

export const Default: Story = {
  args: {
    src: 'https://placehold.co/400x400/F0DB4F/000',
  },
}

export const WithoutImage: Story = {}
