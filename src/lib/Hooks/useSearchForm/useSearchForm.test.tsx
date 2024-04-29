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
  expect.assertions(5)
  const { getByRole, getByTestId, user } = setup(<Component />)
  user.click(getByRole('checkbox', { name: 'testTag2' }))

  await waitFor(() => {
    expect(getByTestId('loading').textContent).toBe('true')
  })

  await waitFor(() => {
    expect(getByTestId('loading').textContent).toBe('false')
    expect(mockedFetch).toHaveBeenCalledWith(
      expect.stringContaining(
        'blogs?limit=100&filters=isHidden%5Bnot_equals%5Dtrue%5Band%5Dcategory%5Bequals%5DtestCategory%5Band%5Dtags%5Bcontains%5DtestTag%5Band%5Dtags%5Bcontains%5DtestTag2&orders=-updatedAt',
      ),
      expect.any(Object),
    )
    expect(mockedJson).toHaveBeenCalledWith()
  })
})

test('handleSubmitSearchが呼ばれたときにisLoadingがtrueになり、後でfalseになること', async () => {
  expect.assertions(5)
  const { getByRole, getByTestId, user } = setup(<Component />)
  user.click(getByRole('button', { name: 'button' }))

  await waitFor(() => {
    expect(getByTestId('loading').textContent).toBe('true')
  })

  await waitFor(() => {
    expect(getByTestId('loading').textContent).toBe('false')
    expect(mockedFetch).toHaveBeenCalledWith(
      expect.stringContaining(
        'blogs?limit=100&filters=isHidden%5Bnot_equals%5Dtrue&q=search',
      ),
      expect.any(Object),
    )
    expect(mockedJson).toHaveBeenCalledWith()
  })
})
