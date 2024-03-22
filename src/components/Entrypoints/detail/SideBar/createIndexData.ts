import * as cheerio from 'cheerio'
import type { ComponentProps } from 'react'
import type { ArticleIndex } from '@Organisms/Detail/ArticleIndex'

export const createIndexData = (content: string) => {
  const $ = cheerio.load(content)
  const headings = $('h2, h3').toArray()

  return headings.reduce(
    (arr, current) => {
      /** h3の場合直前のh2の子タイトルになるのでchildTitleに格納する */
      if (current.name === 'h3') {
        const prev = arr[arr.length - 1]
        const childTitle = prev.childTitle ?? []
        const newValue = {
          ...prev,
          childTitle: [
            ...childTitle,
            {
              title:
                current.firstChild?.nodeType === 3
                  ? current.firstChild.data
                  : '',
              href: current.attribs.id,
            },
          ],
        }
        arr.pop()
        arr.push(newValue)
      } else {
        arr.push({
          title:
            current.firstChild?.nodeType === 3 ? current.firstChild.data : '',
          href: current.attribs.id,
        })
      }

      return arr
    },
    [] as ComponentProps<typeof ArticleIndex>['articleIndex'],
  )
}
