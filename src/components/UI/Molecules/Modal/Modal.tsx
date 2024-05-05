import React, { type PropsWithChildren } from 'react'
import * as styles from './Modal.css'

type Props = PropsWithChildren<{
  /** buttonのidを設定する */
  ariaControls: string
  /** 開閉状態 */
  isOpen: boolean
}>

export const Modal: React.FC<Props> = ({ ariaControls, isOpen, children }) => (
  <div
    className={`${styles.modal} ${isOpen ? styles.isOpen : styles.isHidden}`}
    aria-controls={ariaControls}
  >
    {children}
  </div>
)
