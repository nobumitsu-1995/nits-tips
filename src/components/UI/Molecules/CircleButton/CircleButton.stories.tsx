import type { Meta, StoryObj } from '@storybook/react'
import { fn, userEvent, within, expect } from '@storybook/test'
import { CircleButton } from './CircleButton'
import { ICON_TYPE } from '../../Atoms/Icon'

type ComponentType = typeof CircleButton
type Story = StoryObj<ComponentType>
const mockedOnClick = fn()

export default {
  component: CircleButton,
  args: {
    iconType: ICON_TYPE.link,
    tooltipText: '記事URLをコピー',
    onClick: mockedOnClick,
  },
} as Meta<ComponentType>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: '記事URLをコピー' })
    await userEvent.click(button)
    expect(mockedOnClick).toHaveBeenCalled()
  },
}
