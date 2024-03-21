import type { MicroCMS } from '@/types/microCMS'

/** TODO: hrefとsrcの設定 */
export const convertToTagData = (tags: MicroCMS['tag'][]) =>
  tags.map((data) => ({
    label: data.label,
    href: `https://example.com/?id=${data.id}`,
    src: data.id,
  }))
