import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import { tagData } from '@/testUtils/fixtures/tagData'
import { githubAccount } from '@/testUtils/fixtures/githubAccount'

type ComponentType = typeof Header
type Story = StoryObj<ComponentType>

export default {
  component: Header,
  args: {
    author: githubAccount,
    title:
      'タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル',
    tagData: [...tagData, ...tagData],
    publishedAt: '2023/03/10',
    updatedAt: '2023/03/11',
  },
} as Meta<ComponentType>

export const Default: Story = {}
