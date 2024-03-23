import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const childList = style({
  marginTop: 12,
  paddingLeft: 20,
})

export const listItem = style({
  overflow: 'auto',
  selectors: {
    [`&:not(:first-child)`]: {
      marginTop: 12,
    },
  },
})

export const text = style({
  display: 'flex',
  gap: 4,
  lineHeight: '1.25',
})

export const number = style({
  flexShrink: 0,
})

export const link = style({
  wordBreak: 'break-all',
  overflowWrap: 'break-word',
  textDecoration: 'none',
  color: vars.color.darkGray,
  fontWeight: 'bold',
  ':hover': {
    textDecoration: 'underline',
  },
})
