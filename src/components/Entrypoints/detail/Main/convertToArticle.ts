import type { MicroCMS } from '@/types/microCMS'
import type { GithubAccount } from './Container'
import { convertToTagData } from '@/lib/helpers/convertToTagData'
import { convertDate } from '@/lib/helpers/convertDate'

type Args = {
  githubAccount: GithubAccount
  blog: MicroCMS['blog']
}

export const convertToArticle = ({ githubAccount, blog }: Args) => ({
  author: { ...githubAccount },
  title: blog.title,
  tagData: convertToTagData(blog.tags),
  publishedAt: convertDate(blog.publishedAt),
  updatedAt: convertDate(blog.updatedAt),
  content: blog.content,
})
