import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, fn, expect } from '@storybook/test'
import { Button } from './Button'

type ComponentType = typeof Button
type Story = StoryObj<ComponentType>
const mockedOnClick = fn()

export default {
  component: Button,
  args: {
    isDisabled: false,
    isLoading: false,
    children: '送信する(submit)',
    onClick: mockedOnClick,
  },
  argTypes: {
    onClick: () => {},
  },
} as Meta<ComponentType>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(
      canvas.getByRole('button', { name: '送信する(submit)' }),
    )
    expect(mockedOnClick).toBeCalled()
  },
}

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.queryByRole('button')
    expect(button).not.toBeInTheDocument()
  },
}

export const IsDisabled: Story = {
  args: {
    isDisabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    expect(mockedOnClick).not.toBeCalled()
    expect(button).toHaveAttribute('disabled')
  },
}
