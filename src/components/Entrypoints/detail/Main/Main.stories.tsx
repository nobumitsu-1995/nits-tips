import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'
import { blog, blogs } from '@/testUtils/fixtures/blogsData'

type ComponentType = typeof Container
type Story = StoryObj<ComponentType>

export default {
  component: Container,
  args: {
    blog: blog(),
    relatedBlogs: blogs(4),
    githubAccount: {
      name: '@nobumitsu-1995',
      src: 'https://avatars.githubusercontent.com/u/70850598?v=4',
      href: 'https://github.com/nobumitsu-1995',
    },
  },
} as Meta<ComponentType>

export const Default: Story = {}
