import React from 'react';
import { marked } from "marked";
import Template from './../../components/template';
import codes from './../../codes/codes.json';

import Noteindex from './demo/noteindex';

let introductionStr = `# 笔记
1. ##### 断点续传原理  【http1.1提出来的，研究过，代码没在电脑上，只有回成都再看了】

2. ##### ES6模块静态分析

3. ##### [CSP](https://juejin.cn/post/6867941386025435149)  [参考地址2](https://juejin.cn/post/6844903841238876174)

   > 开发者明确告诉客户端（制定比较严格的策略和规则），哪些外部资源是可以加载和执行的 ，即使攻击者发现漏洞，但是它是没办法注入脚本的

   ***调试工具:  Chrome插件——modheader。通过随意设置响应头来测试CSP***

   ***使用方式:***

   \`\`\`nginx
   (方式一) 添加HTTP头信息的Content-Security-Policy的字段,一般通过nginx配置
   		location  ~* .(html)$ {
         add_header Content-Security-Policy "img-src http: data:; style-src 'self'";
       }
   (方式二) 通过网页的<meta>标签
   		<meta http-equiv="Content-Security-Policy" content="script-src 'self'">
   \`\`\`

4. ##### [前端工程化的理解](https://zhuanlan.zhihu.com/p/141195603)

   > 工程化是一种思想，而不是某种技术。其主要目的为了提高效率和降低成本，即提高开发过程中的开发效率，减少不必要的重复工作时间等

   \`\`\`
   (1) 模块化
   		模块化就是把一个大的文件，拆分成多个相互依赖的小文件，按一个个模块来划分
   (2) 组件化
   		页面上所有的东西都可以看成组件，页面是个大型组件，可以拆成若干个中型组件，然后中型组件还可以再拆，拆成若干个小型组件,
   		组件化≠模块化。模块化只是在文件层面上，对代码和资源的拆分；组件化是在设计层面上，对于UI的拆分
   (3) 规范化
     	在项目规划初期制定的好坏对于后期的开发有一定影响。包括的规范有:
       a: 目录结构的制定
       b: 编码规范
       c: 前后端接口规范
       d: 文档规范
       e: 组件管理
       f: Git分支管理
       g: Commit描述规范
       h: 定期codeReview
       i: 视觉图标规范
   (4) 自动化
   		简单重复的工作交给机器来做，自动化也就是有很多自动化工具代替我们来完成，例如持续集成、自动化构建、自动化部署、自动化测试等等
   \`\`\`

5. ##### Node开启子进程的方法有哪些? 进程间如何通信?

6. ##### [Websocket底层原理分析](https://juejin.cn/post/6844904194470576136)

7. ##### [Nodejs事件循环](https://juejin.cn/post/7010308647792148511)

8. ##### [Nodejs 异步IO模型](https://zhuanlan.zhihu.com/p/93289115)   [参考地址2](https://juejin.cn/post/6997761014192144420)

   <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74f82e6d48c24912b5f395504d9466e2~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" style="zoom:100%;" />

9. ##### 尾递归

10. ##### 二叉树的非递归遍历 【和深度 广度其实是一样的】

11. ##### 手写ajax 手写ajax拦截器

    > ajax拦截器其实是直接ajax原生对象的原型上做的手脚, 利用的aop

12. ##### [flexible源码结合webpack-px2rem-loader](https://github.com/amfe/lib-flexible/tree/master)

    > 做移动端适配用的，还是18年看过这个源码，但是当时没有解决1px像素问题，现在听说已经解决了，需要再研究

13. ##### blob对象 【这个用的有点少，就怕面试官问细节】

14. ##### cookie的跨域携带 【这个可以扯的地方就有点多了，啥子微服务，啥子代理，面试千万莫问我】

15. ##### 原型 原型链 【这个得结合块级作用域和函数作用域一起和面试官吹牛】

16. ##### webpack热加载实现机制  【好像是socket实现的，具体没怎么研究】

17. ##### require寻址  【没研究，这是18年面腾讯时问的一道面试题】

18. ##### [webpack4 5区别](https://juejin.cn/post/6990869970385109005#heading-6)

19. ##### webpack的hash计算方式 contentHash  chunkHash hash等根据什么计算

20. ##### 手写curry

21. ##### 数据结构算法

22. ##### threejs 【能拿出来说的只有切换旋转中心，和threejs中的坐标系的0，1在屏幕上不是全屏时怎么计算切换，有空再研究下吧】

23. ##### cesium 【莫法研究，莫法写，删不删？？？？？？？？？？？？？？？？？？？   这个根据面的公司看看简历上写不写这个技术】

24. ##### rn 【这个根据面的公司看看简历上写不写这个技术】

25. ##### 虚拟dom优缺点

    \`\`\`
    优点:
    1. 保证性能下限：框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
    2. 无需手动操作 DOM：我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
    3. 跨平台：虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。
    
    缺点:
    1. 无法进行极致优化：虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。
    2. 首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢。
    \`\`\`

26. ##### 浏览器渲染过程

    \`\`\`html
    1. 解析HTML，生成DOM树（DOM）
    2. 解析CSS，生成CSSOM树（CSSOM）
    3. 将DOM和CSSOM合并，生成布局树（layer-Tree）
    4. 计算渲染树的布局（Layout）
    5. 将布局渲染到屏幕上（Paint）
    \`\`\`

27. ##### xss

    > 类型

    \`\`\`
    (1) 反射型XSS  (XSS代码出现在请求URL)
    (2) 存储型XSS (攻击者输入的恶意代码“存储”在服务器端, 一般出现在网站留言、评论、博客日志等交互处)=
    \`\`\`

    > 防御:

    \`\`\`
    (1) HttpOnly
    (2) 输入检查
    \`\`\`

28. ##### csrf

    > 防御

    \`\`\`
    1. 增加token 在请求中放入攻击者所不能伪造的信息，并且该信总不存在于cookie之中。鉴于此，系统开发人员可以在HTTP请求中以参数的形式加入一个随机产生的token，并在服务端进行token校验，如果请求中没有token或者token内容不正确，则认为是CSRF攻击而拒绝该请求
    2. SameSite Cookies 前端在发展，Cookie也在进化，Cookie有一个新的属性——SateSite。能够解决CSRF攻击的问题。它表示，只能当前域名的网站发出的http请求，携带这个Cookie。当然，由于这是新的cookie属性，在兼容性上肯定会有问题。
    3. 通过Referer识别 根据HTTP协议，在HTTP头中有一个字段叫Referer，它记录了该HTTP请求的来源地址。在通常情况下，访问一个安全受限的页面的请求都来自于同一个网站。不过referer也有可能被伪造。Origin只包含域名信息，而Referer包含了具体的URL 路径。当然，这两者都是可以伪造的，通过 Ajax 中自定义请求头即可，安全性略差。
    4. 网站重要操作增加验证码 CSRF攻击过程中，用户在不知情的情况下构造了网络请求，添加验证码后，强制用户必须与应用进行交互
    \`\`\``;
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

                                    <Template code={codes['noteindex']} describe={"generateblock test 下载使用"} title={"test"}>
                                        <Noteindex />
                                    </Template>
                                </div>
    );
}
export default TemplateWrapper