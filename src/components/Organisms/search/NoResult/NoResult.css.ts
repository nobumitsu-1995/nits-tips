import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const noResult = style({
  padding: '40px 60px',
  backgroundColor: vars.color.lightGray,
  textAlign: 'center',
  color: vars.color.darkGray,
  fontWeight: 'bold',
  fontSize: 16,
})
