import React from 'react'
import { ICON_TYPE } from '@Atoms/Icon'
import { CircleButton } from '../CircleButton'
import { vars } from '@/styles/theme.css'
import * as styles from './ToTopButton.css'
import { useScrollY } from '@/lib/Hooks/useScrollY'

export const ToTopButton: React.FC = () => {
  const { isShow } = useScrollY({})
  const handleClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <CircleButton
      iconType={ICON_TYPE.arrow_upward}
      iconColor={vars.color.white}
      iconStyle={styles.icon}
      iconSize={24}
      buttonColor={vars.color.attention}
      buttonSize={60}
      buttonStyle={`${styles.toTopButton} ${isShow ? styles.isShow : styles.isHidden}`}
      withTooltip={false}
      tooltipText="ページトップへスクロール"
      onClick={handleClick}
    />
  )
}
