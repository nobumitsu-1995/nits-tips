import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    attention: '#FF1D1D',
    link: '#4969DA',
    black: '#000',
    darkGray: '#3d3d3d',
    gray: '#646464',
    lightGray: '#bfbfbf',
    error: '#DA0000',
    success: '#22e959',
    important: '#2271e9',
    white: '#fff',
    background: '#f5fbff',
  },
  font: {
    nicoKaku:
      '"NicoKaku", "BIZ UDPGothic", "Hiragino Kaku Gothic Pro", "Noto Sans JP", sans-serif',
    bizUD:
      '"BIZ UDPGothic", "Hiragino Kaku Gothic Pro", "Noto Sans JP", sans-serif',
  },
})

export const breakpoint = {
  small: 'screen and (max-width: 550px)',
  medium: 'screen and (max-width: 1023px)',
  large: 'screen and (min-width: 1024px)',
}
