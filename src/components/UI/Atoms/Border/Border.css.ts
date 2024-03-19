import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const border = style({
  borderTop: `1px dashed ${vars.color.lightGray}`,
  margin: '36px 0',
})
