import { style } from '@vanilla-extract/css'
import { breakpoint } from '../../../../../styles/theme.css'

export const title = style({
  wordBreak: 'break-all',
  overflowWrap: 'break-word',
  lineHeight: 1.3,
  fontSize: 40,
  fontWeight: 'bold',
})

export const container = style({
  marginTop: 20,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  '@media': {
    [`${breakpoint.medium}`]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 24,
    },
  },
})

export const containerLeft = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  width: 430,
  '@media': {
    [`${breakpoint.medium}`]: {
      width: '100%',
    },
  },
})
