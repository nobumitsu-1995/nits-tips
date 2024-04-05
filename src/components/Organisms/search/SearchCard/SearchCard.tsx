import React from 'react'
import * as styles from './SearchCard.css'
import { Card } from '@/components/UI/Atoms/Card'
import { SubHeading } from '@/components/UI/Atoms/SubHeading'
import { Border } from '@/components/UI/Atoms/Border'
import { Link } from '@/components/UI/Atoms/Link'
import { Icon } from '@/components/UI/Atoms/Icon'

export const SearchCard: React.FC = () => (
  <Card padding="24px 36px">
    <SubHeading text="記事検索" />
    <Border margin="20px 0" />
    <input type="search" placeholder="検索" />
    <button type="submit" aria-label="検索">
      <Icon type="search" />
    </button>
    <div className={styles.linkContainer}>
      <Link
        className={styles.link}
        text="その他条件で検索する"
        href="/search/"
      />
    </div>
  </Card>
)
