# md转html

## generateblock md2html 下载使用

```jsx
import React, { useState } from 'react';
import './index.css';
import { marked } from "marked";

const Md2Html = () => {
  const [html, setHtml] = useState();

  const md2html = mdData => {
      let html = marked(mdData, {
          renderer: new marked.Renderer(),
          gfm: true,
          breaks: false,
      });
      return html
  }

  const onTextareaChange = ({target: {value}}) => {
      setHtml(md2html(value))
  }

  return (
    <div className="md2html">
      <div className='left block'>
          <textarea name="" id="textarea"  onChange={onTextareaChange} placeholder='请输入md' />
      </div>
        <div className='right block' dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
}

export default Md2Html

```
