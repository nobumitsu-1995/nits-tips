import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import { ICON_TYPE_ARRAY } from './model'

type ComponentType = typeof Icon
type Story = StoryObj<ComponentType>

const Component: React.FC = () => (
  <ul
    style={{
      width: '500px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '12px',
    }}
  >
    {ICON_TYPE_ARRAY.map((icon) => (
      <li
        key={icon}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid',
          padding: '16px',
        }}
      >
        <div>
          <Icon type={icon} />
          <Icon type={icon} size={20} />
          <Icon type={icon} size={36} />
        </div>
        <p style={{ fontSize: '12px', fontWeight: 'bold' }}>{icon}</p>
      </li>
    ))}
  </ul>
)

export default {
  component: Icon,
} as Meta<ComponentType>

export const Index: Story = {
  decorators: [() => <Component />],
}

export const Default: Story = {
  args: {
    type: 'sell',
    size: 40,
    color: 'blue',
  },
}
