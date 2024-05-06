import { style } from '@vanilla-extract/css'
import { breakpoint, vars } from '../../../../styles/theme.css'
import { hover } from '../../../../styles/global.css'

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

export const button = style([
  hover,
  {
    display: 'none',
    '@media': {
      [`${breakpoint.small}`]: {
        position: 'fixed',
        zIndex: 2,
        top: 12,
        right: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: vars.color.lightGray,
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
      },
    },
  },
])

export const modal = style({
  '@media': {
    [`${breakpoint.small}`]: {
      position: 'fixed',
      top: 16,
      left: 0,
    },
  },
})
