import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'
import { base } from './Theme.css'

export const link = style([
  base,
  {
    backgroundColor: vars.color.link,
  },
])

export const black = style([
  base,
  {
    backgroundColor: vars.color.black,
  },
])

export const darkGray = style([
  base,
  {
    backgroundColor: vars.color.darkGray,
  },
])

export const gray = style([
  base,
  {
    backgroundColor: vars.color.gray,
  },
])

export const lightGray = style([
  base,
  {
    backgroundColor: vars.color.lightGray,
  },
])

export const error = style([
  base,
  {
    backgroundColor: vars.color.error,
  },
])

export const success = style([
  base,
  {
    backgroundColor: vars.color.success,
  },
])

export const important = style([
  base,
  {
    backgroundColor: vars.color.important,
  },
])

export const background = style([
  base,
  {
    backgroundColor: vars.color.background,
  },
])

export const white = style([
  base,
  {
    backgroundColor: vars.color.white,
  },
])
