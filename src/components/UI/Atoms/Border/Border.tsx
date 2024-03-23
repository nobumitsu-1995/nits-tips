import React from 'react'
import * as styles from './Border.css'

type Props = {
  /** margin */
  margin?: string
}

export const Border: React.FC<Props> = ({ margin = '36px 0' }) => (
  <hr className={styles.border} style={{ margin }} />
)
