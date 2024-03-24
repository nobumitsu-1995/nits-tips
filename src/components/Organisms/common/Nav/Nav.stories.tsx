import type { Meta, StoryObj } from '@storybook/react'
import { Nav } from './Nav'

type ComponentType = typeof Nav
type Story = StoryObj<ComponentType>

export default {
  component: Nav,
} as Meta<ComponentType>

export const Default: Story = {}
