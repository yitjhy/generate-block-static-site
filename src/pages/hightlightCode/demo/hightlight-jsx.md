

# 高亮jsx


## 可以 npx generateblock 下载使用


```jsx
import React, {useEffect, useState} from "react";
import './highlight.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';


const jsxCode = "import { Checkbox } from 'antd';\n" +
    "\n" +
    "function onChange(e) {\n" +
    "  console.log(`checked1133 = ${e.target.checked}`);\n" +
    "}\n" +
    "\n" +
    "ReactDOM.render(<Checkbox onChange={onChange}>Checkbox</Checkbox>, mountNode);"

const HightlightCode = () => {
    const [highlightCodes, setHighlightCodes] = useState('');

    const getHighlightCode = () => {
        const res = highlight(jsxCode, languages.jsx, 'jsx')
        setHighlightCodes(res);
    };

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
};

export default HightlightCode;

```
