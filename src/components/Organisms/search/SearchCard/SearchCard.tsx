import React, { useId, useState } from 'react'
import * as styles from './SearchCard.css'
import { Card } from '@/components/UI/Atoms/Card'
import { SubHeading } from '@/components/UI/Atoms/SubHeading'
import { Border } from '@/components/UI/Atoms/Border'
import { Link } from '@/components/UI/Atoms/Link'
import { Icon } from '@/components/UI/Atoms/Icon'

export const SearchCard: React.FC = () => {
  const a11yId = useId()
  const [searchWord, setSearchWord] = useState('')

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }

  return (
    <Card padding="24px 36px">
      <SubHeading text="記事検索" id={a11yId} />
      <Border margin="20px 0" />
      <form
        aria-labelledby={a11yId}
        className={styles.form}
        action="/search/result/"
        method="get"
      >
        <input
          type="search"
          placeholder="検索"
          aria-labelledby={a11yId}
          name="q"
          value={searchWord}
          onChange={handleChangeSearch}
          className={styles.input}
        />
        <button type="submit" aria-label="検索" className={styles.button}>
          <Icon type="search" size={24} />
        </button>
      </form>
      <div className={styles.linkContainer}>
        <Link
          className={styles.link}
          text="その他条件で検索する"
          href="/search/"
        />
      </div>
    </Card>
  )
}
