import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'

export const formInput = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 40,
  '@media': {
    'screen and (max-width: 660px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 20,
    },
  },
})

export const isTextArea = style({
  alignItems: 'flex-start',
})

export const isTextAreaLabel = style({
  marginTop: 12,
})

export const label = style({
  minWidth: 262,
  fontWeight: 'bold',
})

export const required = style({
  paddingLeft: 8,
  fontSize: 12,
  color: vars.color.error,
})

export const disabled = style({
  opacity: 0.6,
})

export const error = style({
  position: 'absolute',
  left: 302,
  bottom: -24,
  lineHeight: 1.66,
  fontSize: 12,
  fontWeight: 'bold',
  color: vars.color.error,
  '@media': {
    'screen and (max-width: 660px)': {
      left: 0,
    },
  },
})
