import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleSection } from './ArticleSection'
import { createArtilceArray } from '@/testUtils/fixtures/articleData'

type ComponentType = typeof ArticleSection
type Story = StoryObj<ComponentType>

type Props = {
  title: string
  totalPage: number
}

const Component = ({ title, totalPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <ArticleSection
      title={title}
      articles={createArtilceArray().slice(0, 6)}
      totalPage={totalPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  )
}

export default {
  component: ArticleSection,
} as Meta<ComponentType>

export const NewestArticles: Story = {
  decorators: [() => <Component title="新着記事" totalPage={5} />],
}

export const PopularArticles: Story = {
  decorators: [() => <Component title="よく読まれている記事" totalPage={1} />],
}
