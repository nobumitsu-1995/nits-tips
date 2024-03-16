import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { hover } from '../../../../styles/global.css'

export const link = style([
  hover,
  {
    color: vars.color.link,
    fontWeight: 'bold',
  },
])
