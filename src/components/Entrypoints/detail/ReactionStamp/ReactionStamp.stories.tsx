import type { Meta, StoryObj } from '@storybook/react'
import { ReactionStamp } from './ReactionStamp'

type ComponentType = typeof ReactionStamp
type Story = StoryObj<ComponentType>

export default {
  component: ReactionStamp,
  args: {
    articleId: 'hoge',
  },
} as Meta<ComponentType>

export const Default: Story = {}
