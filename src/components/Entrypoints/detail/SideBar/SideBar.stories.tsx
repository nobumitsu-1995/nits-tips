import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Share } from '@Molecules/Share'
import { Container } from './Container'
import { articleContent } from '@/testUtils/fixtures/articleConetnts'

type ComponentType = typeof Container
type Story = StoryObj<ComponentType>

export default {
  component: Container,
  args: {
    content: articleContent,
    children: <Share description="hoge" url="https://example.com" />,
  },
} as Meta<ComponentType>

export const Default: Story = {}
