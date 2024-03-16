import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

type ComponentType = typeof Card
type Story = StoryObj<ComponentType>

export default {
  component: Card,
} as Meta<ComponentType>

export const Primary: Story = {
  args: {
    children: <p>card</p>,
  },
}
