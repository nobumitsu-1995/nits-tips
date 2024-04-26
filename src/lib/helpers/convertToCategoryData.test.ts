import { categories } from '@/testUtils/fixtures/categories'
import { convertToCategoryData } from './convertToCategoryData'

test('カテゴリデータを表示用に整形する', () => {
  const result = convertToCategoryData(categories)
  expect(result).toEqual([
    {
      id: 'daz0qkbj6',
      label: 'フロントエンド',
    },
    {
      id: 'zovf4yshp3',
      label: 'バックエンド',
    },
    {
      id: 'air585mxa',
      label: 'その他',
    },
  ])
})
