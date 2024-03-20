import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Article } from './Article'
import { tagData } from '@/testUtils/fixtures/tagData'
import { articleContent } from '@/testUtils/fixtures/articleConetnts'

type ComponentType = typeof Article
type Story = StoryObj<ComponentType>

export default {
  component: Article,
  args: {
    author: {
      name: '@nobumitsu-1995',
      src: 'https://avatars.githubusercontent.com/u/70850598?v=4',
      href: 'https://github.com/nobumitsu-1995',
    },
    title:
      'タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル',
    tagData: [...tagData, ...tagData],
    publishedAt: '2023/03/10',
    updatedAt: '2023/03/11',
    content: articleContent,
  },
  decorators: [
    (Component) => (
      <div style={{ width: 792 }}>
        <Component />
      </div>
    ),
  ],
} as Meta<ComponentType>

export const Default: Story = {}
