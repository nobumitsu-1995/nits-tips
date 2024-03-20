import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import { tagData } from '@/testUtils/fixtures/tagData'

type ComponentType = typeof Header
type Story = StoryObj<ComponentType>

export default {
  component: Header,
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
  },
} as Meta<ComponentType>

export const Default: Story = {}
