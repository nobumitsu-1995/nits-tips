import React from 'react'
import { convertToArticles } from '@/lib/helpers/convertToArticles'
import { Presenter } from './Presenter'
import type { MicroCMS } from '@/types/microCMS'

type Props = {
  blogs: MicroCMS['blog'][]
}

export const Container: React.FC<Props> = ({ blogs }) => {
  const articles = convertToArticles(blogs)

  return <Presenter articles={articles} />
}
