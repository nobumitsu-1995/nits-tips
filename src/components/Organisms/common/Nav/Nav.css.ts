import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { hover } from '../../../../styles/global.css'

export const container = style({
  padding: '18px 0',
  backgroundColor: vars.color.white,
})

export const nav = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 40,
})

export const link = style([
  hover,
  {
    fontFamily: vars.font.nicoKaku,
    textDecoration: 'none',
    fontSize: 24,
    color: vars.color.darkGray,
  },
])
