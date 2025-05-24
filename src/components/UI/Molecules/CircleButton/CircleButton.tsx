import React, { type JSX } from 'react'
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
  /** tooltipを表示する */
  withTooltip?: boolean
  /** iconの色 */
  iconColor?: string
  /** iconのサイズ */
  iconSize?: number
  /** iconに追加するstyle(className) */
  iconStyle?: string
  /** ボタンの背景色 */
  buttonColor?: string
  /** ボタンのサイズ */
  buttonSize?: number
  /** buttonに追加するstyle(className) */
  buttonStyle?: string
  /** buttonタグにデフォルトで用意されているattributes */
  buttonAttributes?: JSX.IntrinsicElements['button']
}

export const CircleButton: React.FC<Props> = ({
  iconType,
  tooltipText,
  onClick,
  withTooltip = true,
  iconColor = vars.color.darkGray,
  iconSize = 28,
  iconStyle = '',
  buttonColor = vars.color.lightGray,
  buttonSize = 48,
  buttonStyle = '',
  buttonAttributes,
}) => (
  <button
    type="button"
    onClick={(event) => {
      event.stopPropagation()
      onClick(event)
    }}
    aria-label={tooltipText}
    className={`${styles.circleButton} ${buttonStyle}`}
    style={{
      backgroundColor: buttonColor,
      width: buttonSize,
      height: buttonSize,
    }}
    {...buttonAttributes}
  >
    <Icon type={iconType} size={iconSize} color={iconColor} style={iconStyle} />
    {withTooltip && (
      <span aria-hidden="true" className={styles.toolTip}>
        {tooltipText}
      </span>
    )}
  </button>
)
