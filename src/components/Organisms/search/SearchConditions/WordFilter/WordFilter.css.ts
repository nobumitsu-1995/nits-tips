import { style } from '@vanilla-extract/css'
import { breakpoint } from '../../../../../styles/theme.css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 16,
  marginBottom: 12,
  '@media': {
    [`${breakpoint.small}`]: {
      gap: 8,
      marginBottom: 4,
    },
  },
})

export const label = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  fontWeight: 'bold',
})
