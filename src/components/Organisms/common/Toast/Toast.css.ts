import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const toast = style({
  padding: '20px 40px',
  position: 'fixed',
  top: 32,
  right: 32,
  borderRadius: 8,
  fontWeight: 'bold',
  transitionDuration: '0.4s',
  pointerEvents: 'none',
})

export const succeed = style({
  backgroundColor: vars.color.success,
})

export const failed = style({
  backgroundColor: vars.color.error,
  color: vars.color.white,
})

export const mounted = style({
  opacity: 1,
  transform: 'translateY(0px)',
})

export const unmounted = style({
  opacity: 0,
  transform: 'translateY(-64px)',
})
