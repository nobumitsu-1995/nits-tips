import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Article } from './Article'
import { tagData } from '@/testUtils/fixtures/tagData'
import { articleContent } from '@/testUtils/fixtures/articleConetnts'
import { githubAccount } from '@/testUtils/fixtures/githubAccount'

type ComponentType = typeof Article
type Story = StoryObj<ComponentType>

export default {
  component: Article,
  args: {
    author: githubAccount,
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
