import React, { type ComponentProps } from 'react'
import { Card } from '@Atoms/Card'
import { Border } from '@Atoms/Border'
import { TagList } from '@Molecules/TagList'
import { Header } from './Header'
import { Content } from './Content'

type Props = ComponentProps<typeof Header> & {
  /** コンテンツ情報 */
  content: string
}

export const Article: React.FC<Props> = (props) => {
  const { content, ...headerProps } = props
  return (
    <Card padding="30px 32px">
      <Header {...headerProps} />
      <Border margin="36px 0" />
      <Content content={content} />
      <Border margin="36px 0" />
      <TagList tagData={headerProps.tagData} />
    </Card>
  )
}
