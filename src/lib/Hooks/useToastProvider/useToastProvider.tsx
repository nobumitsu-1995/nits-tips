import React, { useMemo } from 'react'
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react'
import { Toast } from '@Organisms/common/Toast'

export type ToastType = 'succeed' | 'failed'
export const TOAST_TYPE: MappedConst<ToastType> = {
  succeed: 'succeed',
  failed: 'failed',
}

type ToastStatus = {
  message: string
  type: ToastType
  isShow: boolean
}

type Props = PropsWithChildren<{
  message?: string
  type?: ToastType
}>

const initialState = {
  isShow: false,
  showToast: (data: Omit<ToastStatus, 'isShow'>) => {
    // eslint-disable-next-line no-console
    console.log(data)
  },
  hideToast: () => {},
}
const ToastContext = createContext(initialState)
export const useToastProvider = () => useContext(ToastContext)

export const ToastProvider: React.FC<Props> = ({
  message = '',
  type = TOAST_TYPE.succeed,
  children,
}) => {
  const [toastStatus, setToastStatus] = useState<ToastStatus>({
    message,
    type,
    isShow: false,
  })
  const showToast = (data: Omit<ToastStatus, 'isShow'>) =>
    setToastStatus({
      message: data.message,
      type: data.type,
      isShow: true,
    })
  const hideToast = () =>
    setToastStatus((prev) => ({
      ...prev,
      isShow: false,
    }))

  return (
    <ToastContext.Provider
      value={useMemo(
        () => ({
          isShow: toastStatus.isShow,
          showToast,
          hideToast,
        }),
        [toastStatus.isShow],
      )}
    >
      {children}
      {toastStatus.isShow && (
        <Toast
          message={toastStatus.message}
          type={toastStatus.type}
          hideToast={hideToast}
        />
      )}
    </ToastContext.Provider>
  )
}
