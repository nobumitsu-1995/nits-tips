import { style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme.css'
import { hover } from '../../../../styles/global.css'

export const tab = style([
  hover,
  {
    marginRight: 8,
    padding: '4px 20px',
    backgroundColor: vars.color.lightGray,
    border: 'none',
    borderTop: `8px solid ${vars.color.darkGray}`,
    borderRadius: '8px 8px 0 0',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '3px 0 4px -3px rgba(0, 0, 0, 0.2)',
  },
])

export const currentTab = style({
  backgroundColor: vars.color.white,
})

export const tabList = style({
  display: 'none',
})

export const currentTabList = style({
  display: 'block',
})
