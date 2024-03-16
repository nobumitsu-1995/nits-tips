import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const button = style({
  padding: '16px 0',
  width: '100%',
  minHeight: 62,
  backgroundColor: vars.color.link,
  boxShadow: '2px 4px 12px 0px rgba(0, 0, 0, 0.2)',
  border: 'none',
  borderRadius: 8,
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  cursor: 'pointer',
  ':hover': {
    boxShadow: '4px 8px 14px 0px rgba(0, 0, 0, 0.2)',
    transitionDuration: '0.4s',
    transitionProperty: 'box-shadow',
  },
  ':active': {
    boxShadow: 'inherit',
    transitionDuration: '0.2s',
  },
})

const disableHoverAction = style({
  ':hover': {
    boxShadow: '2px 4px 12px 0px rgba(0, 0, 0, 0.2)',
  },
  ':active': {
    boxShadow: '2px 4px 12px 0px rgba(0, 0, 0, 0.2)',
  },
})

export const disabled = style([
  disableHoverAction,
  {
    backgroundColor: vars.color.lightGray,
    cursor: 'not-allowed',
  },
])

const rotate = keyframes({
  to: { transform: 'rotate(360deg)' },
})

export const loading = style([
  disableHoverAction,
  {
    cursor: 'inherit',
    position: 'relative',
    '::before': {
      content: '',
      width: 25,
      height: 25,
      borderRadius: '50%',
      border: 'dotted 3px',
      borderColor: '#00000030 #fff #ffffff50',
      margin: 'auto',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      animation: `${rotate} 0.8s steps(13) infinite`,
    },
  },
])
