import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { visuallyHidden } from '../../../../styles/variables.css'

export const label = style({
  position: 'relative',
  marginLeft: 24,
  cursor: 'pointer',
  '::before': {
    position: 'absolute',
    left: -24,
    top: -2,
    content: '',
    width: 20,
    height: 20,
    backgroundColor: vars.color.background,
    borderRadius: 4,
    border: `2px solid ${vars.color.lightGray}`,
  },
  ':focus-within': {
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  selectors: {
    [`&:focus-within::before `]: {
      border: `3px solid ${vars.color.important}`,
    },
  },
})

export const checked = style({
  fontWeight: 'bold',
  '::before': {
    borderColor: vars.color.important,
    backgroundColor: vars.color.important,
  },
  '::after': {
    position: 'absolute',
    left: -19,
    top: -2,
    content: '',
    width: 10,
    height: 18,
    borderRadius: 4,
    borderBottom: `3px solid ${vars.color.background}`,
    borderRight: `4px solid ${vars.color.background}`,
    transform: 'rotate(55deg) skew(12deg)',
  },
})

export const select = style([visuallyHidden])
