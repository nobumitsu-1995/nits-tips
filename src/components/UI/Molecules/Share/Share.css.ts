import { style } from '@vanilla-extract/css'
import { hover } from '../../../../styles/global.css'

export const share = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

export const link = style([
  hover,
  {
    display: 'block',
    borderRadius: '50%',
  },
])

export const img = style({
  borderRadius: '50%',
})
