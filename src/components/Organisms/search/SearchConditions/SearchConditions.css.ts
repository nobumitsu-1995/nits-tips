import { style } from '@vanilla-extract/css'

export const searchConditions = style({
  display: 'flex',
  gap: 16,
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  marginBottom: 16,
})

export const itemContainer = style({
  flexShrink: 0,
})

export const label = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  fontWeight: 'bold',
})

export const container = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 16,
  marginBottom: 12,
})
