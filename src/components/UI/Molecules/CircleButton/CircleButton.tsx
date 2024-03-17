import React from 'react'
import { Icon, type IconType } from '@Atoms/Icon'
import * as styles from './CircleButton.css'
import { vars } from '@/styles/theme.css'

type Props = {
  /** iconの種類 */
  iconType: IconType
  /** tooltipに表示するテキスト */
  tooltipText: string
  /** button押下時に発火する関数 */
  onClick: React.MouseEventHandler<HTMLButtonElement>
  /** iconの色 */
  iconColor?: string
  /** iconのサイズ */
  iconSize?: number
  /** ボタンの背景色 */
  buttonColor?: string
  /** ボタンのサイズ */
  buttonSize?: number
}

export const CircleButton: React.FC<Props> = ({
  iconType,
  tooltipText,
  onClick,
  iconColor = vars.color.darkGray,
  iconSize = 28,
  buttonColor = vars.color.lightGray,
  buttonSize = 48,
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={tooltipText}
    className={styles.circleButton}
    style={{
      backgroundColor: buttonColor,
      width: buttonSize,
      height: buttonSize,
    }}
  >
    <Icon type={iconType} size={iconSize} color={iconColor} />
    <span aria-hidden="true" className={styles.toolTip}>
      {tooltipText}
    </span>
  </button>
)
