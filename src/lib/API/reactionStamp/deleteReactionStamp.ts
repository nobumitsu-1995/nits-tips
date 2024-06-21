import { customFetch } from './fetch'

type Response = {
  hoge: string
}

export const deleteReactionStamp = async (id: number) => {
  const response = await customFetch<undefined, Response>({
    method: 'DELETE',
    url: `/reactionStamps/${id}`,
  })

  if (!response.ok) {
    throw new Error(response.error)
  }

  return response.data
}
