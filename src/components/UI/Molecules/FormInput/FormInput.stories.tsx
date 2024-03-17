import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn, userEvent, within, expect } from '@storybook/test'
import { FormInput } from './FormInput'

type ComponentType = typeof FormInput
type Story = StoryObj<ComponentType>

export default {
  component: FormInput,
  args: {
    label: 'メールアドレス(e-mail)',
    type: 'email',
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

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, 'example')
    expect(input).toHaveDisplayValue('example')
  },
}

export const IsDisabled: Story = {
  args: {
    isDisabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, 'example')
    expect(input).not.toHaveDisplayValue('example')
    expect(input).toHaveAttribute('disabled')
  },
}

export const IsError: Story = {
  args: {
    errorText: '※この値は必須です',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAccessibleDescription('※この値は必須です')
    const error = canvas.getByText('※この値は必須です')
    expect(error).toHaveAttribute('aria-live', 'polite')
  },
}
