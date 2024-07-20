import React from 'react'
import { CircleButton } from '@/components/UI/Molecules/CircleButton'
import { ICON_TYPE } from '@/components/UI/Atoms/Icon'

type Props = {
  onClick: () => void
  ariaExpanded: boolean
  ariaControls: string
}

export const TriggerButton: React.FC<Props> = ({
  onClick,
  ariaExpanded,
  ariaControls,
}) => (
  <CircleButton
    iconType={ICON_TYPE.add_reaction}
    tooltipText="スタンプでリアクションする"
    onClick={onClick}
    buttonSize={28}
    iconSize={18}
    withTooltip={false}
    buttonAttributes={{
      'aria-expanded': ariaExpanded,
      'aria-controls': ariaControls,
    }}
  />
)
