import { useState } from 'react'
import { TOAST_TYPE, useToastProvider } from '../useToastProvider'
import { FormError, postContactForm } from '@/lib/API/postContactForm'

type MailData = {
  name: string
  email: string
  content: string
}

type ErrorData = {
  name?: string
  email?: string
  content?: string
}

type UseContactFormReturnType = {
  isLoading: boolean
  error: ErrorData
  mailData: MailData
  postData: () => Promise<void>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const INITIAL_MAIL_DATA = {
  name: '',
  email: '',
  content: '',
}

const NO_ERROR = {
  name: undefined,
  email: undefined,
  content: undefined,
}

export const useContactForm = (): UseContactFormReturnType => {
  const { showToast } = useToastProvider()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ErrorData>(NO_ERROR)
  const [mailData, setMailData] = useState<MailData>(INITIAL_MAIL_DATA)

  const postData = async () => {
    try {
      setIsLoading(true)
      setError(NO_ERROR)

      await postContactForm(mailData)

      showToast({
        message: 'お問い合わせ内容を送信しました。',
        type: TOAST_TYPE.succeed,
      })
      setMailData(INITIAL_MAIL_DATA)
    } catch (e: unknown) {
      if (e instanceof FormError) {
        setError((prev) => ({
          ...prev,
          [e.name]: e.message,
        }))
      }

      showToast({
        message: 'お問い合わせ内容の送信に失敗しました。',
        type: TOAST_TYPE.failed,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMailData({
      ...mailData,
      [name]: value,
    })
  }

  return {
    isLoading,
    error,
    mailData,
    postData,
    handleChange,
  }
}
