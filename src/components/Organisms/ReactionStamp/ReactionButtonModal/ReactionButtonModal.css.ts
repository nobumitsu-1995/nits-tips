import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const reactionButtonModal = style({
  display: 'inline-flex',
  gap: 4,
  padding: '2px 4px',
  borderRadius: 18,
  backgroundColor: vars.color.white,
  boxShadow: '2px 4px 12px 0px rgba(0, 0, 0, 0.2)',
})
