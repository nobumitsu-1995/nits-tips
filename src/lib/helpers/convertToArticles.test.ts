import { blogs } from '@/testUtils/fixtures/blogsData'
import { convertToArticles } from './convertToArticles'

const expected = [
  {
    description: `概要です。
概要です。
概要です。
概要です。
`,
    id: '0',
    publishedAt: '2024-02-24',
    tagData: [
      {
        id: 'o39i0-i8y7r',
        href: '/search/result/?tag=o39i0-i8y7r',
        label: 'React',
        src: '',
      },
      {
        id: 'ff4hsrq4ra1',
        href: '/search/result/?tag=ff4hsrq4ra1',
        label: 'typescript',
        src: '',
      },
    ],
    title: '（サンプル）まずはこの記事を開きましょう',
    updatedAt: '2024-02-24',
  },
  {
    description: `概要です。
概要です。
概要です。
概要です。
`,
    id: '1',
    publishedAt: '2024-02-24',
    tagData: [
      {
        id: 'o39i0-i8y7r',
        href: '/search/result/?tag=o39i0-i8y7r',
        label: 'React',
        src: '',
      },
      {
        id: 'ff4hsrq4ra1',
        href: '/search/result/?tag=ff4hsrq4ra1',
        label: 'typescript',
        src: '',
      },
    ],
    title: '（サンプル）まずはこの記事を開きましょう',
    updatedAt: '2024-02-24',
  },
]

test('blogsのデータ配列が渡された時、Article配列用のデータになる', () => {
  const result = convertToArticles(blogs(2))
  expect(result).toEqual(expected)
})
