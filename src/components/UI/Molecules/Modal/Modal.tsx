import React, { type PropsWithChildren } from 'react'
import { Card } from '@Atoms/Card'
import * as styles from './Modal.css'

type Props = PropsWithChildren<{
  /** buttonのidを設定する */
  ariaControls: string
  /** 開閉状態 */
  isOpen: boolean
  /** Cardのpadding */
  padding?: string
}>

export const Modal: React.FC<Props> = ({
  ariaControls,
  isOpen,
  padding,
  children,
}) => (
  <div
    className={`${styles.modal} ${isOpen ? styles.isOpen : styles.isHidden}`}
    aria-controls={ariaControls}
    aria-expanded={isOpen}
  >
    <Card padding={padding}>{children}</Card>
  </div>
)
