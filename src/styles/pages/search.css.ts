import { style } from '@vanilla-extract/css'
import { breakpoint, vars } from '../theme.css'

export const container = style({
  padding: '80px 12px',
  backgroundColor: vars.color.background,
  '@media': {
    [`${breakpoint.medium}`]: {
      padding: '24px 12px',
    },
  },
})

export const cardContainer = style({
  margin: '0 auto',
  width: 994,
  '@media': {
    [`${breakpoint.medium}`]: {
      width: '100%',
    },
  },
})
