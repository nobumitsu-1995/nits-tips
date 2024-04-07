import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'

type ComponentType = typeof Radio
type Story = StoryObj<ComponentType>

export default {
  component: Radio,
  args: {
    name: 'hoge',
    value: 'hoge',
    label: '選択肢１',
  },
  decorators: [
    () => {
      const [value, setValue] = useState('1')

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
      }

      return (
        <div>
          <Radio
            name="hoge"
            value="1"
            label="選択肢１"
            isChecked={value === '1'}
            onChange={handleChange}
          />
          <Radio
            name="hoge"
            value="2"
            label="選択肢２"
            isChecked={value === '2'}
            onChange={handleChange}
          />
          <Radio
            name="hoge"
            value="3"
            label="選択肢３"
            isChecked={value === '3'}
            onChange={handleChange}
          />
          <p>{value}</p>
        </div>
      )
    },
  ],
} as Meta<ComponentType>

export const Default: Story = {}
