import React, { type PropsWithChildren } from 'react'
import type { MicroCMS } from '@/types/microCMS'
import { Presenter } from './Presenter'
import { createIndexData } from './createIndexData'

type Props = PropsWithChildren<{
  content: MicroCMS['blog']['content']
}>

export const Container: React.FC<Props> = ({ content, children }) => {
  const articleIndex = createIndexData(content)
  return <Presenter articleIndex={articleIndex}>{children}</Presenter>
}
