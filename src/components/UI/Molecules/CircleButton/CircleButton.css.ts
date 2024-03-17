import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { hover } from '../../../../styles/global.css'

export const circleButton = style([
  hover,
  {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3,
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
  },
])

export const toolTip = style({
  opacity: 0,
  transitionDuration: '0.4s',
  position: 'absolute',
  bottom: -15,
  backgroundColor: vars.color.white,
  border: `2px solid ${vars.color.lightGray}`,
  borderRadius: 4,
  content: '',
  width: 100,
  fontSize: 10,
  fontWeight: 'bold',
  pointerEvents: 'none',
  selectors: {
    [`${circleButton}:hover &`]: {
      opacity: 1,
      transitionProperty: 'opacity',
    },
  },
})
