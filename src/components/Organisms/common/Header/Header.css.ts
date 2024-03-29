import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { hover } from '../../../../styles/global.css'

export const header = style({
  padding: '48px 0',
  backgroundColor: vars.color.black,
  textAlign: 'center',
  fontFamily: vars.font.nicoKaku,
  color: vars.color.white,
})

export const main = style([
  hover,
  {
    textDecoration: 'none',
    fontSize: 48,
    color: vars.color.white,
  },
])

export const sub = style({
  fontSize: 20,
  letterSpacing: 5,
  transform: 'scaleY(0.7)',
})
