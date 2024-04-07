import { style } from '@vanilla-extract/css'
import { breakpoint } from '../../../../styles/theme.css'

export const list = style({
  marginTop: 24,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '24px 20px',
  '@media': {
    [`${breakpoint.medium}`]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [`${breakpoint.small}`]: {
      gridTemplateColumns: '1fr',
    },
  },
})
