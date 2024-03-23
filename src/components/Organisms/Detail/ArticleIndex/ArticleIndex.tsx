import React from 'react'
import { Card } from '@Atoms/Card'
import { SubHeading } from '@Atoms/SubHeading'
import { Border } from '@Atoms/Border'
import * as styles from './ArticleIndex.css'

type Title = {
  /** 目次のタイトル */
  title: string
  /** 遷移先 */
  href: string
}

type Props = {
  articleIndex: (Title & {
    /** 子タイトル */
    childTitle?: Title[]
  })[]
}

export const ArticleIndex: React.FC<Props> = ({ articleIndex }) => (
  <Card padding="24px 36px">
    <SubHeading text="目次" />
    <Border margin="20px 0" />
    <ol>
      {articleIndex.map((title, index) => (
        <li className={styles.listItem} key={title.href}>
          <p className={styles.text}>
            <span className={styles.number}>{index + 1}. </span>
            <a href={`#${title.href}`} className={styles.link}>
              {title.title}
            </a>
          </p>
          {title.childTitle && (
            <ol className={styles.childList}>
              {title.childTitle.map((child, childIndex) => (
                <li className={styles.listItem} key={child.href}>
                  <p className={styles.text}>
                    <span className={styles.number}>
                      {index + 1}-{childIndex + 1}.{' '}
                    </span>
                    <a href={`#${title.href}`} className={styles.link}>
                      {child.title}
                    </a>
                  </p>
                </li>
              ))}
            </ol>
          )}
        </li>
      ))}
    </ol>
  </Card>
)
