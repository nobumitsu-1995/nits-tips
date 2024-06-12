import React, { useState } from 'react'
import * as styles from './TriggerButton.css'

type Props = {
  /** 名前 */
  name: string
}

export const TriggerButton: React.FC<Props> = ({ name }) => {
  const [state, setState] = useState('')
  const handleClick = () => {
    setState('click')
  }

  return (
    <div className={styles.triggerButton}>
      <p>{name}</p>
      <p>{state}</p>
      <button type="button" onClick={handleClick}>
        button
      </button>
    </div>
  )
}
