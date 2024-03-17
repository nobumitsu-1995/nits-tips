import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { lineClamp } from '../../../../styles/variables.css'
import { hover } from '../../../../styles/global.css'

export const articleCard = style([
  hover,
  {
    textDecoration: 'none',
    color: vars.color.darkGray,
  },
])

export const date = style({
  color: vars.color.gray,
  fontSize: 11,
})

export const title = style([
  lineClamp,
  {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 1.2,
  },
])

export const text = style([
  lineClamp,
  {
    margin: '8px 0px 12px',
    fontSize: 14,
    lineHeight: 1.4,
    WebkitLineClamp: 4,
  },
])
