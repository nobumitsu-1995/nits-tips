import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const publishedAt = style({
  display: 'flex',
  gap: '8px 20px',
  flexWrap: 'wrap',
  color: vars.color.gray,
})
