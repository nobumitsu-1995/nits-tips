import { keyframes, style } from '@vanilla-extract/css'

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
