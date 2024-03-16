import { globalStyle, style } from '@vanilla-extract/css'
import './reset.css'
import { vars } from './theme.css'

globalStyle(':root', {
  fontFamily: vars.font.bizUD,
  color: vars.color.darkGray,
})

export const hover = style({
  ':hover': {
    opacity: 0.8,
    transitionDuration: '0.3s',
    transitionProperty: 'opacity',
  },
})
