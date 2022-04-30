import React from 'react';
import {marked} from "marked";
import Template from './../../components/template';
import codes from './../../codes/codes.json';

import Md2htmlindex from './demo/md2htmlindex';

let introductionStr = `
# md转html代码块

- 命令式生成:  \`generateblock md2html\`

- [代码地址](https://github.com/yitjhy/generate-block-static-site/tree/master/docs/md2html/demo)


`;
let html = marked(introductionStr, {
    renderer: new marked.Renderer(),
    gfm: true,
    breaks: false,
});

const TemplateWrapper = () => {
    return (
        <div className="template">

            <div dangerouslySetInnerHTML={{__html: html}}/>

            <h2>
                代码演示
            </h2>

            <Template code={codes['md2htmlindex']} describe={"generateblock md2html 下载使用"} title={"md转html"}>
                <Md2htmlindex/>
            </Template>
        </div>
    );
}
export default TemplateWrapper