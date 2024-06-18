import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ReactionStamp } from './ReactionStamp'

type ComponentType = typeof ReactionStamp
type Story = StoryObj<ComponentType>

export default {
  component: ReactionStamp,
  args: {},
  decorators: [
    (Component) => (
      <div style={{ paddingTop: 40 }}>
        <Component />
      </div>
    ),
  ],
} as Meta<ComponentType>

export const Default: Story = {}
