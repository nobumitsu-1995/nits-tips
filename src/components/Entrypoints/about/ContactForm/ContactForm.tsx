import React from 'react'
import { ContactForm as ContactFormContent } from '@/components/Organisms/About/ContactForm'
import { ToastProvider } from '@/lib/Hooks/useToastProvider/useToastProvider'

export const ContactForm: React.FC = () => (
  <ToastProvider>
    <ContactFormContent />
  </ToastProvider>
)
