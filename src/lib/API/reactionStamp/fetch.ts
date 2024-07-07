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
  const fetchUrl = `${import.meta.env.PUBLIC_REACTION_STAMP_API_DOMAIN || 'http://localhost:8080'}${url}`
  const response = await fetch(fetchUrl, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Cookie: 'sessionId',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body),
  })

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
