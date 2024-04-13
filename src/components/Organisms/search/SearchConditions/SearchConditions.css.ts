import { style } from '@vanilla-extract/css'
import { breakpoint } from '../../../../styles/theme.css'

export const container = style({
  '@media': {
    [`${breakpoint.small}`]: {
      fontSize: 12,
    },
  },
})

export const searchConditions = style({
  display: 'flex',
  gap: 16,
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  marginBottom: 16,
  '@media': {
    [`${breakpoint.small}`]: {
      gap: 4,
      marginBottom: 4,
    },
  },
})

export const itemContainer = style({
  flexShrink: 0,
})
