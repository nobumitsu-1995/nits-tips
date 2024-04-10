import React from 'react'
import * as styles from './TagFilter.css'
import type { MicroCMS } from '@/types/microCMS'
import { Icon, ICON_TYPE } from '@/components/UI/Atoms/Icon'
import { Tag } from '@/components/UI/Molecules/Tag'
import { vars } from '@/styles/theme.css'

type Props = {
  tags: MicroCMS['tag'][]
  onClick: (id: string) => void
}

export const TagFilter: React.FC<Props> = ({ tags, onClick }) => (
  <div className={styles.tagFilter}>
    <p className={styles.title}>
      <Icon type={ICON_TYPE.sell} size={24} />
      タグ
    </p>
    <div className={styles.buttonContainer}>
      {tags.map((tag) => (
        <div key={tag.id} className={styles.tagContainer}>
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
            src={tag.icon?.url}
            label={tag.label}
            href={`/search/result/?tag=${tag.id}`}
          />
        </div>
      ))}
    </div>
  </div>
)
