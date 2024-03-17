import React from 'react'
import * as styles from './Input.css'
import { INPUT_TYPE, type InputType } from './model'

type Props = {
  /** inputに適用されるname属性 */
  name: string
  /** inputのvalue */
  value: string
  /** inputのvalueが変更された時に発火する関数 */
  onChange: React.ChangeEventHandler<HTMLInputElement>
  /** inputに指定されるplaceholder */
  placeholder?: string
  /** inputに適用されるtype属性 */
  type?: InputType
  /** trueの時、disabledになる */
  isDisabled?: boolean
  /** trueの時、必須になる */
  isRequired?: boolean
  /** trueの時、エラー表示になる */
  isError?: boolean
  /** error時に紐付けるdescription */
  a11yId?: string
}

export const Input: React.FC<Props> = ({
  name,
  value,
  onChange,
  placeholder = '',
  type = INPUT_TYPE.text,
  isDisabled = false,
  isRequired = false,
  isError = false,
  a11yId,
}) => (
  <input
    id={name}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    disabled={isDisabled}
    required={isRequired}
    aria-required={isRequired}
    aria-invalid={isError}
    aria-describedby={a11yId}
    className={`${styles.input} ${isError ? styles.isError : ''}`}
  />
)
