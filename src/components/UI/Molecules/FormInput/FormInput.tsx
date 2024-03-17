import React, { useId, type ComponentProps } from 'react'
import { INPUT_TYPE, Input } from '@Atoms/Input'
import * as styles from './FormInput.css'

type Props = Omit<ComponentProps<typeof Input>, 'isError'> & {
  label: string
  errorText?: string
}

export const FormInput: React.FC<Props> = ({
  label,
  errorText = '',
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
    <label htmlFor={name} className={styles.formInput}>
      <span className={`${styles.label} ${isDisabled ? styles.disabled : ''}`}>
        {label}
        {isRequired && <span className={styles.required}>*必須</span>}
      </span>
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
      {!!errorText && (
        <span aria-live="polite" id={id} className={styles.error}>
          {errorText}
        </span>
      )}
    </label>
  )
}
