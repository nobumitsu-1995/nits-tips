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

export const wrapper = style({
  maxWidth: 1172,
  margin: '0 auto',
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
  '@media': {
    [`${breakpoint.medium}`]: {
      flexDirection: 'column',
    },
  },
})

export const mainContainer = style({
  width: 'calc(100% - 382px)',
  '@media': {
    [`${breakpoint.medium}`]: {
      order: 2,
      width: '100%',
    },
  },
})

export const asideContainer = style({
  width: 382,
  '@media': {
    [`${breakpoint.medium}`]: {
      order: 1,
      width: '100%',
    },
  },
})
