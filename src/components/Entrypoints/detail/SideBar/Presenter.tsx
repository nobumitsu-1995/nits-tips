import React, { type PropsWithChildren } from 'react'
import {
  ArticleIndex,
  type ArticleIndexType,
} from '@Organisms/Detail/ArticleIndex'
import * as styles from './SideBar.css'

type Props = PropsWithChildren<{
  articleIndex: ArticleIndexType[]
}>

export const Presenter: React.FC<Props> = ({ articleIndex, children }) => (
  <div className={styles.stickyContainer}>
    <div className={styles.sideBar}>
      <ArticleIndex articleIndex={articleIndex} />
      {children}
    </div>
  </div>
)
