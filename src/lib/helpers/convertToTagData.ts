import type { MicroCMS } from '@/types/microCMS'

export const convertToTagData = (tags: MicroCMS['tag'][]) =>
  tags.map((data) => ({
    id: data.id,
    label: data.label,
    href: `/search/result/?tag=${data.id}`,
    src: data.icon?.url ?? '',
  }))
