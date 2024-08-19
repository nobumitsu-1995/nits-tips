import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { hover } from '../../../../styles/global.css'

export const pagination = style({
  display: 'flex',
  gap: 16,
  alignItems: 'center',
})

export const pageButtonList = style({
  display: 'flex',
  gap: 16,
})

export const pageButton = style([
  hover,
  {
    border: 'none',
    background: 'none',
    color: vars.color.link,
    fontSize: 20,
    fontWeight: 'bold',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
])

export const current = style({
  color: vars.color.black,
  textDecoration: 'none',
  cursor: 'default',
})
