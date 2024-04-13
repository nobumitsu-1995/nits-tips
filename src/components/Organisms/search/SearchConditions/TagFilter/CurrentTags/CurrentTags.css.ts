import { style } from '@vanilla-extract/css'
import { vars } from '../../../../../../styles/theme.css'

export const list = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 4,
})

export const listitem = style({
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
