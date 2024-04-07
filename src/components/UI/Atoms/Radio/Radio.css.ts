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
    borderRadius: '50%',
    border: `2px solid ${vars.color.lightGray}`,
  },
  ':focus-within': {
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
})

export const checked = style({
  fontWeight: 'bold',
  '::before': {
    borderColor: vars.color.important,
  },
  '::after': {
    position: 'absolute',
    left: -20,
    top: 2,
    content: '',
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: vars.color.important,
  },
})

export const radio = style([visuallyHidden])
