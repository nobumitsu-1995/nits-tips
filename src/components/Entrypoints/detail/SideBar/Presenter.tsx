import React, { type ComponentProps, type PropsWithChildren } from 'react'
import { ArticleIndex } from '@Organisms/Detail/ArticleIndex'
import * as styles from './SideBar.css'
import { Card } from '@/components/UI/Atoms/Card'

type Props = PropsWithChildren<{
  articleIndex: ComponentProps<typeof ArticleIndex>['articleIndex']
}>

export const Presenter: React.FC<Props> = ({ articleIndex, children }) => (
  <div className={styles.stickyContainer}>
    <div className={styles.sideBar}>
      <ArticleIndex articleIndex={articleIndex} />
      <Card>
        <div className={styles.shareContainer}>{children}</div>
      </Card>
    </div>
  </div>
)
