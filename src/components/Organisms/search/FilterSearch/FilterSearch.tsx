import React from 'react'
import { Heading } from '@Atoms/Heading'
import { SubHeading } from '@Atoms/SubHeading'
import { TagList } from '@Molecules/TagList'
import * as styles from './FilterSearch.css'
import type { TagData } from '@/lib/interfaces/Tag'

type Props = {
  categoriesData: TagData[]
  tagsData: TagData[]
}

export const FilterSearch: React.FC<Props> = ({ categoriesData, tagsData }) => (
  <section>
    <Heading text="絞り込み検索" />
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>
        <SubHeading text="カテゴリ一覧" />
      </legend>
      <TagList tagData={categoriesData} />
    </fieldset>
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>
        <SubHeading text="タグ一覧" />
      </legend>
      <TagList tagData={tagsData} />
    </fieldset>
  </section>
)
