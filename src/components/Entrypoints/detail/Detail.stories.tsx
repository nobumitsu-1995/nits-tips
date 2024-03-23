import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { articleContent } from '@/testUtils/fixtures/articleConetnts'
import { Main } from './Main'
import { SideBar } from './SideBar'
import { blog, blogs } from '@/testUtils/fixtures/blogsData'
import { ToTopButton } from '@/components/UI/Molecules/ToTopButton'
import { githubAccount } from '@/testUtils/fixtures/githubAccount'

const Component: React.FC = () => (
  <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
    <div style={{ width: 792 }}>
      <Main
        blog={blog()}
        relatedBlogs={blogs(4)}
        githubAccount={githubAccount}
      />
    </div>
    <SideBar content={articleContent} />
    <ToTopButton />
  </div>
)

type ComponentType = typeof Component
type Story = StoryObj<ComponentType>

export default {
  component: Component,
} as Meta<ComponentType>

export const Default: Story = {}
