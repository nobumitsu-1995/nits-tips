import { keyframes, style } from '@vanilla-extract/css'

const shine = keyframes({
  to: {
    backgroundPositionX: '-200%',
  },
})

export const textLoading = style({
  width: '100%',
  background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
  backgroundSize: '200% 100%',
  borderRadius: 4,
  animation: `0.8s ${shine} linear infinite`,
})
