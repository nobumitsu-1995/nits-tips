import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

type ComponentType = typeof Link
type Story = StoryObj<ComponentType>

export default {
  component: Link,
  args: {
    text: 'link',
    href: 'http://example.com',
  },
} as Meta<ComponentType>

export const Default: Story = {}

export const IsTargetBlank: Story = {
  args: {
    isTagetBlank: true,
  },
}
