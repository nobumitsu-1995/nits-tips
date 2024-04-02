import type { MicroCMS } from '@/types/microCMS'

/** TODO: hrefとsrcの設定 */
export const convertToTagData = (tags: MicroCMS['tag'][]) =>
  tags.map((data) => ({
    label: data.label,
    href: `/search/result/?tag=${data.id}`,
    src: data.icon?.url ?? '',
  }))
