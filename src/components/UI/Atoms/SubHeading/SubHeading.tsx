import React from 'react'
import * as styles from './SubHeading.css'

type Props = {
  /** タイトル */
  text: string
  /** a11yのid指定用 */
  id?: string
}

export const SubHeading: React.FC<Props> = ({ text, id }) => (
  <h2 id={id} className={styles.subHeading}>
    {text}
  </h2>
)
