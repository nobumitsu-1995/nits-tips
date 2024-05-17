export type ArticleData = {
  /** 著者 */
  author: {
    name: string
    src: string
    href: string
  }
  /** 名前 */
  title: string
  /** タグデータ */
  tagData: TagData[]
  /** 公開日 */
  publishedAt: string
  /** 最終更新日 */
  updatedAt?: string
  /** コンテンツ情報 */
  content: string
}

export type ArticleCardData = {
  /** 記事ID */
  id: string
  /** 記事タイトル */
  title: string
  /** 記事概要 */
  description: string
  /** タグデータ */
  tagData: TagData[]
  /** 公開日 */
  publishedAt: string
  /** 最終更新日 */
  updatedAt?: string
  /** サムネイル */
  thumbnail: string
}
