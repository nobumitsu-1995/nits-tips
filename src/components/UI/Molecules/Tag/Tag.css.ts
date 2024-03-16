import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { hover } from '../../../../styles/global.css'

export const tag = style([
  hover,
  {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '2px 8px',
    borderRadius: 4,
    backgroundColor: vars.color.gray,
    color: vars.color.white,
    lineHeight: 1.66,
    fontSize: 12,
    textDecoration: 'none',
  },
])

export const image = style({
  width: 16,
  height: 16,
})
