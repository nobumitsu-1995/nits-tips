import React from 'react'
import * as styles from './SubHeading.css'

type Props = {
  /** タイトル */
  text: string
}

export const SubHeading: React.FC<Props> = ({ text }) => (
  <h2 className={styles.subHeading}>{text}</h2>
)
