import { style } from '@vanilla-extract/css'
import { breakpoint } from '../../../../styles/theme.css'

export const top = style({
  margin: '80px auto',
  padding: '0 12px',
  maxWidth: 1196,
  '@media': {
    [`${breakpoint.medium}`]: {
      width: '100%',
    },
  },
})

export const container = style({
  marginTop: 34,
})
