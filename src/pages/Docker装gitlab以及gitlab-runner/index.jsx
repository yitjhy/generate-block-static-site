import React from 'react';
import { marked } from "marked";

let introductionStr = `# Docker安装Gitlab、Gitlab-Runner并实现项目CICD

## 1、安装Gitlab、Gitlab-Runner

**新建docker-compose.yml文件**

\`\`\`yaml
version: '3'

services:
  gitlab:
    image: gitlab/gitlab-ce:latest
    restart: always
    container_name: "gitlab"
    ports:
      - "2210:80"
      - "2222:22"
      - "2443:443"
    volumes:
      - /srv/gitlab/config:/etc/gitlab
      - /srv/gitlab/logs:/var/log/gitlab
      - /src/gitlab/data:/var/opt/gitlab
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://101.43.248.55:2210'
        gitlab_rails["time_zone"] = "Asia/Shanghai"
        gitlab_rails["gitlab_ssh_host"] = "http://101.43.248.55"
        gitlab_rails["gitlab_shell_ssh_port"] = 2222
        nginx["listen_port"] = 80

  gitlab-runner:
    container_name: gitlab-runner
    image: gitlab/gitlab-runner:latest
    restart: always
    extra_hosts:
      - "somehost:101.43.248.55"
    volumes:
      - /srv/gitlab-runner/config:/etc/gitlab-runner
      - /var/run/docker.sock:/var/run/docker.sock
      - /data/.m2/:/.m2/
	  - /usr/local/nginx/html:/workspace/nginx/html  # 映射打包后的地址与宿主机的nginx的静态资源目录
    environment:
      pull_policy: if-not-present
\`\`\`


**docker-compose.yml目录下使用docker-compose启动**


\`\`\`doc
docker-compose up -d
\`\`\`

**启动成功后，根据自己的ip+端口(http://101.43.248.55:2210)即可访问自己的gitlab，自己注册登录即可。**

## 2、配置Gitlab-Runner

### 2.1、进入Gitlab-Runner容器内

\`\`\`bash
docker exec -it gitlab-runner bash
\`\`\`

### 2.2、注册runner

\`\`\`arduino
gitlab-runner register
\`\`\`

### 2.3、输入Gitlab实例的地址

\`\`\`less
Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):
http://192.0.0.171/
\`\`\`

### 2.4、输入token

token查看位置

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/9/171f866515c8f80e~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)



\`\`\`kotlin
Please enter the gitlab-ci token for this runner:
3eJL3283UYjJGp9WxvZG
\`\`\`

### 2.5、输入Runner的描述

\`\`\`markdown
Please enter the gitlab-ci description for this runner:
[5ab09191e6bf]: my-runner
\`\`\`

### 2.6、输入与Runner关联的标签

\`\`\`arduino
Please enter the gitlab-ci tags for this runner (comma separated):
my-tag,another-tag
Registering runner... succeeded                     runner=3eJL3283
\`\`\`

### 2.7、输入Ruuner的执行者, 选择\`shell\`

\`\`\`yaml
Please enter the executor: docker, docker-ssh, parallels, ssh, virtualbox, custom, docker+machine, docker-ssh+machine, kubernetes, shell:
shell
\`\`\`

### 2.8、指定docker版本

\`\`\`vbnet
Please enter the default Docker image (e.g. ruby:2.6):
alpine:latest
Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!
\`\`\`

**注册成功之后，我们可以看到注册的runner**



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/9/171f8725662c697a~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)



## 3、进入gitlab-runner容器, 修改gitlab-runner用户执行权限

> 修改\`/etc/passed\`

![image-20221008153803570](https://raw.githubusercontent.com/yitjhy/cloudImgs/master/image-20221008153803570.png)

### 3.1、在gitlab-runner容器中下载nodejs, 创建node, npm, yarn, pnpm等的软链接

> 否则在ci上会提示找不到npm, yarn等该命令

\`\`\`bash
ln -s /root/.nvm/versions/node/v16.17.1/bin/node /usr/bin/node
ln -s /root/.nvm/versions/node/v16.17.1/bin/npm /usr/bin/npm
ln -s /root/.nvm/versions/node/v16.17.1/bin/yarn /usr/bin/yarn
ln -s /root/.nvm/versions/node/v16.17.1/bin/pnpm /usr/bin/pnpm
\`\`\`

## 4、项目根目录创建 [.gitlab-ci.yml](/Users/jingshuai/workspace/block-static-site/.gitlab-ci.yml)

> 配置下载静态资源不用\`npm i\` 换成使用\`yarn\`或\`pnpm\`; 用npm会很慢并且服务器较小时,还需要配置\`swap\`交换空间

\`\`\`yaml
#当前流水线所需要的镜像环境
image: node:alpine

#缓存，gitlab流水线会将安装的node包移除，需要设置缓存
cache:
  key: node_modules
  paths:
    - node_modules

stages:
  - build2deploy

job_1:
  stage: build2deploy
  tags:
    - shell-runner
  script:
    - pwd
    - yarn
    - echo '依赖下载完成'
    - npm run build
    - echo '构建完成'
    - cp -r build/* /workspace/nginx/html/block
    - echo 'cdn静态资源部署完成'
    - cp -r build/static/* /workspace/nginx/html/cdnfile/block-static-site
    - echo '静态页面部署完成'
\`\`\`

## 其他常见命令
gitlab-runner删除无效runner
\`\`\`
gitlab-runner verify --delete --name xxx
\`\`\`
`;
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