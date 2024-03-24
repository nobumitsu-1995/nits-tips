import React from 'react'
import * as styles from './TextBox.css'

type Props = {
  /** inputに適用されるname属性 */
  name: string
  /** inputのvalue */
  value: string
  /** inputのvalueが変更された時に発火する関数 */
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
  /** inputに指定されるplaceholder */
  placeholder?: string
  /** trueの時、disabledになる */
  isDisabled?: boolean
  /** trueの時、必須になる */
  isRequired?: boolean
  /** trueの時、エラー表示になる */
  isError?: boolean
  /** error時に紐付けるdescription */
  a11yId?: string
}

export const TextBox: React.FC<Props> = ({
  name,
  value,
  onChange,
  placeholder = '',
  isDisabled = false,
  isRequired = false,
  isError = false,
  a11yId,
}) => (
  <textarea
    id={name}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={isDisabled}
    required={isRequired}
    aria-required={isRequired}
    aria-invalid={isError}
    aria-describedby={a11yId}
    className={`${styles.textBox} ${isError ? styles.isError : ''}`}
    rows={6}
  />
)
