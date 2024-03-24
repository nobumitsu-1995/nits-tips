import React from 'react'
import * as styles from './Footer.css'

export const Footer: React.FC = () => (
  <div className={styles.footer}>
    <nav className={styles.nav}>
      <a href="/about/" className={styles.link}>
        About
      </a>
      <a href="/privacy-policy/" className={styles.link}>
        Privacy Policy
      </a>
      <a href="/about/#contact" className={styles.link}>
        Contact
      </a>
    </nav>
    <small className={styles.copywrite}>© 2024. nobumitsu-1995</small>
  </div>
)
