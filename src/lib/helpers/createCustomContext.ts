import { createContext, useContext } from 'react'

export const createCustomComtext = <T>() => {
  // eslint-disable-next-line symbol-description
  const identifier = Symbol()
  const ctx = createContext<T | typeof identifier>(identifier)

  const useCustomContext = () => {
    const context = useContext(ctx)

    if (context === identifier) {
      throw new Error()
    }

    return context
  }

  return [ctx.Provider, useCustomContext] as const
}
