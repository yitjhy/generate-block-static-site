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
      html = html.replace('<p><strong>', '<p class="first"><strong></strong>');
      html = html.replace(
          /<pre><code/g,
          '<pre><span class="pre-header"></span><code',
      );
      html = html.replace(
          /<h2([^>]+?)>([^<]+?)<\/h2>/g,
          '<h2$1><span>$2</span></h2>',
      );
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
