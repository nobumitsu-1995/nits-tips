import React, { type ComponentProps } from 'react'
import * as styles from './TagTitle.css'
import { Icon, ICON_TYPE } from '@/components/UI/Atoms/Icon'
import { TagSelector } from '../../../FilterSearch/TagSelector'

type Props = {
  tags: ComponentProps<typeof TagSelector>['tags']
}

export const TagTitle: React.FC<Props> = ({ tags }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
  <div className={styles.tagTitle} tabIndex={0}>
    <Icon type={ICON_TYPE.sell} size={24} />
    <p>タグ</p>
    <span aria-hidden="true" className={styles.triangle} />
    <div className={styles.tooltip}>
      <TagSelector
        tags={tags}
        selectedTags={tags.map((tag) => tag.id)}
        handleChange={() => {}}
      />
    </div>
  </div>
)
