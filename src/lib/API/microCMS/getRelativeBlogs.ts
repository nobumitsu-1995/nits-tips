import type { MicroCMS } from '@/types/microCMS'
import { getBlogsData } from './getBlogs'

type Blog = MicroCMS['blog']

/** 関連記事の優先順位
 * タイトルが類似 > タグが同じ > カテゴリが同じ
 */
export const getRelativeBlogs = async (blog: Blog) => {
  const titleRelatives =
    (await getBlogsData({
      filters: `title[contains]${blog.title}[and]id[not_equals]${blog.id}`,
      limit: 4,
    })) ?? []

  const tagRelatives =
    (await getBlogsData({
      filters: `tags[contains]${blog.tags[0].id}[and]id[not_equals]${blog.id}`,
      limit: 4,
    })) ?? []

  const categoryRelatives =
    (await getBlogsData({
      filters: `category[equals]${blog.category.id}[and]id[not_equals]${blog.id}`,
      limit: 4,
    })) ?? []

  // 重複した記事を取得する可能性があるので以下の処理でユニークな値を持つ配列にする。
  const map = new Map<string, Blog>()
  const arr = [...titleRelatives, ...tagRelatives, ...categoryRelatives]
  arr.forEach((obj) => {
    map.set(obj.id, obj)
  })

  // 関連記事の表示は4件までなので丸め込む
  return Array.from(map.values()).slice(0, 4)
}
