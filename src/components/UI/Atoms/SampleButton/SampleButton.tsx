import React, { useState } from 'react'
import * as styles from './SampleButton.css'

type Props = {
  /** 名前 */
  name: string
}

export const SampleButton: React.FC<Props> = ({ name }) => {
  const [state, setState] = useState('')
  const handleClick = () => {
    setState('click')
  }

  return (
    <div className={styles.sampleButton}>
      <p>{name}</p>
      <p>{state}</p>
      <button type="button" onClick={handleClick}>
        button
      </button>
    </div>
  )
}
