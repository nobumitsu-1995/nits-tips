import React from 'react'
import * as styles from './Heading.css'

type Props = {
  /** タイトル */
  text: string | React.ReactNode
  /** id */
  id?: string
}

export const Heading: React.FC<Props> = ({ text, id }) => (
  <h2 id={id} className={styles.heading}>
    {text}
  </h2>
)
