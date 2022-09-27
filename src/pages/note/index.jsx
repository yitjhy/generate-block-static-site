import React from 'react';
import { marked } from "marked";
import Template from './../../components/template';
import codes from './../../codes/codes.json';

import Noteindex from './demo/noteindex';

let introductionStr = `# 笔记





1. ### 断点续传原理  【http1.1提出来的，研究过，代码没在电脑上，只有回成都再看了】

2. ### ES6模块静态分析

3. ### [正向代理和反向代理的区别](https://cloud.tencent.com/developer/article/1418457)

   \`\`\`
   1、正向代理其实是客户端的代理，帮助客户端访问其无法访问的服务器资源。反向代理则是服务器的代理，帮助服务器做负载均衡，安全防护等。
   
   2、正向代理一般是客户端架设的，比如在自己的机器上安装一个代理软件。而反向代理一般是服务器架设的，比如在自己的机器集群中部署一个反向代理服务器。
   
   3、正向代理中，服务器不知道真正的客户端到底是谁，以为访问自己的就是真实的客户端。而在反向代理中，客户端不知道真正的服务器是谁，以为自己访问的就是真实的服务器。
   
   4、正向代理和反向代理的作用和目的不同。正向代理主要是用来解决访问限制问题。而反向代理则是提供负载均衡、安全防护等作用。二者均能提高访问速度。
   \`\`\`

4. ### [CSP](https://juejin.cn/post/6867941386025435149)  [参考地址2](https://juejin.cn/post/6844903841238876174)

   > 开发者明确告诉客户端（制定比较严格的策略和规则），哪些外部资源是可以加载和执行的 ，即使攻击者发现漏洞，但是它是没办法注入脚本的

   ***调试工具:  Chrome插件——modheader。通过随意设置响应头来测试CSP***

   ***使用方式:***

   \`\`\`nginx
   (方式一) 添加HTTP头信息的Content-Security-Policy的字段,一般通过nginx配置
   		location  ~* .(html)$ \{
         add_header Content-Security-Policy "img-src http: data:; style-src 'self'";
       }
   (方式二) 通过网页的<meta>标签
   		<meta http-equiv="Content-Security-Policy" content="script-src 'self'">
   \`\`\`

5. ### [前端工程化的理解](https://zhuanlan.zhihu.com/p/141195603)

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

6. ### Node开启子进程的方法有哪些? 进程间如何通信?

7. ### [Websocket底层原理分析](https://juejin.cn/post/6844904194470576136)

8. ### [Nodejs事件循环](https://juejin.cn/post/7010308647792148511)

9. ### [Nodejs 异步IO模型](https://zhuanlan.zhihu.com/p/93289115)   [参考地址2](https://juejin.cn/post/6997761014192144420)

   <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74f82e6d48c24912b5f395504d9466e2~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" style="zoom:100%;" />

10. ### 尾递归

11. ### 二叉树的非递归遍历 【和深度 广度其实是一样的】

12. ### 手写ajax 手写ajax拦截器

    > ajax拦截器其实是直接ajax原生对象的原型上做的手脚, 利用的aop

13. ### [flexible源码结合webpack-px2rem-loader](https://github.com/amfe/lib-flexible/tree/master)

    > 做移动端适配用的，还是18年看过这个源码，但是当时没有解决1px像素问题，现在听说已经解决了，需要再研究

14. ### blob对象 【这个用的有点少，就怕面试官问细节】

15. ### cookie的跨域携带 【这个可以扯的地方就有点多了，啥子微服务，啥子代理，面试千万莫问我】

16. ### 原型 原型链 【这个得结合块级作用域和函数作用域一起和面试官吹牛】

17. ### webpack热加载实现机制  【好像是socket实现的，具体没怎么研究】

18. ### require寻址  【没研究，这是18年面腾讯时问的一道面试题】

19. ### [webpack4 5区别](https://juejin.cn/post/6990869970385109005#heading-6)

20. ### webpack的hash计算方式 contentHash  chunkHash hash等根据什么计算

21. ### 手写curry

22. ### 数据结构算法

23. ### threejs 【能拿出来说的只有切换旋转中心，和threejs中的坐标系的0，1在屏幕上不是全屏时怎么计算切换，有空再研究下吧】

24. ### cesium 【莫法研究，莫法写，删不删？？？？？？？？？？？？？？？？？？？   这个根据面的公司看看简历上写不写这个技术】

25. ### rn 【这个根据面的公司看看简历上写不写这个技术】

26. ### 虚拟dom优缺点

    \`\`\`
    优点:
    1. 保证性能下限：框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
    2. 无需手动操作 DOM：我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
    3. 跨平台：虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。
    
    缺点:
    1. 无法进行极致优化：虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。
    2. 首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢。
    \`\`\`

27. ### 浏览器渲染过程

    \`\`\`html
    1. 解析HTML，生成DOM树（DOM）
    2. 解析CSS，生成CSSOM树（CSSOM）
    3. 将DOM和CSSOM合并，生成布局树（layer-Tree）
    4. 计算渲染树的布局（Layout）
    5. 将布局渲染到屏幕上（Paint）
    \`\`\`

28. ### xss

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

29. ### csrf

    > 防御

    \`\`\`
    1. 增加token 在请求中放入攻击者所不能伪造的信息，并且该信总不存在于cookie之中。鉴于此，系统开发人员可以在HTTP请求中以参数的形式加入一个随机产生的token，并在服务端进行token校验，如果请求中没有token或者token内容不正确，则认为是CSRF攻击而拒绝该请求
    2. SameSite Cookies 前端在发展，Cookie也在进化，Cookie有一个新的属性——SateSite。能够解决CSRF攻击的问题。它表示，只能当前域名的网站发出的http请求，携带这个Cookie。当然，由于这是新的cookie属性，在兼容性上肯定会有问题。
    3. 通过Referer识别 根据HTTP协议，在HTTP头中有一个字段叫Referer，它记录了该HTTP请求的来源地址。在通常情况下，访问一个安全受限的页面的请求都来自于同一个网站。不过referer也有可能被伪造。Origin只包含域名信息，而Referer包含了具体的URL 路径。当然，这两者都是可以伪造的，通过 Ajax 中自定义请求头即可，安全性略差。
    4. 网站重要操作增加验证码 CSRF攻击过程中，用户在不知情的情况下构造了网络请求，添加验证码后，强制用户必须与应用进行交互
    \`\`\`

30. ### [防抖 节流](https://juejin.cn/post/6844903669389885453)

    \`\`\`
    防抖: 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
    截流: 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
    \`\`\`

31. ### webpack原理和过程

32. ### [creatPortal](https://zh-hans.reactjs.org/docs/portals.html) 插槽 【16版本后出来的，这个得结合antd的modal来和面试官吹】

33. ### componentdidcatch

34. ### [react事件委托](https://zhuanlan.zhihu.com/p/165089379)

35. ### pureComponent进行浅对比和component区别就是效率更高，但是写法会注意不少东西，还是没感觉出来优势在哪里，需要再研究

36. ### [memo、useMemo及useCallback解析](https://juejin.cn/post/6844904119358980110)

    \`\`\`
    memo 将函数组件或类组件转换成pureComponent，所以也就有memo功能（高频高渲染时比如列表使用，建议分开使用） props没有改变时，将不会渲染【这里主要在组件嵌套时候有多个兄弟组件时，父组件props更新了，可以不用触发memo的组件视图更新】
    \`\`\`

37. ### Suspense

38. ### context 【这里估计面试的时候连带着react-redux一起给面试官吹牛】

39. ### 即将渲染或者正在渲染的生命周期没法使用setState【这个其实很好理解，我他妈正在下崽或者怀起了，你说再造一个，这不扯蛋吗】

40. ### 生命周期. 	取消了哪些  16以下有哪些  16有哪些  取消的基本都是will相关的生命周期，为什么取消，为什么增加【这个面试前得背一下】

41. ### redux流程 [redux-thunk](https://github.com/reduxjs/redux-thunk/blob/v2.0.0/src/index.js)

    \`\`\`
    面试主要说明redux的思想以及createStore  combineReducers  applyMiddleware  connect，这个肯定得结合 redux-thunk 一起和面试官吹牛, 这里可以和面试官聊的很多,例如:纯函数,高阶组件,插件设计思想,插件编写,其他状态管理,其他插件编写
    \`\`\`

42. ### 魔法注释避免webpack4打包生成的数字js文件。或者配置chunId和moduleId

43. ### webpack打包原理，过程

44. ### Tapable

45. ### webgl矩阵变换 【这个了解就行】

46. ### loader执行顺序，从右到左。 plugin根据绑定的事件触发机制触发

47. ### 先执行plugin再执行loader  loader是在chunk后执行

48. ### 数据类型检测的方式

    **（1）typeof**

    \`\`\`javascript
    console.log(typeof 2);               // number
    console.log(typeof true);            // boolean
    console.log(typeof 'str');           // string
    console.log(typeof []);              // object    
    console.log(typeof function()\{});    // function
    console.log(typeof \{});              // object
    console.log(typeof undefined);       // undefined
    console.log(typeof null);            // object
    \`\`\`

    其中数组、对象、null都会被判断为object，其他判断都正确。

    **（2）instanceof**

    \`instanceof\`可以正确判断对象的类型，**其内部运行机制是判断在其原型链中能否找到该类型的原型**。

    \`\`\`javascript
    console.log(2 instanceof Number);                    // false
    console.log(true instanceof Boolean);                // false 
    console.log('str' instanceof String);                // false 
     
    console.log([] instanceof Array);                    // true
    console.log(function()\{} instanceof Function);       // true
    console.log(\{} instanceof Object);                   // true
    \`\`\`

    可以看到，\`instanceof\`**只能正确判断引用数据类型**，而不能判断基本数据类型。\`instanceof\` 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 \`prototype\` 属性。

    **（3） constructor**

    \`\`\`javascript
    console.log((2).constructor === Number); // true
    console.log((true).constructor === Boolean); // true
    console.log(('str').constructor === String); // true
    console.log(([]).constructor === Array); // true
    console.log((function() \{}).constructor === Function); // true
    console.log((\{}).constructor === Object); // true
    \`\`\`

    \`constructor\`有两个作用，一是判断数据的类型，二是对象实例通过 \`constrcutor\` 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，\`constructor\`就不能用来判断数据类型了：

    \`\`\`javascript
    function Fn()\{};
     
    Fn.prototype = new Array();
     
    var f = new Fn();
     
    console.log(f.constructor===Fn);    // false
    console.log(f.constructor===Array); // true
    \`\`\`

    **（4）Object.prototype.toString.call()**

    \`Object.prototype.toString.call()\` 使用 Object 对象的原型方法 toString 来判断数据类型：

    \`\`\`javascript
    var a = Object.prototype.toString;
     
    console.log(a.call(2));
    console.log(a.call(true));
    console.log(a.call('str'));
    console.log(a.call([]));
    console.log(a.call(function()\{}));
    console.log(a.call(\{}));
    console.log(a.call(undefined));
    console.log(a.call(null));
    \`\`\`

49. ### 排序【插入排序和快排】

    \`\`\`javascript
    // 快排
    const qSort = list => \{
        if( list.length === 0) \{
            return []
        }
        let lesser = [];
        let greater = [];
        let pivot = list[0];
        for (let i = 1;  i< list.length; i++) \{
            if (list[i] < pivot) \{
                lesser.push(list[i])
            } else \{
                greater.push(list[i]);
            }
        }
        return qSort(lesser).concat(pivot, qSort(greater));
    }
    \`\`\`

50. ### react-router-dom react-dom 区别 【还没看的】

51. ### fis 百度的一个构建工具（准备面百度的时候再看）

52. ### 发布订阅者模式【必须非常非常非常非常熟悉，在redux中，react-redux中，webpack的tapable中，基本只要是库都使用了这个设计模式】

53. ### 手写二叉树  树  链表等数据结构

54. ### [事件循环](https://segmentfault.com/a/1190000039819691)

55. ### 深度优先，和广度优先，各自优势

56. ### [Object.create()、new Object()和\{}的区别](https://juejin.cn/post/6844903917835436045)

    > 寄生组合继承就是用的Object.create()

57. ### [react优化减少render](https://juejin.cn/post/7062247271026393118#heading-22)    [参考sorryc文章](https://juejin.cn/post/7143430508481871886)

    \`\`\`
    1.使用防抖函数来减少不必要的setState，从而减少render次数
    2.数据是源数据且需要渲染到视图，才应该放入state中，非必要state，不使用state
    3.类组件用 PureComponent，函数组件用React.memo
    4.用 useCallback 包裹函数
    5.将外层组件的 state 通过 props 一层层传下去，传递到层级很深的子组件的过程。外层组件的 state 发生变化，中间组件都会 Render,用 Context API 或 Redux，MobX 等状态管理工具可以让子组件直接取到值
    6.将不使用state的组件抽离出去，通过chidlren提供
    7.Context 读写分离
    8.避免使用对象字面量，改用useMemo，ref
    \`\`\`

58. ### webpack的一些关键钩子

    <img src="https://raw.githubusercontent.com/yitjhy/cloudImgs/master/Snipaste_2022-02-11_10-57-17.png" style="zoom:100%;" />

59. ### [协议缓存](https://blog.csdn.net/fuzhongmin05/article/details/73610436)

    ![协议缓存](https://raw.githubusercontent.com/yitjhy/cloudImgs/master/%E5%8D%8F%E8%AE%AE%E7%BC%93%E5%AD%98.png)

60. ### 协议缓存的etag计算方式(HTTP1.1)

    > nginx 中 etag 由响应头的 Last-Modified 与 Content-Length 表示为十六进制组合而成

       \`\`\`
    Accept-Ranges: bytes
    Connection: keep-alive
    Content-Length: 92797
    Content-Type: application/javascript
    Date: Mon, 27 Sep 2021 07:21:04 GMT
    ETag: "61516fff-16a7d"
    Last-Modified: Mon, 27 Sep 2021 07:17:19 GMT
    Server: nginx/1.21.3
       \`\`\`

    由 \`etag\` 计算 \`Last-Modified\` 与 \`Content-Length\`，使用 \`js\` 计算如下，结果相符

       \`\`\`javascript
    > new Date(parseInt('61516fff', 16) * 1000)
    Mon Sep 27 2021 15:17:19 GMT+0800 (中国标准时间)
    > parseInt('16a7d', 16)
    92797
       \`\`\`

61. ### tree-shaking      important \{ add } from 'ramda'真的只引入了add这个方法吗？  为什么组件库按需加载还需要单独的loader?

    \`\`\`javascript
    ES6的模块引入是静态分析的，故而可以在编译时正确判断到底加载了什么代码。
    分析程序流，判断哪些变量未被使用、引用，进而删除此代码。
    
    那为什么我们的代码又删不掉呢？
    
    先说原因：都是副作用的锅！
    
    因为webpack4,5打包的时候会进行babel编译，编译后再UglifyJS压缩代码
    
    babel编译时会将代码转换为立即执行函数的Object.defineProperty这种代码，而Object.defineProperty在我们取值，赋值会触发getter，setter，而getter，setter不透明，也就导致了该方法不纯，所以就会被认为有副作用，再到UglifyJS压缩代码时，检测到该代码不纯，所以最后打包生成代码时会发现我们没有使用的方法并没有被删除，也就导致我们tree-shaking失效。
    
    所以我们会发现antd使用了 babel-plugin-import 去帮我们按需加载，elementui使用了 babel-plugin-component 去帮我们按需加载,ramdajs使用了 babel-plugin-ramda 去帮我们实现按需加载
    
    上面提到的这些组件库都去实现了自己的组件库对应的插件去按需加载，其实就相当于：
    import \{ Button, Message } form 'antd'
    转换为：
    import Button from 'antd/es/button';
    import Message from 'antd/es/button';
    
    所以这也就是为什么我们看到的大多数组件库都会有es目录，其实也就是ES模块模式，因为ES模块引入是静态分析，可以在编译时就确定加载了什么代码
    
    那么要做tree-shaking就必然要做静态分析，所以程序中尽量使用es6模块引入，尽量不写有副作用的代码
    
    又因为webpack不支持导出ES模块的模式，所以在开发js库的时候会选择使用rollup打包生成ES6 module版本，方便按需引入，方便tree-shaking，这也就是为什么Vue，React，D3都使用rollup进行构建打包
    \`\`\`



62. ### HTTP的发展过程   http3

    - http1

    - http1.1

      > etag

    - http2优点

      > - 采用二进制格式传输，因为传输的文件格式有很多种，所以依靠文本文件解析有很大的局限性，而二进制只有0和1方便解析与传送，并且没有局限性。
      >
      > - 使用的链接方式不一样，http1使用的默认端口是80，而https使用的端口是443。
      >
      > - 一次tcp链接，可以发起多个request请求，而http1则是一次http请求则会发起一次tcp链接，会降低 页面的加载速度，虽然http1有keep-alive来保持一个连接，但是对于单文件，比如图片再请求之后，还需要保持这样一个连接，对服务器的压力比较大。
      >
      > - 使用了ssl协议加密方式，加密传输。
      >
      > - 请求头的压缩采用了hpack新的加密方式，而http1采用deflate加密方式。
          >
          >   \`\`\`
      >   一方面，头信息使用 gzip 或compress 压缩后再发送；另一方面， 客户端和服务器同时维护一张头信息表，所有字段都会存入这个表，生成一个索引号，以后就不发送同样字段了，只发送索引号，这样就能提高速度了
      >   \`\`\`
      >
      > - [服务器推送，比如请求了一个index.css文件，浏览器也会推送一个index.js文件到浏览器。](https://www.ruanyifeng.com/blog/2018/03/http2_server_push.html)
          >
          >   \`\`\`nginx
      >   (1) 需要服务端配置
      >   	  location / \{
      >           root   /usr/share/nginx/html;
      >           index  index.html index.htm;
      >           http2_push /style.css;
      >           http2_push /example.png;
      >       }
      >   (2) 如果浏览器已有缓存,会导致带宽浪费,即使推送的文件版本更新，浏览器也会优先使用本地缓存。(一种解决办法是，只对第一次访问的用户开启服务器推送)
      >   		server \{
      >           listen 443 ssl http2 default_server;
      >   
      >           ssl_certificate ssl/certificate.pem;
      >           ssl_certificate_key ssl/key.pem;
      >   
      >           root /var/www/html;
      >           http2_push_preload on;
      >   
      >           location = /demo.html \{
      >               add_header Set-Cookie "session=1";
      >               add_header Link $resources;
      >           }
      >     	}
      >   \`\`\`
      >
      >
      >       map $http_cookie $resources \{
      >           "~*session=1" "";
      >           default "</style.css>; as=style; rel=preload";
      >       }
      >
      >   \`\`\`
      > 
      >   \`\`\`

63. ### amd   cmd   commonjs   es6 Module区别

    > 参考地址：

    ​	[前端模块化的理解（AMD,CMD,CommonJs,ES6）](https://juejin.cn/post/6926812902846529550)

    ​    [前端模块化—CommonJS、CMD、AMD、UMD和ESM](https://juejin.cn/post/6857313590337077255#heading-12)

    ​    [前端模块化的十年征程](https://zhuanlan.zhihu.com/p/265632724)

    - CommonJS 【nodejs】

      > - CommonJS规范加载模块是同步的，在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。也就是说，只有加载完成，才能执行后面的操作。由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，读取非常快，所以这样做不会有问题。
      > - 第一次加载某个模块时，Node会缓存该模块。以后再加载该模块，就直接从缓存取出该模块的module.exports属性。
      > - CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。

      \`\`\`javascript
      // lib.js
      var counter = 3;
      function incCounter() \{
        counter++;
      }
      module.exports = \{
        counter: counter,
        incCounter: incCounter,
      };
      // 上面代码输出内部变量counter和改写这个变量的内部方法incCounter。
      
      // 然后，加载上面的模块。
      // main.js
      var counter = require('./lib').counter;
      var incCounter = require('./lib').incCounter;
      
      console.log(counter);  // 3
      incCounter();
      console.log(counter); // 3
      
      // 上面代码说明，counter输出以后，lib.js模块内部的变化就影响不到counter了。
      \`\`\`

    - ES6 Module

      > - 输出和cmd很像
      > - 对外暴露的接口是值的引用。可以用于浏览器端和服务端。
      > - ES module的设计思想是尽量的\`静态化\`，使得\`编译时就能确定模块的依赖关系\`，以及输入和输出的变量

      \`\`\`javascript
      // example.mjs
      let x= \{
          a:5
      };
      let b=0;
      const add = function(val)\{
          x.a+=x.a;
          b=++b;
      }
      export \{x,b,add}
      // main.mjs
      import \{ x,b, add} from './example.mjs';
      add();
      console.log(x,b); // \{a:10} 1 
      // 可以看见 'example.mjs'内部的变化影响到 'b'了，证明暴露的确实是值的引用
      \`\`\`

    - amd 【require.js】

      > - 全称是Asynchronous Module Definition，即“异步模块定义”。
      > - amd规范是异步加载模块，允许指定回调函数。浏览器环境下，要从服务器端加载模块，就必须采用非同步模式，因此浏览器端一般采用AMD规范。
      > - 一般用于浏览器端

      \`\`\`javascript
      define(['Module1', 'Module2'], function (module1, module2) \{
          // 等于在最前面声明并初始化了要用到的所有模块'Module1', 'Module2'
        
          // 即便没用到某个模块 'Module2'，但 'Module2' 还是提前执行了。  **这就CMD要优化的地方**
          var result1 = module1.exec();
          return \{
            result1: result1
          }
      }); 
      require(['math'], function (math) \{
      　 math.sqrt(15)
      });
      \`\`\`

    - cmd 【sea.js】

      > 异步加载模块，一般用于浏览器端

      \`\`\`javascript
      define(function (requie, exports, module) \{
          // 依赖就近书写, 使用的时候才引入模块 'Module1'
          var module1 = require('Module1');
          var result1 = module1.exec();
          module.exports = \{
            result1: result1,
          }
      });
      \`\`\`

      ***CMD && AMD的区别***

      从上面的代码比较中我们可以得出AMD规范和CMD规范的区别

      一方面，在依赖的处理上

        - AMD推崇依赖前置，即通过依赖数组的方式提前声明当前模块的依赖
        - CMD推崇依赖就近，在编程需要用到的时候通过调用require方法动态引入

      另一方面，在本模块的对外输出上

        - AMD推崇通过返回值的方式对外输出
        - CMD推崇通过给module.exports赋值的方式对外输出

      **总结**

        - AMD：异步加载模块，允许指定回调函数。AMD规范是依赖前置的。一般浏览器端会采用AMD规范。
        - CMD：异步加载模块。CMD规范是依赖就近，延迟加载。一般也是用于浏览器端。
        - CommonJs：同步加载模块，一般用于服务器端。对外暴露的接口是值的拷贝
        - ES6：实现简单。对外暴露的接口是值的引用。可以用于浏览器端和服务端。

64. ### 手写图

    > 包含最短路径，等，主要采用的堆栈思想

    \`\`\`javascript
    class Graph \{
        constructor()\{
            this.vertexes = [];
            this.adjList = \{};
        }
    
        addVertix(value) \{
            this.vertexes.push(value);
            this.adjList[value] = [];
        }
    
        addEdge(value1, value2) \{
            this.adjList[value1].push(value2);
            this.adjList[value2].push(value1);
        }
    
        // 广度优先搜索（即横向搜索, 速度相比深度搜索较慢）核心是采用队列实现
        bfs() \{
            let queneArr = ['A'];
            let resArr = [];
            while(queneArr.length > 0)\{
                let shiftNode = queneArr.shift();
                if(!resArr.includes(shiftNode))\{
                    resArr.push(shiftNode);
                }
                this.adjList[shiftNode].forEach(item => \{
                    if(!resArr.includes(item))\{
                        queneArr.push(item)
                    }
                })
            }
            return resArr
        }
    
        // 深度优先搜索（采用先序遍历思想的深度优先搜索） （即纵向搜索，速度相比广度搜索较快）核心是采用栈实现
        dfs() \{
            let stackArr = ['A'];
            let resArr = [];
            while (stackArr.length > 0)\{
                let popNode = stackArr.pop();
                resArr.push(popNode);
                this.adjList[popNode].forEach(item => \{
                    if(!resArr.includes(item) && !stackArr.includes(item))\{
                        stackArr.push(item);
                    }
                })
            }
            return resArr
        }
    }
    
    const graph = new Graph();
    ['A','B','C','D','E','F','G','H','I','J','K','L','M'].forEach(item => \{
       graph.addVertix(item);
    });
    graph.addEdge('A', 'K');
    graph.addEdge('A', 'H');
    graph.addEdge('A', 'E');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('E', 'F');
    graph.addEdge('F', 'G');
    graph.addEdge('H', 'I');
    graph.addEdge('I', 'J');
    graph.addEdge('K', 'L');
    graph.addEdge('L', 'M');
    
    console.log(graph.adjList);
    
    console.time();
    console.log(graph.bfs());       //执行结果为：[ 'A', 'K', 'H', 'E', 'B', 'L', 'I', 'F', 'C', 'M', 'J', 'G', 'D' ]
    console.timeEnd();              // 执行时间为：0.242919921875ms
    
    console.time();
    console.log(graph.dfs());       //执行结果为：[ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' ]
    console.timeEnd();              // 执行时间为0.22607421875ms
    \`\`\`



65. ### [手写二叉搜索树](https://note.youdao.com/ynoteshare/index.html?id=f3511cf552c64d1db014015d6ccee1eb&type=note&_time=1661529355065)

    > 创建二叉树

    \`\`\`javascript
    let binaryTree = \{};
    const creatBinaryTree = (data, tree = \{}) => \{
        if(tree.value) \{
            if(data > tree.value) \{
                if(!tree.right) \{
                    tree['right'] = \{value: data}
                } else \{
                    creatBinaryTree(data, tree.right);
                }
            } else \{
                if(!tree.left) \{
                    tree['left'] = \{value: data}
                } else \{
                    creatBinaryTree(data, tree.left);
                }
            }
        } else \{
            tree['value'] = data;
        }
    };
    [5,2,63,6,47,4,9,-1].forEach(item => \{
        creatBinaryTree(item, binaryTree)
    })
    \`\`\`

    > 搜索最小值 【由于最小值一定在树的最左边，所以这样操作】

    \`\`\`javascript
    const getMin = tree => \{
        while(tree.left) \{
            tree = tree.left
        }
        return tree.value
    }
    let minValue = getMin(binaryTree);
    console.log(minValue);
    \`\`\`

    > 搜索最大值 【由于最大值一定在树的最右边，所以这样操作】

    \`\`\`javascript
    const getMax = tree => \{
        while(tree.right) \{
            tree = tree.right
        }
        return tree.value
    }
    let maxValue = getMax(binaryTree);
    console.log(maxValue);
    \`\`\`

    > 搜索指定值 【非递归搜索，采用的深度优先搜索】

    \`\`\`javascript
    const getTargetValueTree = (targetValue, tree) => \{
        let stackArr = [tree];
        while (stackArr.length) \{
            const popNode = stackArr.pop();
            if (popNode.value === target) \{
                return popNode
            }
            if (popNode.value < target) \{
                popNode.right && stackArr.push(popNode.right)
            }
            if (popNode.value > target) \{
                popNode.left && stackArr.push(popNode.left)
            }
        }
        return '无目标值';
    }
    let targetTree = getTargetValueTree(2, binaryTree);
    console.log(targetTree);
    \`\`\`

    > 中序遍历  【左-->根-->右 遍历出来后已经排好序】

    \`\`\`javascript
    const inOrder = tree => \{
        let stackArr = [];
        let res = [];
        const pushStackArr = node => \{
            stackArr.push(node);
            while (node.left) \{
                node = node.left
                stackArr.push(node)
            }
        }
        pushStackArr(tree);
        while (stackArr.length) \{
            const popNode = stackArr.pop();
            res.push(popNode.value);
            if (popNode && popNode.right) \{
                pushStackArr(popNode.right)
            }
        }
        return res
    }
    console.log(inOrder(tree));
    \`\`\`

66. ### 轮询 长轮询 websocket

- 轮询

  > 轮询是在特定的的时间间隔（如每1秒），由浏览器对服务器发出HTTP request，然后由服务器返回最新的数据给客户端的浏览器。这种传统的HTTP request 的模式带来很明显的缺点 – 浏览器需要不断的向服务器发出请求，然而HTTP request 的header是非常长的，里面包含的有用数据可能只是一个很小的值，这样会占用很多的带宽。

  \`\`\`javascript
  var xhr = new XMLHttpRequest();
      setInterval(function()\{
          xhr.open('GET','/user');
          xhr.onreadystatechange = function()\{
  
          };
          xhr.send();
      },1000)
  \`\`\`

- 长轮询

  > ajax实现: 在发送ajax后,服务器端会阻塞请求直到有数据传递或超时才返回。 客户端JavaScript响应处理函数会在处理完服务器返回的信息后，再次发出请求，重新建立连接。

  \`\`\`javascript
   function ajax()\{
          var xhr = new XMLHttpRequest();
          xhr.open('GET','/user');
          xhr.onreadystatechange = function()\{
                ajax();
          };
          xhr.send();
      }
  \`\`\`

- websocket

  > 轮询与长轮询都是基于HTTP的，两者本身存在着缺陷:轮询需要更快的处理速度；长轮询则更要求处理并发的能力;两者都是“被动型服务器”的体现:服务器不会主动推送信息，而是在客户端发送ajax请求后进行返回的响应。而理想的模型是"在服务器端数据有了变化后，可以主动推送给客户端",这种"主动型"服务器是解决这类问题的很好的方案。Web Sockets就是这样的方案。

  \`\`\`javascript
  // 服务器端
  var Server = require('ws').Server;
  var wss = new Server(\{
      port:2000
  });
  wss.on('connection',function(ws)\{
      ws.on('message',function(data)\{
          ws.send('你好,客户端,我是服务器!');
          console.log(data);
      })
  });
  
  // node客户端
  var WebSocket = require('ws');
  var socket = new WebSocket('ws://localhost:2000/');
  socket.on('open',function()\{
      socket.send('你好，服务器,我是客户端');
  });
  socket.on('message',function(event)\{
      console.log(event);
  })
  
  // html客户端(注:浏览器客户端与node客户端只需要一种)
  <script>
      var socket = new WebSocket('ws://localhost:2000/');
      socket.onopen = function()\{
  
      };
      socket.onmessage = function(event)\{
          console.log(event.data)
      }
  </script>
  \`\`\`



47. ### 设计模式【着重装饰者，策略，单例，发布订阅】

    - 装饰者模式

      > 装饰者模式可以动态的给某个对象添加一些额外的职责，而不会影响从这个类中派生的其他对象。

      \`\`\`javascript
      (function () \{
          var plance = \{
              fire:function()\{
                  console.log("发射普通子弹");
              }
          };
          var missileDecorator = function()\{
              console.log("发射导弹");
          };
          var fire1 = plance.fire;
          plance.fire = function()\{
              fire1();
              missileDecorator();
          };
          plance.fire();
      })()
      \`\`\`

    - 策略模式

      > 定义一系列的算法，把它们一个一个封装起来。将算法的使用与算法的实现分离开来

      \`\`\`javascript
      (function () \{
          //定义算法方法
          var strategies = \{
              "S":function(salary)\{
                  return salary * 4;
              },
              "A":function(salary)\{
                  return salary * 3;
              },
              "B":function(salary)\{
                  return salary * 2;
              }
          };
          //执行算法
          var calculateBouns = function(level,salary)\{
              return strategies[level](salary);
          };
          console.log(calculateBouns('S',2000));
      })()
      \`\`\`

    - 单例模式

      \`\`\`javascript
      (function () \{
          // 管理单例的逻辑代码，如果没有数据则创建，有数据则返回
          var getSingle = function(fn)\{ //参数为创建对象的方法
              var result;
              return function()\{ //判断是Null或赋值
                  console.log(this);
                  return result || (result = fn.apply(this,arguments));
              };
          };
          // 创建登录窗口方法
          var createLoginLayer = function()\{
              var div = document.createElement('div');
              div.innerHTML = '我是登录浮窗';
              div.style.display = 'none';
              document.body.appendChild(div);
              return div;
          };
          // 单例方法
          var createSingleLoginLayer = getSingle(createLoginLayer);
      
          // 使用惰性单例，进行创建
          document.getElementById('loginBtn').onclick = function()\{
              var loginLayer = createSingleLoginLayer();
              loginLayer.style.display = 'block';
          };
      })()
      \`\`\`

    - 观察者模式

      \`\`\`javascript
      function EventTarget() \{
          this.handlers = \{};
      }
      
      EventTarget.prototype = \{
          constructor: EventTarget,
          addEvent: function (type, execFn) \{
              if (type) \{
                  this.handlers[type] = execFn;
              }
          },
          fire: function (type, msg) \{
              this.__eventObj__ = msg;
              this.handlers[type](this)
          }
      };
      
      function Person (name, age) \{
          EventTarget.call(this);
          this.name = name;
          this.age = age;
      }
      Person.prototype = new EventTarget();
      
      Person.prototype.say = function (msg) \{
        this.fire('message', msg)
      };
      
      let person = new Person('yitjhy', 27);
      
      person.addEvent('message', function (event) \{
          console.log(\`我是$\{event.name}，我今年$\{event.age}岁,我说$\{event.__eventObj__}\`)
      });
      
      person.say(999999);
      person.say(666666);
      
      \`\`\`

48. ### 实现继承的方式

    - 原型链继承

      \`\`\`javascript
      function Animal() \{
          this.name = 'animal';
          this.say = function () \{
              console.log(111);
          }
      }
      function Person() \{
          this.age = 16;
          this.name = 'person';
          this.sing = function () \{
              console.log(222);
          }
      }
      Person.prototype = new Animal();
      let people = new Person();
      console.log(people);
      console.log(people.name);
      people.say();
      people.sing();
      
      优点：
      1. 简单，易于实现
      2. 父类新增原型方法、原型属性，子类都能访问到
      缺点：
      1. 无法实现多继承，因为原型一次只能被一个实例更改
      2. 来自原型对象的所有属性被所有实例共享（上诉例子中的color属性）
      3. 创建子类实例时，无法向父构造函数传参
      \`\`\`

    - 构造继承

      \`\`\`javascript
      function Fruit() \{
          this.name = 'fruit';
          this.say = function () \{
              console.log(333);
          }
      }
      function Apple() \{
          Fruit.call(this);
          this.color = 'orenge';
          this.sing = function () \{
              console.log(555);
          }
      }
      let apple = new Apple();
      console.log(apple);
      console.log(apple.name);
      apple.say();
      
      优点：
      1. 解决了原型链继承中子类实例共享父类引用属性的问题
      2. 创建子类实例时，可以向父类传递参数
      3. 可以实现多继承（call多个父类对象）
      缺点：
      1. 实例并不是父类的实例，只是子类的实例
      2. 只能继承父类实例的属性和方法，不能继承其原型上的属性和方法
      3. 无法实现父类原型对象上的函数复用，每个子类都有父类实例函数的副本，影响性能
      \`\`\`

    - 组合继承

      \`\`\`javascript
      function Book() \{
          this.name = 'book';
      }
      Book.prototype.color = 'red';
      function MathBook() \{
          Book.call(this);
          this.editer = 'yitjhy';
      }
      MathBook.prototype = new Book();
      let mathBook = new MathBook();
      console.log(mathBook);
      console.log(mathBook.name);
      console.log(mathBook.color);
      
      优点：
      1. 弥补了构造继承的缺点，现在既可以继承实例的属性和方法，也可以继承原型的属性和方法
      2. 既是子类的实例，也是父类的实例
      3. 可以向父类传递参数
      4. 父类原型对象上的函数可以复用
      缺点：
      1. 调用了两次父类构造函数，生成了两份实例
      2. constructor指向问题
      \`\`\`

    - 寄生组合继承

      > 通过寄生方式，砍掉父类的实例属性，避免了组合继承生成两份实例的缺点, es6的class继承转成es5也是用的这个

      \`\`\`javascript
      function Father(name) \{
          // 属性
          this.name = name || "father";
          // 实例方法
          this.sayName = function () \{
              console.log(this.name);
          };
          this.color = ["red", "blue"];
      }
      // 原型方法
      Father.prototype.age = 18;
      Father.prototype.sayAge = function () \{
          console.log(this.age);
      };
      
      function Son(name) \{
          Father.call(this);
          this.name = name || "son";
      }
      
      Son.prototype = Object.create(Father.prototype);
      Son.prototype.constructor = Son;
      let s = new Son("son");
      
      优点：
      1. 比较完美（js实现继承首选方式）
      缺点：
      1.实现起来较为复杂（可通过Object.create简化）
      \`\`\`

    - es6--class继承

      \`\`\`javascript
      class Father \{
         constructor(a) \{
             this.age = 99;
         }
      }
      
      class Son extends Father \{
        constructor(name) \{
          super(name);
          this.name = name || "son";
        }
      }
      \`\`\`

      > class继承转换后的源代码也是用的寄生组合继承  [转换参考地址](https://es6console.com/)

      \`\`\`javascript
      function _possibleConstructorReturn(self, call) \{
          return call && (typeof call === "object" || typeof call === "function") ? call : self; }
      
      function _inherits(subClass, superClass) \{
          // 继承原型属性和方法
          subClass.prototype = Object.create(
              superClass && superClass.prototype,
              \{
                  constructor: \{
                      value: subClass,
                      enumerable: false,
                      writable: true,
                      configurable: true
                  }
              }
          );
          if (superClass)
          Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : subClass.__proto__ = superClass;
      }
      
      var Father = function Father() \{
          this.age = 99;
      };
      var Son = function (_Father) \{
          function Son(name) \{
              // 继承实例属性和方法
              var _this = _possibleConstructorReturn(
                  this,
                  (Son.__proto__ || Object.getPrototypeOf(Son)).call(this, name)
              );
              _this.name = name || "son";
              return _this;
          }
          _inherits(Son, _Father);
          return Son;
      }(Father);
      let s = new Son("son2");
      console.log(s.name);
      console.log(s.age);
      \`\`\`

    - 拷贝继承

      \`\`\`
      优点：
      1. 可以实现多继承 
      2. 原型属性和实例属性都可继承
      缺点：
      1. 内存开销太大 
      2. 无法继承无法枚举的属性和方法
      \`\`\`

    - 实例继承

      \`\`\`
      缺点：
      1. 不能实现多继承
      \`\`\`

49. ### new 一个对象的过程

    > 原型链继承就是利用的new对象过程的2，3步

    \`\`\`javascript
    function Person () \{
      this.a = 1;
      this.b = 2;
      console.log(6666666)
    }
    
    let g = new Person();
    console.log(g)
    
    1.创建一个空对象
    2.将实例对象g的__proto__指向Person这个构造函数的prototype原型对象, 相当于给实例对象g设置原型对象属性【设置原型对象属性】
    3.将g实例对象作为this参数传入到Person构造函数并调用，进行初始化g实例对象。 相当于给实例对象g设置实例属性【设置实例属性】
    \`\`\`

50. ### [redux-thunk源码解析](https://github.com/reduxjs/redux-thunk/blob/v2.0.0/src/index.js)

    \`\`\`javascript
    // 源码简单的不得了
    // redux-thunk最开始要解决的问题是如何一次dispatch多个action，到后来由于action可以是函数，所以就可以在里面去处理异步
    
    // 主要是这里可以传入函数，那么就可以执行多个action，并且，我们就可以一次dispatch执行多个action，
    // 当然因为这里可以传入函数，那么我们也可以在这个传入的action函数里去发请求什么的，去控制接口请求这些
    function createThunkMiddleware(extraArgument) \{
      return (\{ dispatch, getState }) => next => action => \{
        if (typeof action === 'function') \{
          return action(dispatch, getState, extraArgument);
        }
    
        return next(action);
      };
    }
    
    const thunk = createThunkMiddleware();
    thunk.withExtraArgument = createThunkMiddleware;
    
    export default thunk;
    \`\`\`

51. ### webpack优化

    \`\`\`
    不能盲目去网上搜打包慢什么原因的。
    首先通过webpack-bundle-analyzer去分析打包哪一步慢
    若是loader慢就使用类似loader-cache
    若是打包后文件太大
    1.则优化代码比如import \{ compose } from 'ramda',不全量引入
    2.使用uglifyjs-webpack-plugin去压缩代码
    3.删除注释，日志等
    4.使用extract-text-webpack-plugin分离css等
    5.通过配置externals，并使用cdn
    6.使用CommonsChunkPlugin提取第三方库
    7.有个超级猛的叫做集群打包，使用了这个，任何再大的项目打包都是秒级【没玩过，完全不晓得咋个做，只晓得要切分业务】
    8.待补充
    \`\`\`

52. ### externals 和DllPlugin区别

    > 首先给结论: 配置externals肯定比配置DllPlugin在项目中的构建速度快

    \`\`\`
    因为DllPlugin通过配置文件事先把常用但又构建时间长的代码提前打包好，这样来使构建时间缩短，提高webpack打包速度，这样的话，首先通过DllPlugin来打包至少第一次打包会很慢，后续才会提升，并且后续打包的每一次都至少还会去解析DllPlugin相关的配置文件，而externals是直接忽略，我连解析都不解析，所以优先选用externals
    \`\`\`

53. ### 投影法  二次方程求解  向量法  四叉树

    > 这些都只是了解，只为了面试的时候吹下牛，毕竟面试的时候会写threejs，cesium这些技术进去

    \`\`\`
    图形学中判断是否物体是否碰撞用的，相交的一些算法
    其中二次方程求解是最直观的，但是对算力要求太高
    投影法是做垂线判断两端点是否在同一侧，来判断相交，现在已经不用了，适用范围太小
    向量法【这个搞不懂，大学学的矩阵全还老师了】
    四叉树求碰撞，这个思想比较牛皮，将图形无线分割1，2，3，4象限，那么在一进行计算的时候可以直接pass掉4分之3的计算数据，这是现在游戏里面，或者图形学里面求碰撞的基本做法
    \`\`\`

54. ### 页面优化

    \`\`\`
    雅虎军规，首屏服务端渲染（需要做兼容，比如document对象这些） 协议缓存  cdn这些
    这些都是背书的东西
    \`\`\`

55. ### [react dom diff](https://juejin.cn/post/6844904165026562056)

    \`\`\`
    1.tree diff  很简单就是同层次比较，若不存在，则直接删除，不会再进一步比较
    2.component diff 会看是否是同一组件，若是则继续比较，若不是则直接替换整个组件下的所有子节点。
    3.element diff(这是dom diff中最复杂的地方，比较的是兄弟元素)，这里有一个注意的点就是进行比较的时候是将当前节点在老集合中的位置与lastIndex进行比较，若当前节点在老集合中的位置小lastIndex则进行移动，否则不移动，而lastIndex取的是每一次比较后与当前节点在老集合的位置的最大值，按照这个原理 若ABCD -> BADC则就是B、D不移动，A、C进行移动，可以看见的是在比较兄弟元素时，并没有去销废原先的元素，而只是进行的移动，这样性能上会有很大的提升
    值得注意的刚才说的情况都是在元素有key值得情况，因为用key去识别了两颗树之间当前元素存在与否，若在这种情况下如果我们用下标去标识组件唯一性那么久可能会导致异常的情况，比如有[1,2,3]新增了一个元素到第一个[0,1,2,3],那么这样抽象树种就会把我们添加的第一个元素0识别为老的元素0，在diff的时候会认为0==1所以就会出现视图渲染错误。
    所以这就是官方建议我们不要用类似数组下标去设置key值
    还有个问题就是根据刚才的element diff时候这种顺序diff去判断元素是否移动时如果我们有这样[1,2,3,4] -> [4,1,2,3]，我们进行比较的时候由于4移到了第一个，那么lastIndex永远就是最大，那么在后续的3次比较，1，2，3都会移动，这样的话，就相当于移动了所有元素，但是如果凭直觉的话，应该是直接将4移动到第一位就可以了
    所以官方也有建议我们：在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作
    \`\`\`

56. ### 手写promise

    \`\`\`javascript
        function Promise(exector) \{
            // 这里我们将value 成功时候的值 reason失败时候的值放入属性中
            let self = this;
            // 这里我们加入一个状态标识
            this.status = 'pending';
            this.value = undefined;
            this.reason = undefined;
            // 存储then中成功的回调函数
            this.onResolvedCallbacks = [];
            // 存储then中失败的回调函数
            this.onRejectedCallbacks = [];
    
            // 成功执行
            function resolve(value) \{
                // 判断是否处于pending状态
                if (self.status === 'pending') \{
                    self.value = value;
                    // 这里我们执行之后需要更改状态
                    self.status = 'resolved';
                    // 成功之后遍历then中成功的所有回调函数
                    self.onResolvedCallbacks.forEach(fn => fn());
                }
            }
    
            // 失败执行
            function reject(reason) \{
                // 判断是否处于pending状态
                if (self.status === 'pending') \{
                    self.reason = reason;
                    // 这里我们执行之后需要更改状态
                    self.status = 'rejected';
                    // 成功之后遍历then中失败的所有回调函数
                    self.onRejectedCallbacks.forEach(fn => fn());
                }
            }
    
            // 这里对异常进行处理
            try \{
                exector(resolve, reject);
            } catch(e) \{
                reject(e)
            }
        }
    
        Promise.prototype.then = function(onFulfilled, onRejected) \{
            // 获取下this
            let self = this;
            if (this.status === 'resolved') \{
                onFulfilled(self.value);
            }
    
            if (this.status === 'rejected') \{
                onRejected(self.reason);
            }
    
            // 如果异步执行则位pending状态
            if(this.status === 'pending') \{
                // 保存回调函数
                this.onResolvedCallbacks.push(() => \{
                    onFulfilled(self.value);
                })
    
                this.onRejectedCallbacks.push(() => \{
                    onRejected(self.reason)
                });
            }
        }
    
        let promise = new Promise((resolve, reject) => \{
            setTimeout(() => \{
                if(Math.random() > 0.5) \{
                    resolve('成功');
                } else \{
                    reject('失败');
                }
            })
        })
    
        promise.then((data) => \{
            console.log('success' + data);
        }, (err) => \{
            console.log('err' + err);
        })
    \`\`\`

57. ### 手写compose

    > 用reduce实现是最简单

    \`\`\`javascript
    export default function compose(...funcs) \{
      if (funcs.length === 0) \{
        return arg => arg
      }
      if (funcs.length === 1) \{
        return funcs[0]
      }
      return funcs.reduce((a, b) => (...args) => a(b(...args)))
    }
    \`\`\`

58. ### 函数式编程中的Maybe函子，Either函子等实现基本思路

    > const validation = fn => val => _.isNil(val) ? null : fn(val);

    \`\`\`
    这个思想非常非常非常牛皮，这个思想可以保证我们在遇到异常或者空值操作时compose可以一样使用，基本所有函子都使用的这个思想，只是实现不同，比如Maybe函子在返回的实例当中根据value是null还是undefined去返回Nothing或者Just,而Nothing的map方法是返Nothing，just的map方法是做变形后又返回变形后的just，思路和上面这个方法一样，这个思路和在路由当中也是一样，会在路由最后写一个路由就是为了兜底，防止所有路径都匹配不上时去执行也是用的这个思路
    \`\`\`

59. ### 理解ramdajs中的composeK

    \`\`\`javascript
    官方文章中的解释是：接受一系列函数，返回从右向左的 Kleisli 组合，每个函数必须返回支持 chain 操作的值。
    
    官方示例代码：
     const get = R.curry((propName, obj) => Maybe(obj[propName]))
     //  getStateCode :: Maybe String -> Maybe String
     const getStateCode = R.composeK(
       R.compose(Maybe.of, R.toUpper),
       get('state'),
       get('address'),
       get('user'),
     );
     getStateCode(\{"user":\{"address":\{"state":"ny"}}}); //=> Maybe.Just("NY")
     getStateCode(\{}); //=> Maybe.Nothing()
    
    个人理解：
    1.为什么会有这个composeK方法，其实是因为在函数式编程中我们会使用很多的函子例如：Maybe函子去容错空值情况，
      Either函子去容错程序异常情况，Io函子去处理非纯操作，但是这些操作无法让我们正常使用compose组合，所以composeK，
      通过处理函子的map方法，让我们一样可以这样组合使用
    2.其实这里说的返回chain操作的值其实也就是函数式编程中的函子实例而函子是必须拥有一个map方法,这个map方法
      是用来函子做变形使用的，而这个map方法调用者是函子实例，传入的方法是我们的变形方法，所以composeK其实就
      相当于把下面这个方法compose了，
      const highFnWithFunctorMap = _.curry((fn, functorInstance) => functorInstance.map(fn));
    \`\`\`

60. ### acorn acorn-work [ast在线查看](https://astexplorer.net/) [gogocode](https://gogocode.io/zh/docs/specification/introduction)

    \`\`\`
    使用看起来很简单
    acorn是webpack用来将文件内容生成ast[抽象语法树]的库
    acorn-work是用来遍历acorn生成的ast
    \`\`\`

61. ### 手写loader

    \`\`\`javascript
    // 用来获取loader参数
    const loaderUtils = require("loader-utils");
    
    module.exports = function (markdown) \{
        const options = loaderUtils.getOptions(this);
        // this.cacheable();
        console.log(options);
        console.log(options.data);
        return 11111
    };
    \`\`\`

62. ### 手写plugin webpack插件都是绑定在tapable的生命周期，tapalbe提供了很多hooks，编写插件时根据你的插件作用时候去选择compiler.hooks的类型

    \`\`\`javascript
    const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
    
    class ConsoleLogOnBuildWebpackPlugin \{
        apply(compiler) \{
            compiler.hooks.run.tap(pluginName, compilation => \{
                debugger
                // console.log(compiler);
                console.log(111111);
                debugger
                // console.log(compilation);
                console.log('The webpack build process is starting!!!');
            });
        }
    }
    
    module.exports = ConsoleLogOnBuildWebpackPlugin;
    \`\`\`

63. ### redux中间件源码，意义

    > 其实redux中间件就是重写了dispatch方法

    \`\`\`javascript
        // 下面是redux的applyMiddleware.js的最核心的源码
        const chain = middlewares.map(middleware => middleware(middlewareAPI))
        // 组合调用，依次返回action方法，传入next，依次迭代next，到最后就是next执行的就是store.dispatch，然后在dispatch内部调用传入的reducer，去更新数据,
        // 所以这里最后得到的其实相当于把传入的所有中间件，拉平成一个函数，
        // 所以从这里也可以看到redux中间件函数的写法应该是 store => next => action => \{}
        // 他这种写法可以在组合中固定我们要执行的方法，也可以固定我们参数的参数，这种写法，就比普通的compose用法高级一点了
        dispatch = compose(...chain)(store.dispatch)
    
        // 可以看到中间件其实就是重写了dispatch方法，在dispatch前后去执行中间件
        // 这里记一下，网上有这样的说法，中间件为什么要在dispatch前后执行，因为在redux中，reducer是纯函数，所以不能在reducer中执行，
        // view更新视图也更加不可能，在action中，action只是存放我们要更改的数据，所以也不能在action中更改，所以最后只能在dispatch中去执行中间件
        return \{
          ...store,
          dispatch
        }
    \`\`\`

64. ### react-redux的connect的简单实现【源码实现太复杂了，看的有点懵,各种高阶函数在里面，断点都跟不动，先来一个简单版】

    \`\`\`javascript
    import ReactReduxContext from './Provider'
    export default function connect (mapStateToProps, mapDispatchToProps) \{
         return function (WrappedComment) \{
               return function (props) \{
                     return (
                         <ReactReduxContext>
                             \{
                               (\{state, dispatch}) => \{
                               <WrappedComment \{...mapStateToProps(state, props)} \{...mapDispatchToProps(dispatch, props)} />        
                               }
                             }
                         </ReactReduxContext>
                     
                     )
                    
               }           
         }
    }
    
    // 1.0.0
    this.state = \{
          props: this.computeNextState()
    };
    computeNextState(props = this.props) \{
              return computeNextState(
                this.stateProps,
                this.dispatchProps,
                props
              );
    }
     updateState(props = this.props) \{
              const nextState = this.computeNextState(props);
              if (!shallowEqual(nextState, this.state.props)) \{
                this.setState(\{
                  props: nextState
                });
              }
    }
     componentWillReceiveProps(nextProps) \{
              if (!shallowEqual(nextProps, this.props)) \{
                if (shouldUpdateStateProps) \{
                  this.updateStateProps(nextProps);
                }
    
                if (shouldUpdateDispatchProps) \{
                  this.updateDispatchProps(nextProps);
                }
    
                // 这里触发更新
                this.updateState(nextProps);
              }
            }
    render() \{
           return (<WrappedComponent ref='wrappedInstance' \{...this.state.props} />);
    }
    \`\`\`

65. ### 手写redux中间件

    \`\`\`javascript
    // 日志中间件
    const logger = (store) => (next) => (action) => \{
      // debugger
      console.group(action.type);
      console.info('dispatching', action)
      let result = next(action);
      console.log('next state', store.getState())
      console.groupEnd(action.type)
      return result
    }
    
    let store = createStore(rootReducer, applyMiddleware(logger));
    \`\`\`

66. ### redux Provider

    > 这里是抽取后的Provider核心源码, 可以看见是将redux创建的store放进了Context.Provider里，然后再通过Connect生成的组件Context.Consumer使用消费

    \`\`\`javascript
       const \{ store } = props
       this.state = \{
          storeState: store.getState(654,
          store
        }
       this.unsubscribe = store.subscribe(() => \{
          const newStoreState = store.getState()
          this.setState(storeState: newStoreState)
        })
       render() \{
           const Context = this.props.context || ReactReduxContext
           return (
              <Context.Provider value=\{this.state}>
                \{this.props.children}
              </Context.Provider>
           )
        }
    \`\`\`

67. ### 在react中为什么用react-redux，为什么只使用redux不行，那么react-redux在react中解决了什么问题

    \`\`\`
    在react中使用redux管理数据状态的问题就是数据更新后无法主动更新视图，若要主动更新视图，就需要每次subscribe（订阅）事件手动去setState更新，搞得太麻烦，所以react-redux中通过connect讲store中的值映射到组件的props中，就可以保持store中的数据更新，视图也直接更新，无需手动订阅去setState更新
    \`\`\`

68. ### redux中的combineReducers执行核心代码

    \`\`\`javascript
    	// 经过combineReducers后在redux中就只有一个reducer了
        const nextState = \{}
        // 这里执行是执行所有reducer，若reducer中存在该action type，则将返回值赋值进新的state中，若不存在则返回default中的state
        // createStore就相当于管理了一个合并后的大的state状态
        for (let i = 0; i < finalReducerKeys.length; i++) \{
          // 获取finalReducerKeys的key和value（function）
          const key = finalReducerKeys[i]
          const reducer = finalReducers[key]
          // 当前key的state值
          const previousStateForKey = state[key]
          // 这个位置的reducer执行，并不是真正的reducer执行，这里只是通过reducer取值，以方便放进nextState返回去重新赋值给currentState【createStore文件169行】
          const nextStateForKey = reducer(previousStateForKey, action)
          // 不存在返回值报错
          if (typeof nextStateForKey === 'undefined') \{
            const errorMessage = getUndefinedStateErrorMessage(key, action)
            throw new Error(errorMessage)
          }
          // 新的state放在nextState对应的key里
          nextState[key] = nextStateForKey
          // 判断新的state是不是同一引用， 以检验reducer是不是纯函数
          hasChanged = hasChanged || nextStateForKey !== previousStateForKey
        }
        // 改变了返回nextState 由于createStore的时候会dispatch(\{ type: ActionTypes.INIT })也就是init，所以一开始设置了默认值
        return hasChanged ? nextState : state
    \`\`\`

69. ### webpack打包后webpack内部自己实现的requirejs基本源码

    > 其实就是把打包后的主文件所有的注释删除后就是这个样子

    \`\`\`javascript
    // 其实就是一个自执行函数
     (function(modules) \{
     	var installedModules = \{};
     	function __webpack_require__(moduleId) \{
     		if(installedModules[moduleId]) \{
     			return installedModules[moduleId].exports;
     		}
     		var module = installedModules[moduleId] = \{
     			exports: \{}
     		};
     		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
     		return module.exports;
     	}
     	// Load entry module and return exports
     	return __webpack_require__("./src/index.js");
     })
     (\{
        "./src/index.js": (function(module, exports) \{
            console.log(11111);
        })
     });
    \`\`\`

70. ### fiber

    > 源码太难太难了，不是凡人看的懂的，下面是抄的一段文章上的解释，面试凑合下用吧

    \`\`\`
    出现原因：
    假如更新一个组件需要1毫秒，如果有200个组件要更新，那就需要200毫秒，在这200毫秒的更新过程中，浏览器那个唯一的主线程都在专心运行更新操作，无暇去做任何其他的事情。想象一下，在这200毫秒内，用户往一个input元素中输入点什么，敲击键盘也不会获得响应，因为渲染输入按键结果也是浏览器主线程的工作，但是浏览器主线程被React占着呢，抽不出空，最后的结果就是用户敲了按键看不到反应，等React更新过程结束之后，咔咔咔那些按键一下子出现在input元素里了。
    这就是所谓的界面卡顿，很不好的用户体验。
    
    
    React Fiber的方式：
    破解JavaScript中同步操作时间过长的方法其实很简单——分片。
    
    把一个耗时长的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会。
    
    React Fiber把更新过程碎片化，执行过程如下面的图所示，每执行完一段更新过程，就把控制权交还给React负责任务协调的模块，看看有没有其他紧急任务要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务。
    
    维护每一个分片的数据结构，就是Fiber。
    \`\`\`


### setState是异步还是同步

\`\`\`
setState其实并不是真的异步，只是看起来像是异步执行的，它是通过isBatchingUpdates来判断当前执行是同步还是异步的，如果isBatchingUpdates为true，则按异步执行，反之就是同步执行。要改变isBatchingUpdates，只需要打破React的合成事件，在js的原生事件中执行setState即可
\`\`\`

有个方法中，设置一个状态a=1,然后是个for循环，再然后a=3,请问页面有什么变化

### react事件代理，dom原生事件和react事件的区别

\`\`\`
大多数事件都会委托到顶层的document中,但是有些事件不会冒泡,比如一些特定事件如: mouseover,mouseleave,scroll,还有像媒体事件如:onPlay,表单提交事件:onSubmit这些都是委托在当前元素中
\`\`\`





父子组件嵌套，每个组件的componentDidMout中打印一句话，请问打印顺序，如果改到constructor中打印呢，请问打印顺序



### 哪些操作涉及到跨域

\`\`\`
端口不同,域名不同,协议不同,cookie跨域(expires,domain,httponly,max-age,same-site)
\`\`\`

### node事件循环，浏览器事件循环

\`\`\`
差异: 浏览器环境下，microtask的任务队列是每个macrotask执行完之后执行。而在Node.js中，microtask会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行microtask队列的任务。
\`\`\`



### 内存只有2G，请问怎么用node读取一个10G的文件

\`\`\`
创建一个可读流
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => \{
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8000);
\`\`\`





如果你写了断点续传可能也会问

### express中间件执行顺序

\`\`\`
先写先运行，若不用next，后写的无法执行
核心机制是proto中的next方法
\`\`\`

### redux中间件执行顺序

\`\`\`
挨个迭代 store => next -> action
\`\`\`

### react hooks的优缺点

\`\`\`
1.更容易复用代码
2.代码量更少(合并了生命周期,减少了很多模板代码比如extends,constracor,render)
3.向函数式编程靠近
\`\`\`

### 技术选型

\`\`\`
1.看团队技术实力
2.看团队技术栈偏重
3.看技术生态是否活跃
4.看技术学习成本
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