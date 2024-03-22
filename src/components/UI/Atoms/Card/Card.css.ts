import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const card = style({
  backgroundColor: vars.color.white,
  borderRadius: 4,
  boxShadow: '2px 4px 12px 0px rgba(0, 0, 0, 0.2)',
})
