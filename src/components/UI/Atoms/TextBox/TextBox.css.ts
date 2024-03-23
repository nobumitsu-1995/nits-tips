import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const textBox = style({
  padding: '10px 16px',
  width: '100%',
  border: `2px solid ${vars.color.lightGray}`,
  borderRadius: 8,
  fontSize: 16,
  '::placeholder': {
    color: vars.color.lightGray,
  },
  ':disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})

export const isError = style({
  border: `4px solid ${vars.color.error}`,
})
