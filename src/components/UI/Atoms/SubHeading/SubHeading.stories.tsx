import type { Meta, StoryObj } from '@storybook/react'
import { SubHeading } from './SubHeading'

type ComponentType = typeof SubHeading
type Story = StoryObj<ComponentType>

export default {
  component: SubHeading,
  args: {
    text: '記事検索',
  },
} as Meta<ComponentType>

export const Default: Story = {}
