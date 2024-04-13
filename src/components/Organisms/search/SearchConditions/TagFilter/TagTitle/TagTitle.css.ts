import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../../../../../styles/theme.css'

export const tagTitle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 3,
  flexShrink: 0,
  fontWeight: 'bold',
  cursor: 'pointer',
})

export const triangle = style({
  display: 'block',
  width: 8,
  height: 6,
  backgroundColor: vars.color.gray,
  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
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

export const tooltip = style({
  position: 'absolute',
  top: 20,
  overflow: 'scroll',
  display: 'none',
  padding: 12,
  maxHeight: 250,
  backgroundColor: vars.color.white,
  border: `2px solid ${vars.color.lightGray}`,
  borderRadius: 4,
  fontSize: 14,
  selectors: {
    [`${tagTitle}:hover &, ${tagTitle}:focus-within &`]: {
      display: 'block',
      animation: `${showAnimation} 0.8s ease`,
    },
  },
})
