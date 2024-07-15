import React, { type PropsWithChildren } from 'react'
import { Card } from '@Atoms/Card'
import { Border } from '@Atoms/Border'
import { TagList } from '@Molecules/TagList'
import { Header } from './Header'
import { Content } from './Content'
import type { ArticleData } from '@/lib/interfaces/Article'
import * as styles from './Article.css'

type Props = PropsWithChildren<ArticleData>

export const Article: React.FC<Props> = ({ children, ...props }) => {
  const { content, ...headerProps } = props
  return (
    <Card padding="30px 32px">
      <Header {...headerProps}>{children}</Header>
      <Border margin="20px 0 36px" />
      <Content content={content} />
      <Border margin="36px 0" />
      <TagList tagData={headerProps.tagData} />
      <div className={styles.container}>{children}</div>
    </Card>
  )
}
