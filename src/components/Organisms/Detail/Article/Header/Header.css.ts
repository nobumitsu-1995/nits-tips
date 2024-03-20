import { style } from '@vanilla-extract/css'

export const title = style({
  wordBreak: 'break-all',
  overflowWrap: 'break-word',
  lineHeight: 1.3,
  fontSize: 40,
  fontWeight: 'bold',
})

export const container = style({
  marginTop: 20,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
})

export const containerLeft = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  width: 500,
})
