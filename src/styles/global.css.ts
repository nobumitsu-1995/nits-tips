import { globalStyle } from '@vanilla-extract/css'
import './reset.css'
import { vars } from './theme.css'

globalStyle(':root', {
  fontFamily: vars.font.bizUD,
  color: vars.color.darkGray,
})
