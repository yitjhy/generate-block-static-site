import React from 'react';
import { marked } from "marked";
import Template from './../../components/template';
import codes from './../../codes/codes.json';

import Test2index from './demo/test2index';

let introductionStr = ``;
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

                                    <Template code={codes['test2index']} describe={"generateblock test 下载使用"} title={"test"}>
                                        <Test2index />
                                    </Template>
                                </div>
    );
}
export default TemplateWrapper