import React from 'react'
import { CircleButton } from '../../CircleButton'
import type { IconType } from '@/components/UI/Atoms/Icon'
import { vars } from '@/styles/theme.css'
import * as styles from './PaginationArrowButton.css'

type Props = {
  iconType: Extract<
    IconType,
    | 'keyboard_arrow_left'
    | 'keyboard_arrow_right'
    | 'keyboard_double_arrow_left'
    | 'keyboard_double_arrow_right'
  >
  onClickButton: () => void
  isDisabled?: boolean
  label: string
}

export const PaginationArrowButton: React.FC<Props> = ({
  iconType,
  onClickButton,
  isDisabled,
  label,
}) => (
  <CircleButton
    iconType={iconType}
    tooltipText=""
    withTooltip={false}
    onClick={onClickButton}
    buttonSize={32}
    buttonColor={isDisabled ? vars.color.lightGray : vars.color.link}
    buttonStyle={isDisabled ? styles.disabled : ''}
    iconSize={20}
    iconColor={vars.color.white}
    buttonAttributes={{
      disabled: isDisabled,
      'aria-label': label,
    }}
  />
)
