import { FormError, NAME_TYPE } from './FormError'
import type { Args } from './postContactForm'

const regex =
  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/

export const validateArgs = ({ name, email, content }: Args) => {
  if (name === '')
    throw new FormError('名前(name)は必須項目です。', NAME_TYPE.name)
  if (email === '')
    throw new FormError(
      'メールアドレス(e-mail)は必須項目です。',
      NAME_TYPE.email,
    )
  if (!regex.test(email))
    throw new FormError(
      'メールアドレス(e-mail)の入力値が不正です。',
      NAME_TYPE.email,
    )
  if (content === '')
    throw new FormError(
      'お問い合わせ内容(content)は必須項目です。',
      NAME_TYPE.content,
    )
}
