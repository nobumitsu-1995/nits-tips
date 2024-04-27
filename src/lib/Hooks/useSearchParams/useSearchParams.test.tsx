import React from 'react'
import { waitFor } from '@testing-library/react'
import { setup } from '@/testUtils'
import { useSearchParams } from './useSearchParams'
import { setStorage } from '@/lib/helpers/storage'

type Storage = {
  foo: string
  bar: string
}

const KEY = 'searchParams'
const PARAMS = { foo: 'foo', bar: 'bar' }

const Component = () => {
  const { searchParams, setSearchParamsToStorage } = useSearchParams<Storage>()

  return (
    <div>
      {searchParams && (
        <div>
          <p>{searchParams.foo}</p>
          <p>{searchParams.bar}</p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setSearchParamsToStorage({ foo: 'foo2', bar: 'bar2' })}
      >
        button
      </button>
    </div>
  )
}

beforeEach(() => {
  localStorage.clear()
})

test('localStorageに値がセットされていない時、searchParamsはnullになる', async () => {
  expect.assertions(2)
  const { queryByText } = setup(<Component />)

  await waitFor(() => {
    expect(queryByText('foo')).toBeNull()
    expect(queryByText('bar')).toBeNull()
  })
})

test('setSearchParamsToStorageが発火した時、localStorageに反映される', async () => {
  const { user, getByRole } = setup(<Component />)

  await user.click(getByRole('button', { name: 'button' }))
  expect(localStorage.getItem(KEY)).toBe('{"foo":"foo2","bar":"bar2"}')
})

test('localStorageに値がセットされている時、searchParamsの内容に反映される', async () => {
  expect.assertions(2)
  setStorage({ params: PARAMS, key: KEY })
  const { getByText } = setup(<Component />)

  await waitFor(() => {
    expect(getByText('foo')).toBeDefined()
    expect(getByText('bar')).toBeDefined()
  })
})
