import { style } from '@vanilla-extract/css'

export const reactionButton = style({
  padding: '4px 6px',
  background: 'none',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  ':hover': {
    transitionDuration: '0.3s',
    boxShadow: '2px 2px 6px 1px rgba(0, 0, 0, 0.2)',
  },
  ':active': {
    transitionDuration: '0.1s',
    boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
  },
})
