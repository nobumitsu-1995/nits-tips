import type { Meta, StoryObj } from '@storybook/react'
import { SearchForm } from './SearchForm'

type ComponentType = typeof SearchForm
type Story = StoryObj<ComponentType>

export default {
  component: SearchForm,
} as Meta<ComponentType>

export const Default: Story = {}
