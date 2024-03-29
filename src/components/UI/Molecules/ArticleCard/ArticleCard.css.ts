import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { lineClamp } from '../../../../styles/variables.css'
import { hover } from '../../../../styles/global.css'

export const title = style([
  hover,
  lineClamp,
  {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 1.2,
    color: vars.color.darkGray,
  },
])

export const text = style([
  hover,
  lineClamp,
  {
    margin: '8px 0px 12px',
    fontSize: 14,
    lineHeight: 1.4,
    WebkitLineClamp: 4,
    textDecoration: 'none',
    color: vars.color.darkGray,
  },
])
