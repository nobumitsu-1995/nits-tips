import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'
import { articleContent } from '@/testUtils/fixtures/articleConetnts'
import { Share } from '@/components/UI/Molecules/Share'

type ComponentType = typeof Container
type Story = StoryObj<ComponentType>

export default {
  component: Container,
  args: {
    content: articleContent,
    children: <Share description="hoge" />,
  },
} as Meta<ComponentType>

export const Default: Story = {}
