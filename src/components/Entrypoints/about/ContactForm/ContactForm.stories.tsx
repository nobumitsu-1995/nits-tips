import type { Meta, StoryObj } from '@storybook/react'
import { ContactForm } from './ContactForm'

type ComponentType = typeof ContactForm
type Story = StoryObj<ComponentType>

export default {
  component: ContactForm,
} as Meta<ComponentType>

export const Default: Story = {}
