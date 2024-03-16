import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#000',
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
