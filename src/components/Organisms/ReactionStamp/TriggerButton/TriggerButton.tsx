import React from 'react'
import { CircleButton } from '@/components/UI/Molecules/CircleButton'
import { ICON_TYPE } from '@/components/UI/Atoms/Icon'

type Props = {
  onClick: () => void
}

export const TriggerButton: React.FC<Props> = ({ onClick }) => (
  <CircleButton
    iconType={ICON_TYPE.add_reaction}
    tooltipText="スタンプでリアクションする"
    onClick={onClick}
    buttonSize={28}
    iconSize={18}
    withTooltip={false}
  />
)
