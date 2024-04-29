import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tab'

type ComponentType = typeof Tab
type Story = StoryObj<ComponentType>

export default {
  component: Tab,
  args: {
    contents: [
      {
        id: 'word',
        title: 'ワード検索',
        children: <div>ワード検索</div>,
      },
      {
        id: 'filter',
        title: '絞り込み検索',
        children: <div>絞り込み検索</div>,
      },
    ],
  },
} as Meta<ComponentType>

export const Default: Story = {}
