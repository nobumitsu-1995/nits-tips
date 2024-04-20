import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Input } from './Input'

type ComponentType = typeof Input
type Story = StoryObj<ComponentType>

export default {
  component: Input,
  args: {
    name: 'email',
    onChange: fn(),
    placeholder: 'example@example.com',
  },
  decorators: [
    (Component) => {
      const [value, setValue] = useState('')
      return <Component value={value} onChange={setValue} />
    },
  ],
} as Meta<ComponentType>

export const Default: Story = {}

export const IsDisabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const IsError: Story = {
  args: {
    isError: true,
  },
}
