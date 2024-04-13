import { style } from '@vanilla-extract/css'
import { breakpoint } from '../../../../../styles/theme.css'

export const searchTypeSelector = style({
  display: 'flex',
  gap: 16,
  '@media': {
    [`${breakpoint.small}`]: {
      gap: 8,
    },
  },
})
