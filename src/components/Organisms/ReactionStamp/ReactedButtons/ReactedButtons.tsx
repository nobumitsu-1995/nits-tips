import React from 'react'
import type { Stamp, StampId } from '../model'
import { ReactedButton } from './ReactedButton'
import * as styles from './ReactedButtons.css'

type Props = {
  reactedStamps: {
    stamp: Stamp
    count: number
    isChecked: boolean
  }[]
  onClick: (stampId: StampId) => void
}

export const ReactedButtons: React.FC<Props> = ({ reactedStamps, onClick }) => (
  <ul className={styles.reactedButtons}>
    {reactedStamps.map(({ stamp, count, isChecked }) => (
      <li key={stamp.stampId}>
        <ReactedButton
          stamp={stamp}
          count={count}
          isChecked={isChecked}
          onClick={() => onClick(stamp.stampId)}
        />
      </li>
    ))}
  </ul>
)
