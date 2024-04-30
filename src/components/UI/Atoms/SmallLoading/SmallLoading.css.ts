import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

const spin = keyframes({
  from: {
    transform: 'rotate(0)',
  },
  to: {
    transform: 'rotate(359deg)',
  },
})

export const smallLoading = style({
  width: 20,
  height: 20,
  border: `3px solid ${vars.color.gray}`,
  borderTop: '3px solid transparent',
  borderRadius: '50%',
  animation: `${spin} .5s linear 0s infinite`,
})
