import type { Meta, StoryObj } from '@storybook/react'
import { SearchCard } from './SearchCard'

type ComponentType = typeof SearchCard
type Story = StoryObj<ComponentType>

export default {
  component: SearchCard,
} as Meta<ComponentType>

export const Default: Story = {}
