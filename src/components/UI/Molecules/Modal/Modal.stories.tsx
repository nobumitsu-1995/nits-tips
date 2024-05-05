import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

type ComponentType = typeof Modal
type Story = StoryObj<ComponentType>

export default {
  component: Modal,
  decorators: [
    () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
            button
          </button>
          <Modal isOpen={isOpen}>
            <p>component</p>
          </Modal>
        </>
      )
    },
  ],
} as Meta<ComponentType>

export const Default: Story = {}
