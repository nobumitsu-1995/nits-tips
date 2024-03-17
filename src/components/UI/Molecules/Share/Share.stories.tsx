import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect, waitFor } from '@storybook/test'
import { Share } from './Share'

type ComponentType = typeof Share
type Story = StoryObj<ComponentType>

export default {
  component: Share,
} as Meta<ComponentType>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const copyLink = canvas.getByRole('button', { name: '記事URLをコピー' })
    await userEvent.click(copyLink)
    waitFor(() => {
      global.navigator.clipboard.readText().then((text) => {
        expect(text).toBe(
          'http://localhost:6006/iframe.html?globals=backgrounds.grid:!false&viewMode=story&id=components-ui-molecules-share--default&args=',
        )
      })
    })
  },
}
