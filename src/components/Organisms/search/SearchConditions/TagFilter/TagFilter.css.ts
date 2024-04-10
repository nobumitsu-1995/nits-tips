import { style } from '@vanilla-extract/css'
import { vars } from '../../../../../styles/theme.css'

export const tagFilter = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 16,
})

export const title = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  transform: 'translateY(2px)',
  fontWeight: 'bold',
})

export const buttonContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 4,
})

export const tagContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  padding: '2px 8px',
  backgroundColor: vars.color.white,
  border: `2px solid ${vars.color.lightGray}`,
  borderRadius: 16,
})

export const button = style({
  padding: 0,
  width: 24,
  height: 24,
  border: 'none',
  borderRadius: '50%',
  backgroundColor: vars.color.white,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#eee',
  },
})
