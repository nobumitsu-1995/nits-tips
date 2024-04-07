import React from 'react'
import * as styles from './Select.css'

type Props = {
  /** 選択肢のname属性 */
  name: string
  /** 選択時のvalue属性 */
  value: string
  /** 選択肢に表示される文言 */
  label: string
  /** trueの時defaultで選択状態になる。 */
  isChecked?: boolean
  /** 選択時に発火するインタラクション */
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Select: React.FC<Props> = ({
  name,
  value,
  label,
  isChecked = false,
  onChange,
}) => (
  <label
    htmlFor={`checkbox-${value}`}
    className={`${styles.label} ${isChecked && styles.checked}`}
  >
    <input
      id={`checkbox-${value}`}
      type="checkbox"
      name={name}
      value={value}
      checked={isChecked}
      onChange={onChange}
      className={styles.select}
    />
    {label}
  </label>
)
