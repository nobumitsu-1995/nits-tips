import type { Meta, StoryObj } from '@storybook/react'
import { TagList } from './TagList'
import { tagData } from '@/testUtils/fixtures/tagData'

type ComponentType = typeof TagList
type Story = StoryObj<ComponentType>

export default {
  component: TagList,
  args: {
    tagData,
  },
} as Meta<ComponentType>

export const Default: Story = {}

export const ManyData: Story = {
  args: {
    tagData: [...tagData, ...tagData, ...tagData, ...tagData],
  },
}

export const Wrap: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
