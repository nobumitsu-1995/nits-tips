import { act, renderHook } from '@testing-library/react'
import { ORDER_VALUE, useFilterSearch } from './useFilterSearch'

test('フィルターが正しく設定される', () => {
  const { result } = renderHook(() =>
    useFilterSearch({
      initialCategory: 'testCategory',
      initialTags: ['tag1', 'tag2'],
    }),
  )

  expect(result.current.filterParams).toEqual({
    filters:
      'isHidden[not_equals]true[and]category[equals]testCategory[and]tags[contains]tag1[and]tags[contains]tag2',
    orders: ORDER_VALUE.desc,
  })
})

test('カテゴリーが変更された時に正しく反映される', () => {
  const { result } = renderHook(() =>
    useFilterSearch({ initialCategory: 'initialCategory', initialTags: [] }),
  )

  act(() => {
    result.current.handleSetCategory({
      target: { value: 'newCategory' },
    } as React.ChangeEvent<HTMLSelectElement>)
  })

  expect(result.current.category).toBe('newCategory')
})

test('タグが追加・削除された時に正しく反映される', () => {
  const { result } = renderHook(() =>
    useFilterSearch({ initialCategory: '', initialTags: [] }),
  )

  act(() => {
    result.current.handleSetTags({
      target: { value: 'newTag1' },
    } as React.ChangeEvent<HTMLInputElement>)
  })

  expect(result.current.tags).toEqual(['newTag1'])

  act(() => {
    result.current.handleSetTags({
      target: { value: 'newTag2' },
    } as React.ChangeEvent<HTMLInputElement>)
  })

  expect(result.current.tags).toEqual(['newTag1', 'newTag2'])

  act(() => {
    result.current.handleDeleteTag('newTag1')
  })

  expect(result.current.tags).toEqual(['newTag2'])
})

test('ソートタイプが変更された時に正しく反映される', () => {
  const { result } = renderHook(() =>
    useFilterSearch({ initialCategory: '', initialTags: [] }),
  )

  act(() => {
    result.current.handleChangeSortType({
      target: { value: 'asc' },
    } as React.ChangeEvent<HTMLSelectElement>)
  })

  expect(result.current.sortType).toBe('asc')
})
