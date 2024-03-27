import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'
import { TOAST_TYPE } from '@/lib/Hooks/useToastProvider'

type ComponentType = typeof Toast
type Story = StoryObj<ComponentType>

export default {
  component: Toast,
} as Meta<ComponentType>

export const Success: Story = {
  args: {
    message: 'success',
    type: TOAST_TYPE.succeed,
  },
}

export const Failed: Story = {
  args: {
    message: 'failed',
    type: TOAST_TYPE.failed,
  },
}
