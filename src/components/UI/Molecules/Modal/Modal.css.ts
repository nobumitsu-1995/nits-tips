import { style } from '@vanilla-extract/css'

export const modal = style({
  transition: 'transform 0.3s',
})

export const isHidden = style({
  transform: 'translateX(100vw)',
})

export const isOpen = style({
  transform: 'translateX(0)',
})
