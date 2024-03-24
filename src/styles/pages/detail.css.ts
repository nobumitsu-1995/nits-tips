import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'

export const container = style({
  padding: '80px 0',
  backgroundColor: vars.color.background,
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
})

export const mainContainer = style({
  width: '792px',
})
