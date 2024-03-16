import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from './Theme'

type ComponentType = typeof Theme
type Story = StoryObj<ComponentType>

export default {
  component: Theme,
} as Meta<ComponentType>

export const Primary: Story = {}
