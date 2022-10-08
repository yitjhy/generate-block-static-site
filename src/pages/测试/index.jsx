import React from 'react';
import { marked } from "marked";

let introductionStr = `# 测试pnpm`;
let html = marked(introductionStr, {
    renderer: new marked.Renderer(),
    gfm: true,
    breaks: false,
});

const TemplateWrapper = () => {
    return <div className="template">
              <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
}
export default TemplateWrapper