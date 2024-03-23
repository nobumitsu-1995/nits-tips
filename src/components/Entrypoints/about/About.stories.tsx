import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '@/components/UI/Atoms/Card'
import { About } from './About'
import { Border } from '@/components/UI/Atoms/Border'
import { ContactForm } from '@/components/Organisms/About/ContactForm'

const Component: React.FC = () => (
  <main style={{ margin: '0 auto', width: 994 }}>
    <Card padding="48px 28px">
      <About />
      <Border />
      <div style={{ margin: '0 auto', width: 792 }}>
        <ContactForm />
      </div>
    </Card>
  </main>
)

type ComponentType = typeof Component
type Story = StoryObj<ComponentType>

export default {
  component: Component,
} as Meta<ComponentType>

export const Default: Story = {}
