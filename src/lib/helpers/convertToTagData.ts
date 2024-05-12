import type { MicroCMS } from '@/types/microCMS'

export const convertToTagData = (
  tags: (MicroCMS['tag'] | MicroCMS['category'])[],
) =>
  tags.map((data) => ({
    id: data.id,
    label: data.label,
    href: `/search/result/?${'icon' in data ? 'tag' : 'category'}=${data.id}`,
    src: 'icon' in data ? data.icon.url : '',
  }))
