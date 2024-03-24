import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

type ComponentType = typeof Header
type Story = StoryObj<ComponentType>

export default {
  component: Header,
} as Meta<ComponentType>

export const Default: Story = {}
