import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

type ComponentType = typeof Select
type Story = StoryObj<ComponentType>

export default {
  component: Select,
  args: {
    name: 'hoge',
    value: 'hoge',
    label: '選択肢１',
  },
  decorators: [
    () => {
      const [value, setValue] = useState<string[]>([])
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: _val } = e.target
        const index = value.indexOf(_val)

        if (index > -1) {
          const newValue = [...value]
          newValue.splice(index, 1)
          setValue(newValue)
        } else {
          setValue((prev) => [...prev, _val])
        }
      }

      return (
        <div>
          <Select
            name="hoge"
            value="1"
            label="選択肢１"
            isChecked={value.includes('1')}
            onChange={handleChange}
          />
          <Select
            name="hoge"
            value="2"
            label="選択肢２"
            isChecked={value.includes('2')}
            onChange={handleChange}
          />
          <Select
            name="hoge"
            value="3"
            label="選択肢３"
            isChecked={value.includes('3')}
            onChange={handleChange}
          />
          <p>{value.join(',')}</p>
        </div>
      )
    },
  ],
} as Meta<ComponentType>

export const Default: Story = {}
