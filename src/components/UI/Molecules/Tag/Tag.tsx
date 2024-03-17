import React from 'react'
import { ICON_TYPE, Icon } from '@Atoms/Icon'
import * as styles from './Tag.css'

type Props = {
  /** tagのラベル */
  label: string
  /** 遷移先URL */
  href: string
  /** imageのsrc */
  src?: string
}

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
