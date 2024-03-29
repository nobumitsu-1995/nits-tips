import { validateArgs } from './validation'

export type Args = {
  name: string
  email: string
  content: string
}

type Response = {
  success: boolean
}

export const postContactForm = async ({ ...args }: Args): Promise<Response> => {
  validateArgs(args)
  const result = await fetch(
    `${import.meta.env.PUBLIC_API_GATEWAY_ENDPOINT}/sendEmailAPI`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    },
  )

  if (!result.ok) {
    throw new Error('メール送信に失敗しました。')
  }

  return {
    success: true,
  }
}
