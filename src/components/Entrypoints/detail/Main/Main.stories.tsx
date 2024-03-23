import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'
import { blog, blogs } from '@/testUtils/fixtures/blogsData'
import { githubAccount } from '@/testUtils/fixtures/githubAccount'

type ComponentType = typeof Container
type Story = StoryObj<ComponentType>

export default {
  component: Container,
  args: {
    blog: blog(),
    relatedBlogs: blogs(4),
    githubAccount,
  },
} as Meta<ComponentType>

export const Default: Story = {}
