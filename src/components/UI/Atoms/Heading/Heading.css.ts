import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const heading = style({
  position: 'relative',
  paddingLeft: 24,
  fontFamily: vars.font.nicoKaku,
  fontSize: 28,
  letterSpacing: 2,
  ':before': {
    position: 'absolute',
    left: 0,
    display: 'block',
    width: 8,
    height: '100%',
    backgroundColor: vars.color.important,
    content: '',
  },
})
