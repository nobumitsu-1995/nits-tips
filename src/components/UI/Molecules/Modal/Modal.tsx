import React, { type PropsWithChildren } from 'react'
import * as styles from './Modal.css'

type Props = PropsWithChildren<{
  /** buttonのaria-controlsを設定する */
  id: string
  /** 開閉状態 */
  isOpen: boolean
  /** モーダルに追加指定するstyle */
  style?: string
}>

export const Modal: React.FC<Props> = ({ id, isOpen, style, children }) => (
  <div className={`${style} ${!isOpen && styles.isHidden}`} id={id}>
    {children}
  </div>
)
