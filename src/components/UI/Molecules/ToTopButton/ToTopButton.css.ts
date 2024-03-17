import { keyframes, style } from '@vanilla-extract/css'

export const toTopButton = style({
  position: 'fixed',
  bottom: 30,
  right: 30,
})

const showAnimation = keyframes({
  '0%': {
    display: 'none',
    opacity: 0,
  },
  '1%': {
    display: 'block',
  },
  '100%': {
    opacity: 1,
  },
})

const hiddenAnimation = keyframes({
  '0%': {
    display: 'block',
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
})

export const isShow = style({
  display: 'block',
  animation: `${showAnimation} 0.5s ease`,
})

export const isHidden = style({
  display: 'none',
  animation: `${hiddenAnimation} 0.8s ease`,
})

const arrowAnimation = keyframes({
  '0%': {
    transform: 'translateY(0px)',
    opacity: 1,
  },
  '30%': {
    transform: 'translateY(-38px)',
    opacity: 0,
  },
  '31%': {
    transform: 'translateY(38px)',
    opacity: 0,
  },
  '65%': {
    opacity: 1,
  },
  '100%': {
    transform: 'translateY(0px)',
  },
})

export const icon = style({
  selectors: {
    [`${toTopButton}:hover &`]: {
      animation: `${arrowAnimation} 1.4s ease`,
    },
  },
})
