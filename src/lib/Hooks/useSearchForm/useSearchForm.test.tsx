import React from 'react'
import { waitFor } from '@testing-library/react'
import { useSearchForm } from './useSearchForm'
import { createArtilceArray } from '@/testUtils/fixtures/articleData'
import { SEARCH_TYPE } from '@/components/Organisms/search/TextSearch'
import { setup } from '@/testUtils'

const Component = () => {
  const { isLoading, handleSubmitSearch, handleSetTags } = useSearchForm({
    initialArticles: createArtilceArray(),
    initialTags: ['testTag'],
    initialCategory: 'testCategory',
    initialSearchType: SEARCH_TYPE.all,
    initialSearchWord: 'search',
  })

  return (
    <div>
      <p data-testid="loading">{`${isLoading}`}</p>
      <label htmlFor="test">
        testTag2
        <input
          id="test"
          type="checkbox"
          defaultChecked={false}
          onChange={handleSetTags}
          value="testTag2"
        />
      </label>
      <form onSubmit={handleSubmitSearch}>
        <button type="submit">button</button>
      </form>
    </div>
  )
}

const mockedJson = vitest.fn().mockResolvedValue({})
const mockedFetch = vitest.fn()

beforeEach(() => {
  const mockResponse = {
    ok: true,
    status: 200,
    json: mockedJson,
  }
  global.fetch = mockedFetch.mockResolvedValue(mockResponse)
})

afterEach(() => {
  vitest.resetAllMocks()
})

test('filterParamsが更新された時、fetchが走り記事を取得する', async () => {
  const { getByRole, getByTestId, user } = setup(<Component />)
  user.click(getByRole('checkbox', { name: 'testTag2' }))
  user.click(getByRole('checkbox', { name: 'testTag2' }))

  await waitFor(() => {
    expect(getByTestId('loading').textContent).toBe('true')
  })

  await waitFor(async () => {
    expect(getByTestId('loading').textContent).toBe('false')
    expect(mockedJson).toHaveBeenCalledWith()
  })
})

test('handleSubmitSearchが呼ばれたときにisLoadingがtrueになり、後でfalseになること', async () => {
  const { getByRole, getByTestId, user } = setup(<Component />)
  user.click(getByRole('button', { name: 'button' }))
  user.click(getByRole('button', { name: 'button' }))

  await waitFor(() => {
    expect(getByTestId('loading').textContent).toBe('true')
  })

  await waitFor(async () => {
    expect(getByTestId('loading').textContent).toBe('false')
    expect(mockedJson).toHaveBeenCalledWith()
  })
})
