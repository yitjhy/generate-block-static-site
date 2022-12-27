import React, { useEffect, useState, FC } from 'react'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import './highlight.css'

const HighlightCode: FC<{ code: string }> = ({ code }) => {
  const [highlightCodes, setHighlightCodes] = useState('')

  const getHighlightCode = () => {
    const res = highlight(code, languages.jsx, 'jsx')
    setHighlightCodes(res)
  }

  useEffect(() => {
    getHighlightCode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
