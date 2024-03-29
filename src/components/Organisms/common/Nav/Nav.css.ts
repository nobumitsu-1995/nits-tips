import { style } from '@vanilla-extract/css'
import { breakpoint, vars } from '../../../../styles/theme.css'
import { hover } from '../../../../styles/global.css'

export const container = style({
  padding: '18px 0',
  backgroundColor: vars.color.white,
  boxShadow: '2px 4px 12px 0px rgba(0, 0, 0, 0.2)',
})

export const nav = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 40,
  '@media': {
    [`${breakpoint.small}`]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
    },
  },
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
