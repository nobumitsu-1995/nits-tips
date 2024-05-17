import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { lineClamp } from '../../../../styles/variables.css'
import { hover } from '../../../../styles/global.css'

export const img = style([
  hover,
  {
    width: 'calc(100% + 40px)',
    marginTop: 8,
    transform: 'translateX(-20px)',
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
