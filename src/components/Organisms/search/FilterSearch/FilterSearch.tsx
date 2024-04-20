/* eslint-disable no-console */
import React, { useEffect, useId, useState } from 'react'
import * as styles from './FilterSearch.css'
import { Heading } from '@/components/UI/Atoms/Heading'
import { SubHeading } from '@/components/UI/Atoms/SubHeading'
import { CategorySelector } from './CategorySelector'
import type { MicroCMS } from '@/types/microCMS'
import { Button, BUTTON_TYPE } from '@/components/UI/Atoms/Button'
import { TagSelector } from './TagSelector'
import { delay } from '@/lib/helpers/delay'

type Props = {
  categoriesData: Pick<MicroCMS['category'], 'id' | 'label'>[]
  tagsData: Pick<MicroCMS['tag'], 'id' | 'label'>[]
}

export const FilterSearch: React.FC<Props> = ({ categoriesData, tagsData }) => {
  const a11yId = useId()
  const [category, setCategory] = useState(categoriesData[0].id)
  const [tags, setTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  /** safariでブラウザバックした時、disabledがそのままになってしまうので
   * コンポーネントのアンマウント時にfalseになるように調整する。
   */
  useEffect(() => {
    const resetLoading = (event: PageTransitionEvent) => {
      console.log('all')

      if (event.persisted) {
        console.log('persisted')
        setIsLoading(false)
        window.location.reload()
      }
    }
    window.addEventListener('pageshow', resetLoading)

    return () => {
      window.removeEventListener('pageshow', resetLoading)
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: _val } = e.target
    const index = tags.indexOf(_val)

    if (index > -1) {
      const newValue = [...tags]
      newValue.splice(index, 1)
      setTags(newValue)
    } else {
      setTags((prev) => [...prev, _val])
    }
  }

  const handleClick = async () => {
    setIsLoading(true)
    /** safariでローディングアニメーションが表示されないので100ms遅延をつけてアニメーションを表示させる。 */
    await delay(100)
    const url =
      tags.length > 0
        ? `/search/result/?category=${category}&tag=${tags.join(',')}`
        : `/search/result/?category=${category}`
    window.location.href = url
  }

  return (
    <section>
      <Heading id={a11yId} text="絞り込み検索" />
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          <SubHeading text="カテゴリ" />
        </legend>
        <CategorySelector
          selectedCategory={category}
          categories={categoriesData}
          setCategory={setCategory}
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          <SubHeading text="タグ" />
        </legend>
        <TagSelector
          selectedTags={tags}
          tags={tagsData}
          handleChange={handleChange}
        />
      </fieldset>
      <div className={styles.buttonContainer}>
        <Button
          buttonType={BUTTON_TYPE.button}
          isLoading={isLoading}
          isDisabled={false}
          onClick={handleClick}
        >
          検索する(search)
        </Button>
      </div>
    </section>
  )
}
