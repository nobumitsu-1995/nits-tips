import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const searchCard = style({
  backgroundColor: '#000000',
  color: '#fff',
})

export const form = style({
  display: 'flex',
  gap: 2,
})

export const input = style({
  height: 40,
  width: 'calc(100% - 48px)',
  border: `2px solid ${vars.color.lightGray}`,
  borderRadius: '16px 0 0 16px',
  padding: '0 12px 0 20px',
  fontSize: 16,
  fontWeight: 'bold',
  '::placeholder': {
    color: vars.color.lightGray,
  },
})

export const button = style({
  height: 40,
  width: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.color.white,
  border: `2px solid ${vars.color.lightGray}`,
  borderRadius: '0 16px 16px 0',
  cursor: 'pointer',
})

export const linkContainer = style({
  marginTop: 20,
  textAlign: 'right',
})

export const link = style({
  fontSize: 12,
})
