import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'

export const container = style({
  padding: '80px 0',
  backgroundColor: vars.color.background,
})

export const cardContainer = style({
  margin: '0 auto',
  width: 994,
})

export const contactForm = style({
  margin: '0 auto',
  width: 792,
})
