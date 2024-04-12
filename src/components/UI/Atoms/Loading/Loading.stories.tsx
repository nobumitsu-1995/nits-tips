import type { Meta, StoryObj } from '@storybook/react'
import { Loading } from './Loading'

type ComponentType = typeof Loading
type Story = StoryObj<ComponentType>

export default {
  component: Loading,
} as Meta<ComponentType>

export const Default: Story = {}
