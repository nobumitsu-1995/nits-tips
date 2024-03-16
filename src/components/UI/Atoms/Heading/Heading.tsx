import React from 'react'
import * as styles from './Heading.css'

type Props = {
  /** タイトル */
  text: string
}

export const Heading: React.FC<Props> = ({ text }) => (
  <h2 className={styles.heading}>{text}</h2>
)
