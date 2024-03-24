import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

type ComponentType = typeof Footer
type Story = StoryObj<ComponentType>

export default {
  component: Footer,
} as Meta<ComponentType>

export const Default: Story = {}
