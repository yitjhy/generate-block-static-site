import React from 'react';
import { marked } from "marked";
import Template from './../../components/template';
import codes from './../../codes/codes.json';

import Dragindex from './demo/dragindex';

let introductionStr = `
# 拖拽代码块
[代码地址](https://github.com/yitjhy/generate-block-static-site/tree/master/docs/hightlightCode)
`;
let html = marked(introductionStr, {
    renderer: new marked.Renderer(),
    gfm: true,
    breaks: false,
});

const TemplateWrapper = () => {
    return (
        <div className="template">
                                    
        <div dangerouslySetInnerHTML={{__html: html}} />

        <h2>
                代码演示
            </h2>

                                    <Template code={codes['dragindex']} describe={"可以 npx generateblock 下载使用"} title={"拖拽"}>
                                        <Dragindex />
                                    </Template>
                                </div>
    );
}
export default TemplateWrapper