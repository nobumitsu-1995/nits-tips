import type { Meta, StoryObj } from '@storybook/react'
import { SampleButton } from './SampleButton'

type ComponentType = typeof SampleButton
type Story = StoryObj<ComponentType>

export default {
  component: SampleButton,
  args: {
    name: 'hoge',
  },
} as Meta<ComponentType>

export const Primary: Story = {
  args: {
    name: 'primary',
  },
}
