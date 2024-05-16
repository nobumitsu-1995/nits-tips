import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { lineClamp } from '../../../../styles/variables.css'
import { hover } from '../../../../styles/global.css'

export const img = style([
  hover,
  {
    width: '100%',
    marginTop: 8,
  },
])

export const text = style([
  lineClamp,
  {
    margin: '8px 0px 12px',
    height: 58,
    fontSize: 14,
    lineHeight: 1.4,
    textDecoration: 'none',
    color: vars.color.darkGray,
  },
])
