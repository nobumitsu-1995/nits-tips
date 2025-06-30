import { style } from '@vanilla-extract/css'

export const popup = style({
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '8px',
  zIndex: 1,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  whiteSpace: 'normal',
  wordBreak: 'break-all',
  width: '300px',
  lineHeight: 1.6,
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.2s ease-in, visibility 0.2s ease-in',
})

export const visible = style({
  opacity: 1,
  visibility: 'visible',
})
