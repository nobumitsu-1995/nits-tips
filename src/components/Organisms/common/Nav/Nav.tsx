import React from 'react'
import * as styles from './Nav.css'

export const Nav: React.FC = () => (
  <div className={styles.container}>
    <nav className={styles.nav}>
      <a href="/search/result?category=frontend" className={styles.link}>
        Frontend
      </a>
      <a href="/search/result?category=backend" className={styles.link}>
        Backend
      </a>
      <a href="/search/result?category=other" className={styles.link}>
        Other
      </a>
    </nav>
  </div>
)
