import React, { useId, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

type ComponentType = typeof Modal
type Story = StoryObj<ComponentType>

export default {
  component: Modal,
  decorators: [
    () => {
      const buttonId = useId()
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button
            aria-controls={buttonId}
            aria-expanded={isOpen}
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            button
          </button>
          <Modal id={buttonId} isOpen={isOpen}>
            <p>component</p>
          </Modal>
        </>
      )
    },
  ],
} as Meta<ComponentType>

export const Default: Story = {}
