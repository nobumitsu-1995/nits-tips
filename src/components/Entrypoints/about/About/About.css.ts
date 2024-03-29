import { style } from '@vanilla-extract/css'
import { breakpoint } from '../../../../styles/theme.css'

export const container = style({
  margin: '0 auto',
  width: 792,
  '@media': {
    [`${breakpoint.medium}`]: {
      width: '100%',
    },
  },
})
