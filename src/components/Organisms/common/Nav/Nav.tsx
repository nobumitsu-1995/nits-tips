import React from 'react'
import * as styles from './Nav.css'

export const Nav: React.FC = () => (
  <div className={styles.container}>
    <nav className={styles.nav}>
      <a href="/search/result/?category=daz0qkbj6" className={styles.link}>
        Frontend
      </a>
      <a href="/search/result/?category=zovf4yshp3" className={styles.link}>
        Backend
      </a>
      <a href="/search/result/?category=air585mxa" className={styles.link}>
        Other
      </a>
    </nav>
  </div>
)
