import { customFetch } from './fetch'

export const deleteReactionStamp = async (id: number) => {
  const response = await customFetch<undefined, undefined>({
    method: 'DELETE',
    url: `/reactionStamps/${id}`,
  })

  if (!response.ok) {
    throw new Error(response.error)
  }

  return {
    ok: response.ok,
    data: 'success',
  }
}
