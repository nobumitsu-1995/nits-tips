import { originTagData } from '@/testUtils/fixtures/originTagData'
import { convertToTagData } from './convertToTagData'

test('タグ配列を表示用に整形する', () => {
  const result = convertToTagData([originTagData])
  expect(result).toEqual([
    {
      id: 'o39i0-i8y7r',
      href: '/search/result/?tag=o39i0-i8y7r',
      label: 'React',
      src: 'https://images.microcms-assets.io/assets/1ea46e2b90a147b58b1b144f170fce22/eb4b4b189c1c41c19b57e5615f1d46a6/react_icon_130845.svg',
    },
  ])
})
