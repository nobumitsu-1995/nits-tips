import type { Meta, StoryObj } from '@storybook/react'
import { Content } from './Content'
import { articleContent } from '@/testUtils/fixtures/articleConetnts'

type ComponentType = typeof Content
type Story = StoryObj<ComponentType>

export default {
  component: Content,
  args: {
    content: articleContent,
  },
} as Meta<ComponentType>

export const Default: Story = {}
