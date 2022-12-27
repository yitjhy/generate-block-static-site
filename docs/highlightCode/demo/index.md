

# 高亮jsx


## generateblock hightlightCode 下载使用


```tsx
import { useEffect, useState } from 'react'
import './highlight.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'

const jsxCode = `import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(e.target.checked);
};

const App: React.FC = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;

export default App;`

const HighlightCode = () => {
  const [highlightCodes, setHighlightCodes] = useState<string>('')
  const getHighlightCode = () => {
    const res = highlight(jsxCode, languages.jsx, 'jsx')
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
```
