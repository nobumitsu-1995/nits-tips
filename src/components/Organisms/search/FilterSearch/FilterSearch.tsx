import React, { useEffect, useId, useState } from 'react'
import * as styles from './FilterSearch.css'
import { Heading } from '@/components/UI/Atoms/Heading'
import { SubHeading } from '@/components/UI/Atoms/SubHeading'
import { CategorySelector } from './CategorySelector'
import type { MicroCMS } from '@/types/microCMS'
import { Button, BUTTON_TYPE } from '@/components/UI/Atoms/Button'
import { TagSelector } from './TagSelector'
import { useSearchParams } from '@/lib/Hooks/useSearchParams'
import { generateSearchUrlQuery } from '@/lib/helpers/generateSearchUrlQuery'

type Props = {
  categoriesData: Pick<MicroCMS['category'], 'id' | 'label'>[]
  tagsData: Pick<MicroCMS['tag'], 'id' | 'label'>[]
}

type Storage = {
  tags?: string[]
  category?: string
}

export const FilterSearch: React.FC<Props> = ({ categoriesData, tagsData }) => {
  const a11yId = useId()
  const { searchParams, setSearchParamsToStorage } = useSearchParams<Storage>()
  const [category, setCategory] = useState(categoriesData[0].id)
  const [tags, setTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!searchParams) return
    searchParams.category && setCategory(searchParams.category)
    searchParams.tags && setTags(searchParams.tags)
  }, [searchParams])

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

  const handleClick = () => {
    setIsLoading(true)
    const url = `/search/result/?${generateSearchUrlQuery({ category, tags })}`
    setSearchParamsToStorage({ category, tags })
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
