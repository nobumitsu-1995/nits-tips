import { style } from '@vanilla-extract/css'
import { breakpoint, vars } from '../theme.css'

export const container = style({
  padding: '80px 12px',
  backgroundColor: vars.color.background,
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

export const contactForm = style({
  margin: '0 auto',
  width: 792,
  '@media': {
    [`${breakpoint.medium}`]: {
      width: '100%',
    },
  },
})
