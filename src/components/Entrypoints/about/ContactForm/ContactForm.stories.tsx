import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'

type ComponentType = typeof Container
type Story = StoryObj<ComponentType>

export default {
  component: Container,
} as Meta<ComponentType>

export const Default: Story = {}
