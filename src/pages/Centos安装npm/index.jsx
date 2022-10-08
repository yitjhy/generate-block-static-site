import React from 'react';
import { marked } from "marked";

let introductionStr = `# Centos安装npm

## 下载安装
1. 下载Node.js安装包
\`\`\`
wget https://nodejs.org/dist/v6.9.5/node-v6.9.5-linux-x64.tar.xz
\`\`\`
2. 解压文件
\`\`\`
tar xvf node-v6.9.5-linux-x64.tar.xz
\`\`\`
3. 创建node和npm的软链接
\`\`\`
ln -s /root/node-v6.9.5-linux-x64/bin/node /usr/bin/node
ln -s /root/node-v6.9.5-linux-x64/bin/npm /usr/bin/npm
\`\`\`
4. 查看node、npm版本信息
\`\`\`
node -v
npm -v
\`\`\`

## nvm安装
\`\`\`
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

source /etc/profile 

source ~/.bashrc

nvm --version

nvm ls-remote

nvm install v10.6.0

node -v
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