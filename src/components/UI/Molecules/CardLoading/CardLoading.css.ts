import { style } from '@vanilla-extract/css'

export const publishedAt = style({
  display: 'flex',
  gap: '0 20px',
  flexWrap: 'wrap',
})

export const publishedAtItem = style({
  width: 130,
})

export const title = style({
  marginTop: 8,
})

export const text = style({
  margin: '8px 0px 12px',
})

export const tagList = style({
  display: 'flex',
  gap: 4,
  flexWrap: 'wrap',
})

export const tagListItem = style({
  width: 90,
})
