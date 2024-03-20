import { style } from '@vanilla-extract/css'
import { vars } from '../../../../../../../styles/theme.css'

export const table = style({
  tableLayout: 'auto',
  border: `2px solid ${vars.color.darkGray}`,
  borderCollapse: 'collapse',
})

export const header = style({
  padding: 12,
  backgroundColor: vars.color.black,
  textAlign: 'center',
  border: `1px solid ${vars.color.darkGray}`,
  color: vars.color.white,
})

export const row = style({
  border: `1px solid ${vars.color.darkGray}`,
  selectors: {
    '&:nth-child(2n)': {
      backgroundColor: vars.color.lightGray,
    },
  },
})

export const data = style({
  padding: 12,
  border: `1px solid ${vars.color.darkGray}`,
})
