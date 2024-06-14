import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { hover } from '../../../../styles/global.css'

export const reactedButton = style([
  hover,
  {
    padding: '4px 6px',
    backgroundColor: vars.color.white,
    border: `1px solid ${vars.color.darkGray}`,
    borderRadius: 14,
    cursor: 'pointer',
  },
])

export const active = style({
  padding: '3px 5px',
  backgroundColor: vars.color.background,
  border: `2px solid ${vars.color.link}`,
  fontWeight: 'bold',
})

export const count = style({
  marginLeft: 4,
})
