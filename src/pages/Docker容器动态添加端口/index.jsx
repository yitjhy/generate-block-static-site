import React from 'react';
import { marked } from "marked";

let introductionStr = `# Docker容器动态添加端口

1. 停掉docker
\`\`\`
systemcel stop docker
\`\`\`
2. 在宿主机中\`/var/lib/docker/containers/[容器ID]\`/下找到\`hostconfig.json\`
   找到映射IP的位置，复制一个已映射的IP，修改为自己需要的就好（443是我新增的）
\`\`\`
"PortBindings": \{
    "80/tcp": [
      \{
        "HostIp": "",
        "HostPort": "80"
      }
    ],
    "443/tcp": [
      \{
        "HostIp": "",
        "HostPort": "443"
      }
    ]
}
\`\`\`
3. 相同的目录下找到\`config.v2.json\`并修改
\`\`\`
"ExposedPorts": \{
  "443/tcp": \{},
  "80/tcp": \{}
}
\`\`\``;
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