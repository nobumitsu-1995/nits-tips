import { renderHook, act } from '@testing-library/react'
import { useWordSearch } from './useWordSearch'

test('検索パラメーターが正しく設定される', () => {
  const { result } = renderHook(() =>
    useWordSearch({ initialSearchWord: 'test', initialSearchType: 'title' }),
  )

  expect(result.current.wordParams).toEqual({
    filters: 'isHidden[not_equals]true[and]title[contains]test',
    q: '',
  })
})

test('検索ワードが変更された時に正しく反映される', () => {
  const { result } = renderHook(() =>
    useWordSearch({ initialSearchWord: '', initialSearchType: 'all' }),
  )

  act(() => {
    result.current.handleSetSearch({
      target: { value: 'newWord' },
    } as React.ChangeEvent<HTMLInputElement>)
  })

  expect(result.current.searchWord).toBe('newWord')
})

test('検索タイプが変更された時に正しく反映される', () => {
  const { result } = renderHook(() =>
    useWordSearch({ initialSearchWord: 'test', initialSearchType: 'all' }),
  )

  act(() => {
    result.current.handleSetSearchType({
      target: { value: 'all' },
    } as React.ChangeEvent<HTMLInputElement>)
  })

  expect(result.current.searchType).toBe('all')
  expect(result.current.wordParams).toEqual({
    filters: 'isHidden[not_equals]true',
    q: 'test',
  })
})
