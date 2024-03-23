import React from 'react'
import type { MicroCMS } from '@/types/microCMS'
import { Presenter } from './Presenter'
import { createIndexData } from './createIndexData'

type Props = {
  content: MicroCMS['blog']['content']
}

export const Container: React.FC<Props> = ({ content }) => {
  const articleIndex = createIndexData(content)
  return <Presenter articleIndex={articleIndex} />
}
