import React, { type ComponentProps } from 'react'
import * as styles from './TagTitle.css'
import { Icon, ICON_TYPE } from '@/components/UI/Atoms/Icon'
import { TagSelector } from '../../../FilterSearch/TagSelector'

type Props = {
  tags: ComponentProps<typeof TagSelector>['tags']
  selectedTags: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TagTitle: React.FC<Props> = ({ tags, selectedTags, onChange }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
  <div className={styles.tagTitle} tabIndex={0}>
    <Icon type={ICON_TYPE.sell} size={24} />
    <p>タグ</p>
    <span aria-hidden="true" className={styles.triangle} />
    <div className={styles.tooltip}>
      <TagSelector
        tags={tags}
        selectedTags={selectedTags}
        handleChange={onChange}
      />
    </div>
  </div>
)
