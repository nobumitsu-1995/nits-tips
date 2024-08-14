import { delay } from '@/lib/helpers/delay'

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

  if (response.status === 204) {
    return {
      ok: true,
      data: {} as U,
    }
  }

  const data = await response.json()

  return {
    ok: true,
    data,
  }
}

const RETRY_INTERVAL = 10000

/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
export const fetchWithRetry = async <T, U>(
  args: Arguments<T>,
): Promise<Response<U>> => {
  while (true) {
    try {
      const response = await customFetch<T, U>(args)

      if (!response.ok) {
        console.error(`Fetch failed with status: ${response.error}`)
      }

      return response
    } catch (error) {
      console.error(`Fetch error: ${error}`)
    }

    console.log('Retrying in 10 seconds...')
    await delay(RETRY_INTERVAL)
  }
}
/* eslint-enable no-constant-condition */
/* eslint-enable no-await-in-loop */
/* eslint-enable no-console */
