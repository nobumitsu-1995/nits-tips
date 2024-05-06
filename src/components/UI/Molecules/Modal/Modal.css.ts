import { keyframes, style } from '@vanilla-extract/css'

const slideOpen = keyframes({
  from: {
    display: 'none',
    transform: 'translateX(100vw)',
  },
  '1%': {
    display: 'block',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const slideClose = keyframes({
  from: {
    display: 'block',
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(100vw)',
  },
})

export const isHidden = style({
  display: 'none',
  animation: `${slideClose} 0.5s ease`,
})

export const isOpen = style({
  display: 'block',
  animation: `${slideOpen} 0.5s ease`,
})
