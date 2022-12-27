import React, { useEffect, useState, FC } from 'react'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike.js'
import 'prismjs/components/prism-markup.js'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-tsx.js'
import './highlight.css'

const HighlightCode: FC<{ code: string }> = ({ code }) => {
  const [highlightCodes, setHighlightCodes] = useState('')

  const getHighlightCode = () => {
    const res = highlight(code, languages.tsx, 'tsx')
    setHighlightCodes(res)
  }

  useEffect(() => {
    getHighlightCode()
  }, [])
  return (
    <div>
      <pre className="language-jsx">
        <code dangerouslySetInnerHTML={{ __html: highlightCodes }} />
      </pre>
    </div>
  )
}

export default HighlightCode
