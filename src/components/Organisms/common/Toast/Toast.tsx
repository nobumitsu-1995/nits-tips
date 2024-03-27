import React, { useEffect, useState } from 'react'
import * as styles from './Toast.css'
import { TOAST_TYPE, type ToastType } from '@/lib/Hooks/useToastProvider'

type Props = {
  message: string
  type: ToastType
  hideToast: () => void
}

export const Toast: React.FC<Props> = ({ message, type, hideToast }) => {
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsMount(true)
    }, 50)

    setTimeout(() => {
      hideToast()
    }, 2000)
  }, [])

  return (
    <div
      role="alert"
      className={`${styles.toast} ${type === TOAST_TYPE.succeed ? styles.succeed : styles.failed} ${isMount ? styles.mounted : styles.unmounted}`}
    >
      {message}
    </div>
  )
}
