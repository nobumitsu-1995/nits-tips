import React from 'react'
import { Presenter } from './Presenter'
import { ToastProvider } from '@/lib/Hooks/useToastProvider/useToastProvider'

export const Container = () => (
  <ToastProvider>
    <Presenter />
  </ToastProvider>
)
