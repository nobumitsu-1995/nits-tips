import { customFetch } from './fetch'

type Response = {
  hoge: string
}

export const getReactionStamps = async () => {
  const response = await customFetch<undefined, Response>({
    method: 'GET',
    url: '/reactionStamps',
  })

  if (!response.ok) {
    throw new Error(response.error)
  }

  return response.data
}
