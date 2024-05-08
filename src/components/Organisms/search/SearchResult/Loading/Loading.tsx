import React from 'react'
import { CardLoading } from '@Molecules/CardLoading'
import * as styles from './Loading.css'

export const Loading: React.FC = () => (
  <ul className={styles.loading}>
    {Array(window.screen.width >= 1023 ? 3 : 2)
      .fill('')
      .map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={i}>
          <CardLoading />
        </li>
      ))}
  </ul>
)
