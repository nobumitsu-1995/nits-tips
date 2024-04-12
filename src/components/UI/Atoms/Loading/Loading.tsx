import React, { type CSSProperties } from 'react'
import * as styles from './Loading.css'

export const Loading: React.FC = () => (
  <span aria-busy="true" className={styles.loading}>
    {[...Array(10)].map((_, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <span
        key={i}
        className={styles.parts}
        style={{ '--index': `${i}` } as CSSProperties}
      />
    ))}
  </span>
)
