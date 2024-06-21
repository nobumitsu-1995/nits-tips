type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
type Arguments<T> = {
  method: Method
  url: `/${string}`
  body?: T
}
type Success<T> = {
  ok: true
  data: T
}
type Error = {
  ok: false
  error: string
}
type Response<T> = Success<T> | Error

export const customFetch = async <T, U>({
  method,
  url,
  body,
}: Arguments<T>): Promise<Response<U>> => {
  const response = await fetch(
    `${import.meta.env.PUBLIC_REACTION_STAMP_API_DOMAIN}${url}`,
    {
      method,
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(body),
    },
  )

  if (!response.ok) {
    return {
      ok: false,
      error: 'Network response was not OK',
    }
  }

  const data = await response.json()

  return {
    ok: true,
    data,
  }
}
