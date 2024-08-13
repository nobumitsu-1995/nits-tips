import hljs from 'highlight.js'
import { load } from 'cheerio'
import 'highlight.js/styles/a11y-dark.min.css'

export const convertHighlight = (content: string) => {
  const $ = load(content)

  $('pre').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())

    $(elm).html(result.value)
    $(elm).addClass(elm.attribs.class)
    $('<pre>').replaceWith('<pre tabindex="0">')
  })

  return $.html()
}
