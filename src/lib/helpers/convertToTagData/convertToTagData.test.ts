import { originTagData } from '@/testUtils/fixtures/originTagData'
import { convertToTagData } from './convertToTagData'
import { categories } from '@/testUtils/fixtures/categories'

test('タグ配列を表示用に整形する', () => {
  const result = convertToTagData([originTagData])
  expect(result).toMatchSnapshot()
})

test('カテゴリ配列を表示用に整形する', () => {
  const result = convertToTagData(categories, true)
  expect(result).toMatchSnapshot()
})
