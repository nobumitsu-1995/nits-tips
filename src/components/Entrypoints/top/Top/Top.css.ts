import { style } from '@vanilla-extract/css'
import { breakpoint } from '../../../../styles/theme.css'

export const top = style({
  margin: '80px auto',
  padding: '0 12px',
  maxWidth: 1196,
  minHeight: 'calc(100vh - 540px)',
  '@media': {
    [`${breakpoint.medium}`]: {
      margin: '32px auto',
      width: '100%',
      minHeight: 'calc(100vh - 440px)',
    },
    [`${breakpoint.small}`]: {
      minHeight: 'calc(100vh - 580px)',
    },
  },
})

export const container = style({
  marginTop: 34,
})

export const fieldset = style({
  border: 'none',
  marginTop: 24,
})

export const legend = style({
  marginBottom: 16,
})
