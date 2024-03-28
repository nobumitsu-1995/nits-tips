import React from 'react'
import { Presenter } from './Presenter'
import { ToastProvider } from '@/lib/Hooks/useToastProvider/useToastProvider'

type Props = {
  /** 共有するURL */
  url: string
  /** ツイートに反映する文言 */
  description: string
}

export const Container: React.FC<Props> = ({ url, description }) => (
  <ToastProvider>
    <Presenter url={url} description={description} />
  </ToastProvider>
)
