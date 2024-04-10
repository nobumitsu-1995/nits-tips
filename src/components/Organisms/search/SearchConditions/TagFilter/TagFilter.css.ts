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
  transform: 'translateY(2px)',
  fontWeight: 'bold',
})

export const buttonContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 4,
})

export const button = style({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  padding: '2px 8px',
  backgroundColor: vars.color.white,
  border: `2px solid ${vars.color.lightGray}`,
  borderRadius: 16,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#eee',
  },
})
