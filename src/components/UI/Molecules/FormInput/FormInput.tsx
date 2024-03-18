import React, { useId, type ComponentProps } from 'react'
import { INPUT_TYPE, Input } from '@Atoms/Input'
import { TextBox } from '@Atoms/TextBox'
import * as styles from './FormInput.css'

type Props = Omit<ComponentProps<typeof Input>, 'isError' | 'onChange'> & {
  label: string
  errorText?: string
  isTextArea?: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export const FormInput: React.FC<Props> = ({
  label,
  errorText = '',
  isTextArea = false,
  name,
  value,
  onChange,
  placeholder = '',
  type = INPUT_TYPE.text,
  isDisabled = false,
  isRequired = true,
}) => {
  const id = useId()

  return (
    <label
      htmlFor={name}
      className={`${styles.formInput} ${isTextArea ? styles.isTextArea : ''}`}
    >
      <span
        className={`${styles.label} ${isDisabled ? styles.disabled : ''} ${isTextArea ? styles.isTextAreaLabel : ''}`}
      >
        {label}
        {isRequired && <span className={styles.required}>*必須</span>}
      </span>
      {isTextArea ? (
        <TextBox
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          isDisabled={isDisabled}
          isRequired={isRequired}
          isError={!!errorText}
          a11yId={errorText ? id : undefined}
        />
      ) : (
        <Input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          isDisabled={isDisabled}
          isRequired={isRequired}
          isError={!!errorText}
          a11yId={errorText ? id : undefined}
        />
      )}
      {!!errorText && (
        <span aria-live="polite" id={id} className={styles.error}>
          {errorText}
        </span>
      )}
    </label>
  )
}
