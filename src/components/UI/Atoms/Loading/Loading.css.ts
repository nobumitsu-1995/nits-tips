import { createVar, keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

const CIRCLE_NUMBER = 10
const CIRCLE_SIZE = 12
const LOADING_SIZE = 72
const LOADING_RADIUS = (LOADING_SIZE - CIRCLE_SIZE) / 2

const rotate = keyframes({
  to: { transform: 'rotate(360deg)' },
})

export const loading = style({
  position: 'relative',
  display: 'block',
  width: LOADING_SIZE,
  height: LOADING_SIZE,
  animation: `${rotate} 0.8s steps(${CIRCLE_NUMBER}) infinite`,
})

const angle = createVar()
const x = createVar()
const y = createVar()

export const parts = style({
  vars: {
    [angle]: `calc(360deg / ${CIRCLE_NUMBER} * var(--index))`,
    [x]: `calc(cos(${angle}) * ${LOADING_RADIUS}px)`,
    [y]: `calc(sin(${angle}) * ${LOADING_RADIUS}px)`,
  },
  translate: `calc(${x} - 50%) calc(${y} - 50%)`,
  transform: 'scale(calc(0.1 * var(--index)))',
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: CIRCLE_SIZE,
  height: CIRCLE_SIZE,
  borderRadius: '50%',
  backgroundColor: vars.color.darkGray,
  opacity: 'calc(0.1 * var(--index))',
})
