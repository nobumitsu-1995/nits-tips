import React from 'react'
import { ICON_TYPE, Icon } from '@Atoms/Icon'
import * as styles from './Tag.css'
import type { TagData } from '@/lib/interfaces/Tag'

type Props = TagData

export const Tag: React.FC<Props> = ({ label, href, src }) => (
  <a href={href} className={styles.tag}>
    {src ? (
      <img src={src} alt="" className={styles.image} />
    ) : (
      <Icon type={ICON_TYPE.folder} />
    )}
    <p>{label}</p>
  </a>
)
