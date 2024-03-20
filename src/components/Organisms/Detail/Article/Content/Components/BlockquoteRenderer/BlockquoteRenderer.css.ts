import { style } from '@vanilla-extract/css'
import { vars } from '../../../../../../../styles/theme.css'

export const blockquote = style({
  padding: '8px 24px',
  marginLeft: 28,
  borderLeft: `5px solid ${vars.color.lightGray}`,
  color: vars.color.gray,
  selectors: {
    '> p': {
      margin: 0,
    },
  },
})
