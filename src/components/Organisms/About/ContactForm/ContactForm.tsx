import React, { useId, useState } from 'react'
import * as styles from './ContactForm.css'
import { Heading } from '@/components/UI/Atoms/Heading'
import { FormInput } from '@/components/UI/Molecules/FormInput'
import { BUTTON_TYPE, Button } from '@/components/UI/Atoms/Button'

export const ContactForm: React.FC = () => {
  const a11yId = useId()
  const [isLoading, setIsLoading] = useState(false)
  const [mailData, setMailData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMailData({
      ...mailData,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    setIsLoading(true)
    /** TODO: 一旦ダミーの実装 */
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
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
            errorText=""
          />
          <FormInput
            name="email"
            type="email"
            value={mailData.email}
            onChange={handleChange}
            label="メールアドレス(e-mail)"
            isDisabled={isLoading}
            errorText=""
          />
          <FormInput
            name="message"
            value={mailData.message}
            onChange={handleChange}
            label="お問い合わせ内容(message)"
            isTextArea
            isDisabled={isLoading}
            errorText=""
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
