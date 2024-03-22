import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'
import { articleContent } from '@/testUtils/fixtures/articleConetnts'

type ComponentType = typeof Container
type Story = StoryObj<ComponentType>

export default {
  component: Container,
  args: {
    content: articleContent,
  },
} as Meta<ComponentType>

export const Default: Story = {}
