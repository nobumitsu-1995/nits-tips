import React from 'react'
import { Icon, type IconType } from '@Atoms/Icon'
import * as styles from './DropDown.css'

type Props = {
  name: string
  label: string
  items: {
    value: string
    label: string
  }[]
  selectedItem: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  iconType: IconType
}

export const DropDown: React.FC<Props> = ({
  name,
  label,
  items,
  selectedItem,
  onChange,
  iconType,
}) => (
  <label htmlFor={name} className={styles.dropDown}>
    <span className={styles.label}>
      <Icon type={iconType} size={24} />
      {label}
    </span>
    <select
      name={name}
      value={selectedItem}
      onChange={onChange}
      className={styles.select}
    >
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  </label>
)
