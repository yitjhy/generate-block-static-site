import React from 'react';
import { marked } from "marked";
import Template from './../../components/template';
import codes from './../../codes/codes.json';

import Contextmenuindex from './demo/contextmenuindex';

let introductionStr = `# 右键菜单

- 命令式生成:  \`generateblock contextmenu\`

- [代码地址](https://github.com/yitjhy/generate-block-static-site/tree/master/docs/contextmenu/demo)`;
let html = marked(introductionStr, {
    renderer: new marked.Renderer(),
    gfm: true,
    breaks: false,
});

const TemplateWrapper = () => {
    return (
        <div className="template">
                                    
        <div dangerouslySetInnerHTML={{__html: html}} />

        <h2>代码演示</h2>

                                    <Template code={codes['contextmenuindex']} describe={"generateblock contextmenu 下载使用"} title={"test"}>
                                        <Contextmenuindex />
                                    </Template>
                                </div>
    );
}
export default TemplateWrapper