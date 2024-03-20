import React, { useEffect } from 'react'
import { type MarkdownComponents } from '@md-parser/react'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import json from 'highlight.js/lib/languages/json'
import css from 'highlight.js/lib/languages/css'
import go from 'highlight.js/lib/languages/go'
import ruby from 'highlight.js/lib/languages/ruby'
import php from 'highlight.js/lib/languages/php'
import 'highlight.js/styles/a11y-dark.min.css'
import * as styles from './CodeRenderer.css'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('css', css)
hljs.registerLanguage('go', go)
hljs.registerLanguage('ruby', ruby)
hljs.registerLanguage('php', php)

export const CodeRenderer: MarkdownComponents['code'] = ({
  value,
  language,
}) => {
  useEffect(() => {
    hljs.initHighlighting()
  })

  return (
    <pre>
      <code className={`language-${language}`}>{value}</code>
    </pre>
  )
}

export const InlineCodeRenderer: MarkdownComponents['inlineCode'] = ({
  value,
}) => <code className={styles.code}>{value}</code>
