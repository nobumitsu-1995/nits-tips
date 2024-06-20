import { style } from '@vanilla-extract/css'

export const reactionStamp = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 12,
})

export const modalContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100vw',
  height: '100vh',
})

export const modal = style({
  position: 'absolute',
  top: -32,
  zIndex: 2,
})

export const isOpen = style({
  display: 'block',
})
