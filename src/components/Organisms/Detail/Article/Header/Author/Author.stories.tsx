import type { Meta, StoryObj } from '@storybook/react'
import { Author } from './Author'

type ComponentType = typeof Author
type Story = StoryObj<ComponentType>

export default {
  component: Author,
  args: {
    name: '@nobumitsu-1995',
    src: 'https://avatars.githubusercontent.com/u/70850598?v=4',
    href: 'https://github.com/nobumitsu-1995',
  },
} as Meta<ComponentType>

export const Default: Story = {}
