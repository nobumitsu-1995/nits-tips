import React, { type PropsWithChildren } from 'react'
import { Card } from '@Atoms/Card'
import * as styles from './Modal.css'

type Props = PropsWithChildren<{
  /** 開閉状態 */
  isOpen: boolean
  /** Cardのpadding */
  padding?: string
}>

export const Modal: React.FC<Props> = ({ isOpen, padding, children }) => (
  <div
    className={`${styles.modal} ${isOpen ? styles.isOpen : styles.isHidden}`}
  >
    <Card padding={padding}>{children}</Card>
  </div>
)
