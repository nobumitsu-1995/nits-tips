import type { Meta, StoryObj } from '@storybook/react'
import { TextLoading } from './TextLoading'

type ComponentType = typeof TextLoading
type Story = StoryObj<ComponentType>

export default {
  component: TextLoading,
  args: {
    height: '40px',
  },
} as Meta<ComponentType>

export const Default: Story = {}
