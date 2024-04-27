type SetStorageArgs<T extends object> = {
  params: T
  key: string
}

export const setStorage = <T extends object>({
  params,
  key,
}: SetStorageArgs<T>) => {
  const value = JSON.stringify(params)
  localStorage.setItem(key, value)
}

export const getStorage = <T extends object>(key: string): T => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}

export const deleteStorage = (key: string) => {
  localStorage.removeItem(key)
}
