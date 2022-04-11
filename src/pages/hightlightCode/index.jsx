import React from 'react';
import { marked } from "marked";
import Template from './../../components/template';
import codes from './../../codes/codes.json';

import HightlightCodeindex from './demo/hightlightCodeindex';

let introductionStr = `
# 高亮代码块

- 命令式生成:  \`generateblock hightlightCode\`

- [代码地址](https://github.com/yitjhy/generate-block-static-site/tree/master/docs/hightlightCode/demo)


## 何时使用

- 抽屉从父窗体边缘滑入，覆盖住部分\`父窗体\`内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。

- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。
- 单独使用可以表示两种状态之间的切换，和 \`switch\` 类似。区别在于切换 \`switch\` 会直接触发状态改变，而 \`checkbox\` 一般用于状态标记，需要和提交操作配合。

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

                                    <Template code={codes['hightlightCodeindex']} describe={"generateblock hightlightCode 下载使用"} title={"高亮jsx"}>
                                        <HightlightCodeindex />
                                    </Template>
                                </div>
    );
}
export default TemplateWrapper