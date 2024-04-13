import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const dropDown = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 16,
  '::after': {
    position: 'absolute',
    content: '',
    width: 10,
    height: 8,
    right: 9,
    top: 10,
    backgroundColor: vars.color.lightGray,
    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
    pointerEvents: 'none',
  },
  selectors: {
    [`&:focus-within::after`]: {
      backgroundColor: vars.color.important,
    },
  },
})

export const label = style({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
})

export const select = style({
  padding: ' 2px 24px 2px 8px',
  transform: 'translateY(1px)',
  border: `2px solid ${vars.color.lightGray}`,
  borderRadius: 4,
  backgroundColor: vars.color.background,
  fontSize: 16,
  appearance: 'none',
  ':focus-within': {
    border: `2px solid ${vars.color.important}`,
    outline: 'none',
  },
})
