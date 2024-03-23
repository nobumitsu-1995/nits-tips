import { style } from '@vanilla-extract/css'
import { vars } from '../../../../../../styles/theme.css'
import { hover } from '../../../../../../styles/global.css'

export const author = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

export const img = style([
  hover,
  {
    borderRadius: '50%',
  },
])

export const role = style({
  lineHeight: 1.25,
  fontSize: 12,
})

export const name = style({
  marginTop: 4,
  lineHeight: 1.25,
})

export const link = style({
  textDecoration: 'none',
  fontWeight: 'bold',
  color: vars.color.darkGray,
  ':hover': {
    textDecoration: 'underline',
  },
})
