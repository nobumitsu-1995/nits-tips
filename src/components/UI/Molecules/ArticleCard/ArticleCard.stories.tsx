import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCard } from './ArticleCard'
import { createArticle } from '@/testUtils/fixtures/articleData'

type ComponentType = typeof ArticleCard
type Story = StoryObj<ComponentType>

export default {
  component: ArticleCard,
  args: createArticle({}),
  decorators: [
    (Component) => (
      <div style={{ width: 362 }}>
        <Component />
      </div>
    ),
  ],
} as Meta<ComponentType>

export const Default: Story = {}

export const NotEdited: Story = {
  args: createArticle({
    updatedAt: '',
  }),
}

export const Slash: Story = {
  args: createArticle({
    title: '/'.repeat(200),
    description: '/'.repeat(200),
  }),
}

export const Number: Story = {
  args: createArticle({
    title: '1234'.repeat(50),
    description: '1234'.repeat(50),
  }),
}
