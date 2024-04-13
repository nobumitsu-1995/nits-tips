import React from 'react'
import * as styles from './CurrentTags.css'
import { Icon, ICON_TYPE } from '@/components/UI/Atoms/Icon'
import { Tag } from '@/components/UI/Molecules/Tag'
import { vars } from '@/styles/theme.css'

type Tag = {
  id: string
  label: string
  src?: string
}

type Props = {
  selectedTags: Tag[]
  onClick: (id: string) => void
}

export const CurrentTags: React.FC<Props> = ({ selectedTags, onClick }) => (
  <ul className={styles.list}>
    {selectedTags.map((tag) => (
      <li key={tag.id} className={styles.listitem}>
        <button
          type="button"
          onClick={() => onClick(tag.id)}
          aria-label={`${tag.label}を絞り込み条件から削除`}
          className={styles.button}
        >
          <Icon
            type={ICON_TYPE.cancel}
            size={24}
            color={vars.color.lightGray}
          />
        </button>
        <Tag
          src={tag.src}
          label={tag.label}
          href={`/search/result/?tag=${tag.id}`}
        />
      </li>
    ))}
  </ul>
)
