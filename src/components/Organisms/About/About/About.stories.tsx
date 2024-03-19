import type { Meta, StoryObj } from '@storybook/react'
import { About } from './About'

type ComponentType = typeof About
type Story = StoryObj<ComponentType>

export default {
  component: About,
} as Meta<ComponentType>

export const Default: Story = {}
