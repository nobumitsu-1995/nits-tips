import { globalStyle } from '@vanilla-extract/css'

globalStyle('p', {
  margin: 0,
  padding: 0,
})

globalStyle('ol, ul, menu, summary', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
})
