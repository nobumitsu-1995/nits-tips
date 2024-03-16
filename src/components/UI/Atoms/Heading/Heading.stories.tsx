import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'

type ComponentType = typeof Heading
type Story = StoryObj<ComponentType>

export default {
  component: Heading,
  args: {
    text: '関連記事',
  },
} as Meta<ComponentType>

export const Default: Story = {}
