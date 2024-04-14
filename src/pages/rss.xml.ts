import rss, { type RSSOptions } from '@astrojs/rss'
import { getAllBlogs } from '@/lib/API/microCMS/getAllBlogs'

export async function GET(context: RSSOptions) {
  const blogs = await getAllBlogs()
  const items = blogs.map((blog) => ({
    title: blog.title,
    pubDate: new Date(blog.publishedAt),
    description: blog.description,
    link: `/detail/${blog.id}/`,
  }))

  return rss({
    title: 'nits-tips',
    description: 'nobumitsu-1995による技術tipsの備忘録集。',
    site: context.site,
    items,
  })
}
