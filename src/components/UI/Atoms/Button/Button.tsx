import React, { type PropsWithChildren } from 'react'
import * as styles from './Button.css'
import { BUTTON_TYPE, type ButtonType } from './model'

type Props = PropsWithChildren<{
  /** trueの時、loading中 */
  isLoading: boolean
  /** trueの時、無効化される */
  isDisabled: boolean
  /** click時に発火するインタラクション */
  onClick: React.MouseEventHandler<HTMLButtonElement>
  /** buttonのタイプ */
  buttonType?: ButtonType
}>

export const Button: React.FC<Props> = ({
  children,
  isLoading,
  isDisabled,
  onClick,
  buttonType = BUTTON_TYPE.button,
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={buttonType}
    onClick={onClick}
    disabled={isDisabled || isLoading}
    className={`
      ${styles.button}
      ${isDisabled ? styles.disabled : ''}
      ${isLoading ? styles.loading : ''}
    `}
    aria-busy={isLoading}
    aria-hidden={isLoading}
  >
    {!isLoading && children}
  </button>
)
