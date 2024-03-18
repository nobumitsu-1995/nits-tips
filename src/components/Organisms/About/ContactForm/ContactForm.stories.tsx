import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { ContactForm } from './ContactForm'

type ComponentType = typeof ContactForm
type Story = StoryObj<ComponentType>

export default {
  component: ContactForm,
} as Meta<ComponentType>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const name = canvas.getByRole('textbox', { name: '名前(Name)*必須' })
    const email = canvas.getByRole('textbox', {
      name: 'メールアドレス(e-mail)*必須',
    })
    const message = canvas.getByRole('textbox', {
      name: 'お問い合わせ内容(message)*必須',
    })

    await userEvent.type(name, 'hoge')
    await userEvent.type(email, 'example')
    await userEvent.type(message, 'hoge')
  },
}
