import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ReactionStamp } from './ReactionStamp'
import { REACTION_STAMPS } from './model'

type ComponentType = typeof ReactionStamp
type Story = StoryObj<ComponentType>

export default {
  component: ReactionStamp,
  args: {
    isLoading: false,
    reactionStampSummary: [
      { stamp: REACTION_STAMPS[0], count: 12, isChecked: false },
      { stamp: REACTION_STAMPS[5], count: 24, isChecked: true },
    ],
    reactedStamp: [1, 2, 3],
    handlePostStamp: fn(),
    handleDeleteStamp: fn(),
    articleId: 'articleId',
  },
  decorators: [
    (Component) => (
      <div style={{ paddingTop: 40 }}>
        <Component />
      </div>
    ),
  ],
} as Meta<ComponentType>

export const Default: Story = {}
