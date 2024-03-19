import type { Meta, StoryObj } from '@storybook/react'
import { Author } from './Author'

type ComponentType = typeof Author
type Story = StoryObj<ComponentType>

export default {
  component: Author,
  args: {
    name: 'hoge',
  },
} as Meta<ComponentType>

export const Primary: Story = {
  args: {
    name: 'primary',
  },
}
