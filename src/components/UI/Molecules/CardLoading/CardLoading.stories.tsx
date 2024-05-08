import type { Meta, StoryObj } from '@storybook/react'
import { CardLoading } from './CardLoading'

type ComponentType = typeof CardLoading
type Story = StoryObj<ComponentType>

export default {
  component: CardLoading,
} as Meta<ComponentType>

export const Default: Story = {}
