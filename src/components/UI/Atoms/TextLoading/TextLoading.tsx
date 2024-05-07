import React from 'react'
import * as styles from './TextLoading.css'

type Props = {
  /** 高さ */
  height: string
}

export const TextLoading: React.FC<Props> = ({ height }) => (
  <div className={styles.textLoading} style={{ height }} />
)
