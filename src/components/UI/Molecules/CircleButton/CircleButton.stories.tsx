import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { CircleButton } from './CircleButton'
import { ICON_TYPE } from '../../Atoms/Icon'

type ComponentType = typeof CircleButton
type Story = StoryObj<ComponentType>

export default {
  component: CircleButton,
  args: {
    iconType: ICON_TYPE.link,
    tooltipText: '記事URLをコピー',
    onClick: fn(),
  },
} as Meta<ComponentType>

export const Default: Story = {}

export const WithoutTooltip: Story = {
  args: {
    withTooltip: false,
  },
}
