import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { hover } from '../../../../styles/global.css'

export const footer = style({
  padding: '48px 0',
  backgroundColor: vars.color.darkGray,
  textAlign: 'center',
})

export const nav = style({
  marginBottom: 20,
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
    color: vars.color.white,
  },
])

export const copywrite = style({
  color: vars.color.white,
  fontSize: 12,
})
