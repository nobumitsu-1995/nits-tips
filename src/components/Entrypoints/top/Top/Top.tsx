import React, { type PropsWithChildren } from 'react'
import { ArticleSection } from '@Organisms/Top/ArticleSection'
import { TagList } from '@Molecules/TagList'
import { Heading } from '@Atoms/Heading'
import * as styles from './Top.css'
import type { MicroCMS } from '@/types/microCMS'
import { convertToArticles } from '@/lib/helpers/convertToArticles'
import { usePopularArticles } from '@/lib/Hooks/usePopularArticles'
import type { TagData } from '@/lib/interfaces/Tag'
import { Border } from '@/components/UI/Atoms/Border'

type Props = PropsWithChildren<{
  /** 記事一覧 */
  blogs: MicroCMS['blog'][]
  /** 存在するタグのデータ */
  tagsData: TagData[]
}>

export const Top: React.FC<Props> = ({ blogs, tagsData, children }) => {
  const articles = convertToArticles(blogs)
  const { popularArticles } = usePopularArticles({ articles })

  return (
    <main className={styles.top}>
      {popularArticles.length > 0 && (
        <>
          <ArticleSection
            title="よく読まれている記事"
            articles={popularArticles}
            totalPage={0}
            currentPage={0}
            setCurrentPage={() => {}}
          />
          <Border margin="56px 0" />
        </>
      )}
      {children}
      <Border margin="56px 0" />
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          <Heading text="タグ一覧" />
        </legend>
        <TagList tagData={tagsData} />
      </fieldset>
    </main>
  )
}
