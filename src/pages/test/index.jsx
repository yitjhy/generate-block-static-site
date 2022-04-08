import React from 'react';
import { marked } from "marked";
import Template from './../../components/template';
import codes from './../../codes/codes.json';

import Testindex from './demo/testindex';
import Testindex2 from './demo/testindex2';

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

        <Template code={codes['testindex']} describe={"默认"} title={"基本用法"}>
            <Testindex />
        </Template>

                                    <Template code={codes['testindex2']} describe={"默认"} title={"基本用法"}>
                                        <Testindex2 />
                                    </Template>
                                </div>
    );
}
export default TemplateWrapper