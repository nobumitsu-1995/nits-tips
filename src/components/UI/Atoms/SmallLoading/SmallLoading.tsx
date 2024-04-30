import React from 'react'
import * as styles from './SmallLoading.css'

export const SmallLoading: React.FC = () => (
  <div aria-busy="true" className={styles.smallLoading} />
)
