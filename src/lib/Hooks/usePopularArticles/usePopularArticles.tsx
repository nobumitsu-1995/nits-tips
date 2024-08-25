import type { ArticleCardData } from '@/lib/interfaces/Article'

type UsePopularArticlesPayloadType = {
  /** 全ての記事データ */
  articles: ArticleCardData[]
}

type UsePopularArticlesReturnType = {
  popularArticles: ArticleCardData[]
}

const POPULAR_ARTICLE_IDS = [
  // PayloadとArgumentの使い分け方
  'zn8t7janjfbl',
  // Golang + postgreSQL + redis環境をdocker-composeで構築する
  'iym2z_py7x',
  // ARIA属性を活用したアクセシブルなモーダル実装
  'cdj-fno4l4g',
]

/** TODO: GA4のAPIを叩いて動的に取得できるようにしたい。 */
export const usePopularArticles = ({
  articles,
}: UsePopularArticlesPayloadType): UsePopularArticlesReturnType => ({
  popularArticles: articles
    .filter((article) => POPULAR_ARTICLE_IDS.includes(article.id))
    .reverse(),
})
