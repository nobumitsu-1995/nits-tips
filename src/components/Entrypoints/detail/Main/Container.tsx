import React from 'react'
import { Presenter } from './Presenter'
import type { MicroCMS } from '@/types/microCMS'
import { convertToArticles } from '@/lib/helpers/convertToArticles'
import { convertToArticle } from './convertToArticle'

export type GithubAccount = {
  name: string
  src: string
  href: string
}

type Props = {
  blog: MicroCMS['blog']
  relatedBlogs: MicroCMS['blog'][]
  githubAccount: GithubAccount
}

export const Container: React.FC<Props> = ({
  blog,
  relatedBlogs,
  githubAccount,
}) => {
  const article = convertToArticle({ githubAccount, blog })
  const relatedArticles = convertToArticles(relatedBlogs)

  return <Presenter article={article} relatedArticles={relatedArticles} />
}
