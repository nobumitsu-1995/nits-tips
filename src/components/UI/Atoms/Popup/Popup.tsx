import React from 'react'
import * as styles from './Popup.css'

type Props = {
  isOpen: boolean
  children: React.ReactNode
}

export const Popup: React.FC<Props> = ({ isOpen, children }) => (
  <div className={`${styles.popup} ${isOpen ? styles.visible : ''}`}>
    {children}
  </div>
)
