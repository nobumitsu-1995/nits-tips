import { style } from '@vanilla-extract/css'

export const visuallyHidden = style({
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
  height: 1,
  overflow: 'hidden',
  border: 0,
  padding: 0,
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  margin: -1,
})
