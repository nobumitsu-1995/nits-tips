import React from 'react'
import { Presenter } from './Presenter'
import type { MicroCMS } from '@/types/microCMS'
import { convertToArticles } from '@/lib/helpers/convertToArticles'

type Props = {
  blogs: MicroCMS['blog'][]
}

export const Container: React.FC<Props> = ({ blogs }) => {
  const articles = convertToArticles(blogs)

  return <Presenter articles={articles} />
}
