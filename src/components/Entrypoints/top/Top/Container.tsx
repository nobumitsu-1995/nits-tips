import React from 'react'
import { Presenter } from './Presenter'
import type { MicroCMS } from '@/types/microCMS'
import { convertToArticle } from './convertToArticle'

type Props = {
  blogs: MicroCMS['blog'][]
}

export const Container: React.FC<Props> = ({ blogs }) => {
  const articles = convertToArticle(blogs)

  return <Presenter articles={articles} />
}
