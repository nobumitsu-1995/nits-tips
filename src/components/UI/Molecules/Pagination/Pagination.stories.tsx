import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

type ComponentType = typeof Pagination
type Story = StoryObj<ComponentType>

const Component = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      <p>現在のページ：{currentPage}</p>
      <Pagination
        totalPage={5}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default {
  component: Pagination,
  args: {
    totalPage: 5,
    currentPage: 3,
  },
  decorators: [() => <Component />],
} as Meta<ComponentType>

export const Default: Story = {}
