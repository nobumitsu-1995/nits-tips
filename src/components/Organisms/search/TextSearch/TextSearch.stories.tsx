import type { Meta, StoryObj } from '@storybook/react'
import { TextSearch } from './TextSearch'

type ComponentType = typeof TextSearch
type Story = StoryObj<ComponentType>

export default {
  component: TextSearch,
} as Meta<ComponentType>

export const Default: Story = {}
