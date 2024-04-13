import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 16,
  marginBottom: 12,
})

export const label = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  fontWeight: 'bold',
})
