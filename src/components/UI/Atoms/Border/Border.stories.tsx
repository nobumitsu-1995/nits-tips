import type { Meta, StoryObj } from '@storybook/react'
import { Border } from './Border'

type ComponentType = typeof Border
type Story = StoryObj<ComponentType>

export default {
  component: Border,
} as Meta<ComponentType>

export const Default: Story = {}
