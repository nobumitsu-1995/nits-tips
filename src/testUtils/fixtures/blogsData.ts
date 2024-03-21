import { articleContent } from './articleConetnts'

export const blog = (id = 'h8mr8y9vhx') => ({
  id,
  createdAt: '2024-02-24T11:19:08.516Z',
  updatedAt: '2024-02-24T12:14:45.636Z',
  publishedAt: '2024-02-24T11:19:08.516Z',
  revisedAt: '2024-02-24T12:14:45.636Z',
  title: '（サンプル）まずはこの記事を開きましょう',
  description: '概要です。\n概要です。\n概要です。\n概要です。\n',
  content: articleContent,
  eyecatch: {
    url: 'https://images.microcms-assets.io/assets/1ea46e2b90a147b58b1b144f170fce22/c3c1c47f364e4336a6722db0ffc0de1d/blog-template.png',
    height: 630,
    width: 1200,
  },
  category: {
    id: 'daz0qkbj6',
    createdAt: '2024-02-24T11:19:07.459Z',
    updatedAt: '2024-02-24T11:37:06.594Z',
    publishedAt: '2024-02-24T11:19:07.459Z',
    revisedAt: '2024-02-24T11:37:06.594Z',
    name: 'frontend',
    label: 'フロントエンド',
  },
  tags: [
    {
      id: 'o39i0-i8y7r',
      createdAt: '2024-02-24T11:24:29.446Z',
      updatedAt: '2024-02-24T11:29:45.128Z',
      publishedAt: '2024-02-24T11:24:29.446Z',
      revisedAt: '2024-02-24T11:29:45.128Z',
      name: 'react',
      label: 'React',
    },
    {
      id: 'ff4hsrq4ra1',
      createdAt: '2024-02-24T11:24:15.728Z',
      updatedAt: '2024-02-24T11:29:54.321Z',
      publishedAt: '2024-02-24T11:24:15.728Z',
      revisedAt: '2024-02-24T11:29:54.321Z',
      name: 'typescript',
      label: 'typescript',
    },
  ],
  isHidden: false,
})

export const blogs = (n: number) =>
  new Array(n).fill(0).map((_, index) => ({
    ...blog(`${index}`),
  }))
