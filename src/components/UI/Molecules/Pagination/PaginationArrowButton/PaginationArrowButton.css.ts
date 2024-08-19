import { style } from '@vanilla-extract/css'

export const disabled = style({
  cursor: 'default',
  ':hover': {
    opacity: 1,
  },
})
