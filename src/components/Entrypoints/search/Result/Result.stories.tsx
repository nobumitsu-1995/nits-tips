import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'
import { blogs } from '@/testUtils/fixtures/blogsData'

type ComponentType = typeof Container
type Story = StoryObj<ComponentType>

export default {
  component: Container,
  args: {
    blogs: blogs(15),
  },
} as Meta<ComponentType>

export const Default: Story = {}
