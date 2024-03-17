import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { ToTopButton } from './ToTopButton'
import { delay } from '@/lib/helpers/delay'

type ComponentType = typeof ToTopButton
type Story = StoryObj<ComponentType>

export default {
  component: ToTopButton,
  decorators: [
    (Component) => (
      <div
        style={{
          height: 2000,
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(224, 110, 170, 1) 5% 10%, rgba(255, 255, 255, 1) 10% 15%, rgba(85, 85, 85, 1) 15% 20%, rgba(255, 255, 255, 1) 20% 25%)',
        }}
      >
        <Component />
      </div>
    ),
  ],
} as Meta<ComponentType>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await delay(10)
    global.scroll({
      top: 200,
    })
    expect(
      canvas.queryByRole('button', { name: 'ページトップへスクロール' }),
    ).not.toBeInTheDocument()

    await delay(10)
    global.scroll({
      top: 201,
    })
    waitFor(() =>
      expect(
        canvas.queryByRole('button', { name: 'ページトップへスクロール' }),
      ).toBeInTheDocument(),
    )
  },
}
