import type { Meta, StoryObj } from '@storybook/react'
import { PublishedAt } from './PublishedAt'

type ComponentType = typeof PublishedAt
type Story = StoryObj<ComponentType>

export default {
  component: PublishedAt,
  args: {
    publishedAt: '2024/03/20',
  },
} as Meta<ComponentType>

export const WithoutUpdatedAt: Story = {}

export const WithUpdatedAt: Story = {
  args: {
    updatedAt: '2024/03/21',
  },
}

export const WithFontSize: Story = {
  args: {
    updatedAt: '2024/03/21',
    fontSize: 16,
  },
}
