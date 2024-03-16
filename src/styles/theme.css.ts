import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    link: '#5f7ff0',
    black: '#000',
    darkGray: '#3d3d3d',
    gray: '#646464',
    lightGray: '#bfbfbf',
    error: '#ff2f2f',
    success: '#22e959',
    important: '#2271e9',
    white: '#fff',
    background: '#f5fbff',
  },
  font: {
    primary: 'arial',
  },
})

export const breakpoint = {
  small: 'screen and (max-width: 450px)',
  medium: 'screen and (max-width: 1023px)',
  large: 'screen and (min-width: 1024px)',
}
