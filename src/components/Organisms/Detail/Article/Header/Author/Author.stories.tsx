import type { Meta, StoryObj } from '@storybook/react'
import { Author } from './Author'
import { githubAccount } from '@/testUtils/fixtures/githubAccount'

type ComponentType = typeof Author
type Story = StoryObj<ComponentType>

export default {
  component: Author,
  args: githubAccount,
} as Meta<ComponentType>

export const Default: Story = {}
