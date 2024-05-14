import type { MicroCMS } from '@/types/microCMS'

export const convertToTagData = (
  tags: (MicroCMS['tag'] | MicroCMS['category'])[],
  isCategory: boolean = false,
) =>
  tags.map((data) => ({
    id: data.id,
    label: data.label,
    href: `/search/result/?${isCategory ? 'category' : 'tag'}=${data.id}`,
    src: 'icon' in data ? data.icon.url : '',
  }))
