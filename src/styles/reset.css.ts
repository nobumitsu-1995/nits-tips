import { globalStyle } from '@vanilla-extract/css'

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  margin: 0,
  padding: 0,
})

globalStyle('ol, ul, menu, summary', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
})
