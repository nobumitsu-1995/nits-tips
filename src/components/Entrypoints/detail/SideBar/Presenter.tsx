import React, { type ComponentProps } from 'react'
import { ArticleIndex } from '@Organisms/Detail/ArticleIndex'
import { Share } from '@Molecules/Share'
import * as styles from './SideBar.css'
import { Card } from '@/components/UI/Atoms/Card'

type Props = {
  articleIndex: ComponentProps<typeof ArticleIndex>['articleIndex']
}

export const Presenter: React.FC<Props> = ({ articleIndex }) => (
  <div className={styles.sideBar}>
    <ArticleIndex articleIndex={articleIndex} />
    <Card>
      <div className={styles.shareContainer}>
        <Share />
      </div>
    </Card>
  </div>
)
