import { createContext, useContext } from 'react'

export const createCustomComtext = <T>(args: T) => {
  const ctx = createContext<T>(args)

  const useCustomContext = () => {
    const context = useContext(ctx)
    return context
  }

  return [ctx.Provider, useCustomContext] as const
}
