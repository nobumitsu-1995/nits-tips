import React, { useId } from 'react'
import { Heading } from '@Atoms/Heading'
import { FormInput } from '@Molecules/FormInput'
import { BUTTON_TYPE, Button } from '@Atoms/Button'
import { useContactForm } from '@/lib/Hooks/useContactForm'
import * as styles from './ContactForm.css'

export const ContactForm: React.FC = () => {
  const a11yId = useId()
  const { postData, handleChange, isLoading, error, mailData } =
    useContactForm()
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    postData()
  }

  return (
    <section>
      <Heading text="お問い合わせ" id={a11yId} />
      <form aria-labelledby={a11yId} className={styles.form}>
        <div className={styles.input}>
          <FormInput
            name="name"
            value={mailData.name}
            onChange={handleChange}
            label="名前(Name)"
            isDisabled={isLoading}
            errorText={error.name}
          />
          <FormInput
            name="email"
            type="email"
            value={mailData.email}
            onChange={handleChange}
            label="メールアドレス(e-mail)"
            isDisabled={isLoading}
            errorText={error.email}
          />
          <FormInput
            name="content"
            value={mailData.content}
            onChange={handleChange}
            label="お問い合わせ内容(message)"
            isTextArea
            isDisabled={isLoading}
            errorText={error.content}
          />
        </div>

        <div className={styles.button}>
          <Button
            buttonType={BUTTON_TYPE.submit}
            isLoading={isLoading}
            isDisabled={false}
            onClick={handleSubmit}
          >
            送信する(submit)
          </Button>
        </div>
      </form>
    </section>
  )
}
