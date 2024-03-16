import { style } from '@vanilla-extract/css'

export const colorContainer = style({
  display: 'flex',
  gap: 20,
})

export const colorSample = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 12,
  fontWeight: 'bold',
})

export const base = style({
  display: 'block',
  width: 50,
  height: 50,
  borderRadius: '100%',
  border: '1px solid rgba(0, 0, 0, 0.1)',
})
