import type { Meta, StoryObj } from '@storybook/react'
import { ArticleIndex } from './ArticleIndex'

type ComponentType = typeof ArticleIndex
type Story = StoryObj<ComponentType>

export default {
  component: ArticleIndex,
  args: {
    articleIndex: [
      {
        title: 'タイトル1',
        href: '/1',
      },
      {
        title: 'タイトル2',
        href: '/2',
      },
      {
        title: 'タイトル3',
        href: '/3',
        childTitle: [
          {
            title: 'タイトル3-1',
            href: '/3-1',
          },
          {
            title:
              'タイトル3-2@ojsfplkjvplsnfvpnsepfkvnpksdfnvpksenfpvnjspefkvnpskdfnvpksdnfpvnds',
            href: '/3-2',
          },
          {
            title:
              'タイトル3-3タイトル3-3タイトル3-3タイトル3-3タイトル3-3タイトル3-3タイトル3-3タイトル3-3',
            href: '/3-3',
          },
        ],
      },
      {
        title: 'タイトル4',
        href: '/4',
        childTitle: [
          {
            title: 'タイトル4-1',
            href: '/4-1',
          },
          {
            title: 'タイトル4-2',
            href: '/4-2',
          },
          {
            title: 'タイトル4-3',
            href: '/4-3',
          },
        ],
      },
    ],
  },
} as Meta<ComponentType>

export const Default: Story = {}
