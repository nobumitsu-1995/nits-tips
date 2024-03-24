import React from 'react'
import * as styles from './Header.css'

export const Header: React.FC = () => (
  <div className={styles.header}>
    <a href="/" className={styles.main}>
      NITS TIPS
    </a>
    <p className={styles.sub}>~微塵集合知巧~</p>
  </div>
)
