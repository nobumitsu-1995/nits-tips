import { style } from '@vanilla-extract/css'

export const stickyContainer = style({
  height: '100%',
})

export const sideBar = style({
  position: 'sticky',
  top: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const shareContainer = style({
  display: 'flex',
  justifyContent: 'center',
})
