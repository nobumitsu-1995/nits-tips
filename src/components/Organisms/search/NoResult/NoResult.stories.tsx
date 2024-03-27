import type { Meta, StoryObj } from '@storybook/react'
import { NoResult } from './NoResult'

type ComponentType = typeof NoResult
type Story = StoryObj<ComponentType>

export default {
  component: NoResult,
} as Meta<ComponentType>

export const Default: Story = {}
