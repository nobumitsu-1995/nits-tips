import { useCallback, useEffect, useState } from 'react'
import { getStorage, setStorage } from '@/lib/helpers/storage'

type Args<T extends object> = T

type UseSearchParamsReturnType<T extends object> = {
  searchParams: T | null
  setSearchParamsToStorage: (params: Args<T>) => void
}

const STORAGE_KEY = 'searchParams'

export const useSearchParams = <
  T extends object,
>(): UseSearchParamsReturnType<T> => {
  const [searchParams, setSearchParams] = useState<T | null>(null)

  useEffect(() => {
    const storageParams = getStorage<T>(STORAGE_KEY)
    setSearchParams(storageParams)
  }, [])

  const setSearchParamsToStorage = useCallback(
    (params: Args<T>) => {
      setStorage({ key: STORAGE_KEY, params })
    },
    [setStorage],
  )

  return {
    searchParams,
    setSearchParamsToStorage,
  }
}
