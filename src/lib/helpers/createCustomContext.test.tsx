import React, { type PropsWithChildren } from 'react'
import { screen, render } from '@testing-library/react'
import { createCustomComtext } from './createCustomContext'

type TestContextType = {
  value: string
}
const [TestProvider, useTestContext] = createCustomComtext<TestContextType>()

const wrapper = ({ children }: PropsWithChildren) => {
  const testValue: TestContextType = { value: 'test' }
  return <TestProvider value={testValue}>{children}</TestProvider>
}

const Component = () => {
  const context = useTestContext()
  return <span>{context.value}</span>
}

it('Providerで正しく囲まれている時、値が受け取れる', () => {
  render(<Component />, { wrapper })
  expect(screen.getByText('test')).toBeInTheDocument()
})

it('Providerで正しく囲まれていない時、値が受け取れない', () => {
  expect(() => render(<Component />)).toThrow()
})
