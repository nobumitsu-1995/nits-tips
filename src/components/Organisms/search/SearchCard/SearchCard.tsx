import React, { useId, type PropsWithChildren } from 'react'
import * as styles from './SearchCard.css'
import { Card } from '@/components/UI/Atoms/Card'
import { SubHeading } from '@/components/UI/Atoms/SubHeading'
import { Border } from '@/components/UI/Atoms/Border'
import { Link } from '@/components/UI/Atoms/Link'

type Props = PropsWithChildren

export const SearchCard: React.FC<Props> = ({ children }) => {
  const a11yId = useId()

  return (
    <Card padding="24px 36px">
      <SubHeading text="記事検索" id={a11yId} />
      <Border margin="20px 0" />
      {children}
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
