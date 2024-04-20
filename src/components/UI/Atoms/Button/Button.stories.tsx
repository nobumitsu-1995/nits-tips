import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'

type ComponentType = typeof Button
type Story = StoryObj<ComponentType>

export default {
  component: Button,
  args: {
    isDisabled: false,
    isLoading: false,
    children: '送信する(submit)',
    onClick: fn(),
  },
  argTypes: {
    onClick: () => {},
  },
} as Meta<ComponentType>

export const Default: Story = {}

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
}

export const IsDisabled: Story = {
  args: {
    isDisabled: true,
  },
}
