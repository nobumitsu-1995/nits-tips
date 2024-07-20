import { style } from '@vanilla-extract/css'

export const reactionStamp = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 12,
})

export const modal = style({
  position: 'absolute',
  border: 'none',
  background: 'none',
  top: -54,
  left: '-65%',
})
