import { style } from '@vanilla-extract/css'
import { breakpoint } from '../../../../../styles/theme.css'

export const loading = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '20px 16px',
  '@media': {
    [`${breakpoint.medium}`]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [`${breakpoint.small}`]: {
      gridTemplateColumns: '1fr',
    },
  },
})
