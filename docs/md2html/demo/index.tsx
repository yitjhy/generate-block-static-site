import React, { useState } from 'react'
import './index.css'
import { marked } from 'marked'

const Md2Html = () => {
  const [html, setHtml] = useState<string>('')
  const md2html = (mdData: string) => {
    return marked(mdData, {
      renderer: new marked.Renderer(),
      gfm: true,
      breaks: false,
    })
  }
  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtml(md2html(e.target.value))
  }
  return (
    <div className="md2html">
      <div className="left block">
        <textarea name="" id="textarea" onChange={onTextareaChange} placeholder="请输入md" />
      </div>
      <div className="right block" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Md2Html
