"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3461],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||l;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5121:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},c="\u57fa\u672c\u6982\u5ff5",p={unversionedId:"04concept1",id:"04concept1",isDocsHomePage:!1,title:"\u57fa\u672c\u6982\u5ff5",description:"\u6d88\u606f",source:"@site/docs/04concept1.md",sourceDirName:".",slug:"/04concept1",permalink:"/docs/04concept1",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/04concept1.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u521d\u8bc6RocketMQ",permalink:"/docs/03whatis"},next:{title:"\u666e\u901a\u6d88\u606f\u53d1\u9001",permalink:"/docs/05message1"}},u=[{value:"\u6d88\u606f",id:"\u6d88\u606f",children:[]},{value:"Tag",id:"tag",children:[]},{value:"Keys",id:"keys",children:[]},{value:"\u961f\u5217",id:"\u961f\u5217",children:[]},{value:"\u751f\u4ea7\u8005",id:"\u751f\u4ea7\u8005",children:[]}],s={toc:u};function d(t){var e=t.components,i=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("h2",{id:"\u6d88\u606f"},"\u6d88\u606f"),(0,l.kt)("p",null,"RocketMQ\u6d88\u606f\u6784\u6210\u975e\u5e38\u7b80\u5355\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u9996\u5148\u662ftopic\uff0c\u8868\u793a\u8981\u53d1\u9001\u7684\u6d88\u606f\u7684\u4e3b\u9898\uff0cbody\u8868\u793a\u6d88\u606f\u7684\u5b58\u50a8\u5185\u5bb9\uff0cproperties\u8868\u793a\u6d88\u606f\u5c5e\u6027\uff0c\u4e0d\u7ba1\u662fRocketMQ\u7684Tag\u8fc7\u6ee4\u8fd8\u662f\u5ef6\u8fdf\u6d88\u606f\u7b49\u90fd\u4f1a\u5229\u7528\u6d88\u606f\u5c5e\u6027\u7684\u80fd\u529b\uff0ctransactionId\u4f1a\u5728\u4e8b\u52a1\u6d88\u606f\u4e2d\u4f7f\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Message",src:n(3687).Z})),(0,l.kt)("p",null,"Message\u53ef\u4ee5\u8bbe\u7f6e\u7684\u5c5e\u6027\u503c\u5305\u62ec\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Topic"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b\uff0c\u6d88\u606f\u6240\u5c5etopic\u7684\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Body"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b\uff0c\u6d88\u606f\u4f53")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c\u6d88\u606f\u6807\u7b7e\uff0c\u65b9\u4fbf\u670d\u52a1\u5668\u8fc7\u6ee4\u4f7f\u7528\u3002\u76ee\u524d\u53ea\u652f\u6301\u6bcf\u4e2a\u6d88\u606f\u8bbe\u7f6e\u4e00\u4e2atag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Keys"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c\u4ee3\u8868\u8fd9\u6761\u6d88\u606f\u7684\u4e1a\u52a1\u5173\u952e\u8bcd\uff0c\u670d\u52a1\u5668\u4f1a\u6839\u636ekeys\u521b\u5efa\u54c8\u5e0c\u7d22\u5f15\uff0c\u8bbe\u7f6e\u540e\uff0c\u53ef\u4ee5\u5728Console\u7cfb\u7edf\u6839\u636eTopic\u3001Keys\u6765\u67e5\u8be2\u6d88\u606f\uff0c\u7531\u4e8e\u662f\u54c8\u5e0c\u7d22\u5f15\uff0c\u8bf7\u5c3d\u53ef\u80fd\u4fdd\u8bc1key\u552f\u4e00\uff0c\u4f8b\u5982\u8ba2\u5355\u53f7\uff0c\u5546\u54c1Id\u7b49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flag"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c\u5b8c\u5168\u7531\u5e94\u7528\u6765\u8bbe\u7f6e\uff0cRocketMQ\u4e0d\u505a\u5e72\u9884")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DelayTimeLevel"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c\u6d88\u606f\u5ef6\u65f6\u7ea7\u522b\uff0c0\u8868\u793a\u4e0d\u5ef6\u65f6\uff0c\u5927\u4e8e0\u4f1a\u5ef6\u65f6\u7279\u5b9a\u7684\u65f6\u95f4\u624d\u4f1a\u88ab\u6d88\u8d39")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WaitStoreMsgOK"),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c\u8868\u793a\u6d88\u606f\u662f\u5426\u5728\u670d\u52a1\u5668\u843d\u76d8\u540e\u624d\u8fd4\u56de\u5e94\u7b54\u3002")))),(0,l.kt)("h2",{id:"tag"},"Tag"),(0,l.kt)("p",null,"\u672c\u8282\u4ecb\u7ecdApache RocketMQ\u7684Tag\uff0cTopic\u4e0eTag\u90fd\u662f\u4e1a\u52a1\u4e0a\u7528\u6765\u5f52\u7c7b\u7684\u6807\u8bc6\uff0c\u533a\u5206\u5728\u4e8eTopic\u662f\u4e00\u7ea7\u5206\u7c7b\uff0c\u800cTag\u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u4e8c\u7ea7\u5206\u7c7b\u3002\u4f7f\u7528Tag\u53ef\u4ee5\u5b9e\u73b0\u5bf9Topic\u4e2d\u7684\u6d88\u606f\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Topic\uff1a\u6d88\u606f\u4e3b\u9898\uff0c\u901a\u8fc7Topic\u5bf9\u4e0d\u540c\u7684\u4e1a\u52a1\u6d88\u606f\u8fdb\u884c\u5206\u7c7b\u3002"),(0,l.kt)("li",{parentName:"ul"},"Tag\uff1a\u6d88\u606f\u6807\u7b7e\uff0c\u7528\u6765\u8fdb\u4e00\u6b65\u533a\u5206\u67d0\u4e2aTopic\u4e0b\u7684\u6d88\u606f\u5206\u7c7b\uff0c\u6d88\u606f\u4ece\u751f\u4ea7\u8005\u53d1\u51fa\u5373\u5e26\u4e0a\u7684\u5c5e\u6027\u3002")),(0,l.kt)("p",null,"Topic\u548cTag\u7684\u5173\u7cfb\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Tag",src:n(9694).Z})),(0,l.kt)("p",null,"\u5230\u5e95\u4ec0\u4e48\u65f6\u5019\u8be5\u7528Topic\uff0c\u4ec0\u4e48\u65f6\u5019\u8be5\u7528Tag\uff1f"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4ece\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\u8fdb\u884c\u5224\u65ad\uff1a"),(0,l.kt)("p",null,"\u6d88\u606f\u7c7b\u578b\u662f\u5426\u4e00\u81f4\uff1a\u5982\u666e\u901a\u6d88\u606f\u3001\u4e8b\u52a1\u6d88\u606f\u3001\u5b9a\u65f6\uff08\u5ef6\u65f6\uff09\u6d88\u606f\u3001\u987a\u5e8f\u6d88\u606f\uff0c\u4e0d\u540c\u7684\u6d88\u606f\u7c7b\u578b\u4f7f\u7528\u4e0d\u540c\u7684Topic\uff0c\u65e0\u6cd5\u901a\u8fc7Tag\u8fdb\u884c\u533a\u5206\u3002"),(0,l.kt)("p",null,"\u4e1a\u52a1\u662f\u5426\u76f8\u5173\u8054\uff1a\u6ca1\u6709\u76f4\u63a5\u5173\u8054\u7684\u6d88\u606f\uff0c\u5982\u6dd8\u5b9d\u4ea4\u6613\u6d88\u606f\uff0c\u4eac\u4e1c\u7269\u6d41\u6d88\u606f\u4f7f\u7528\u4e0d\u540c\u7684Topic\u8fdb\u884c\u533a\u5206\uff1b\u800c\u540c\u6837\u662f\u5929\u732b\u4ea4\u6613\u6d88\u606f\uff0c\u7535\u5668\u7c7b\u8ba2\u5355\u3001\u5973\u88c5\u7c7b\u8ba2\u5355\u3001\u5316\u5986\u54c1\u7c7b\u8ba2\u5355\u7684\u6d88\u606f\u53ef\u4ee5\u7528Tag\u8fdb\u884c\u533a\u5206\u3002"),(0,l.kt)("p",null,"\u6d88\u606f\u4f18\u5148\u7ea7\u662f\u5426\u4e00\u81f4\uff1a\u5982\u540c\u6837\u662f\u7269\u6d41\u6d88\u606f\uff0c\u76d2\u9a6c\u5fc5\u987b\u5c0f\u65f6\u5185\u9001\u8fbe\uff0c\u5929\u732b\u8d85\u5e0224\u5c0f\u65f6\u5185\u9001\u8fbe\uff0c\u6dd8\u5b9d\u7269\u6d41\u5219\u76f8\u5bf9\u4f1a\u6162\u4e00\u4e9b\uff0c\u4e0d\u540c\u4f18\u5148\u7ea7\u7684\u6d88\u606f\u7528\u4e0d\u540c\u7684Topic\u8fdb\u884c\u533a\u5206\u3002"),(0,l.kt)("p",null,"\u6d88\u606f\u91cf\u7ea7\u662f\u5426\u76f8\u5f53\uff1a\u6709\u4e9b\u4e1a\u52a1\u6d88\u606f\u867d\u7136\u91cf\u5c0f\u4f46\u662f\u5b9e\u65f6\u6027\u8981\u6c42\u9ad8\uff0c\u5982\u679c\u8ddf\u67d0\u4e9b\u4e07\u4ebf\u91cf\u7ea7\u7684\u6d88\u606f\u4f7f\u7528\u540c\u4e00\u4e2aTopic\uff0c\u5219\u6709\u53ef\u80fd\u4f1a\u56e0\u4e3a\u8fc7\u957f\u7684\u7b49\u5f85\u65f6\u95f4\u800c\u201c\u997f\u6b7b\u201d\uff0c\u6b64\u65f6\u9700\u8981\u5c06\u4e0d\u540c\u91cf\u7ea7\u7684\u6d88\u606f\u8fdb\u884c\u62c6\u5206\uff0c\u4f7f\u7528\u4e0d\u540c\u7684Topic\u3002"),(0,l.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c\u9488\u5bf9\u6d88\u606f\u5206\u7c7b\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u521b\u5efa\u591a\u4e2aTopic\uff0c\u6216\u8005\u5728\u540c\u4e00\u4e2aTopic\u4e0b\u521b\u5efa\u591a\u4e2aTag\u3002\u4f46\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e0d\u540c\u7684Topic\u4e4b\u95f4\u7684\u6d88\u606f\u6ca1\u6709\u5fc5\u7136\u7684\u8054\u7cfb\uff0c\u800cTag\u5219\u7528\u6765\u533a\u5206\u540c\u4e00\u4e2aTopic\u4e0b\u76f8\u4e92\u5173\u8054\u7684\u6d88\u606f\uff0c\u4f8b\u5982\u5168\u96c6\u548c\u5b50\u96c6\u7684\u5173\u7cfb\u3001\u6d41\u7a0b\u5148\u540e\u7684\u5173\u7cfb\u3002"),(0,l.kt)("h2",{id:"keys"},"Keys"),(0,l.kt)("p",null,"Apache RocketMQ\u6bcf\u4e2a\u6d88\u606f\u53ef\u4ee5\u5728\u4e1a\u52a1\u5c42\u9762\u7684\u8bbe\u7f6e\u552f\u4e00\u6807\u8bc6\u7801keys\u5b57\u6bb5\uff0c\u65b9\u4fbf\u5c06\u6765\u5b9a\u4f4d\u6d88\u606f\u4e22\u5931\u95ee\u9898\u3002 Broker\u7aef\u4f1a\u4e3a\u6bcf\u4e2a\u6d88\u606f\u521b\u5efa\u7d22\u5f15\uff08\u54c8\u5e0c\u7d22\u5f15\uff09\uff0c\u5e94\u7528\u53ef\u4ee5\u901a\u8fc7topic\u3001key\u6765\u67e5\u8be2\u8fd9\u6761\u6d88\u606f\u5185\u5bb9\uff0c\u4ee5\u53ca\u6d88\u606f\u88ab\u8c01\u6d88\u8d39\u3002\u7531\u4e8e\u662f\u54c8\u5e0c\u7d22\u5f15\uff0c\u8bf7\u52a1\u5fc5\u4fdd\u8bc1key\u5c3d\u53ef\u80fd\u552f\u4e00\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u6f5c\u5728\u7684\u54c8\u5e0c\u51b2\u7a81\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'   // \u8ba2\u5355Id   \n   String orderId = "20034568923546";   \n   message.setKeys(orderId);   \n')),(0,l.kt)("h2",{id:"\u961f\u5217"},"\u961f\u5217"),(0,l.kt)("p",null,"\u4e3a\u4e86\u652f\u6301\u9ad8\u5e76\u53d1\u548c\u6c34\u5e73\u6269\u5c55\uff0c\u9700\u8981\u5bf9Topic\u8fdb\u884c\u5206\u533a\uff0c\u5728RocketMQ\u4e2d\u8fd9\u88ab\u79f0\u4e3a\u961f\u5217\uff0c\u4e00\u4e2aTopic\u53ef\u80fd\u6709\u591a\u4e2a\u961f\u5217\uff0c\u5e76\u4e14\u53ef\u80fd\u5206\u5e03\u5728\u4e0d\u540c\u7684Broker\u4e0a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"MessageQueue",src:n(7941).Z})),(0,l.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\u4e00\u6761\u6d88\u606f\uff0c\u5982\u679c\u6ca1\u6709\u91cd\u590d\u53d1\u9001\uff08\u6bd4\u5982\u56e0\u4e3a\u670d\u52a1\u7aef\u6ca1\u6709\u54cd\u5e94\u800c\u8fdb\u884c\u91cd\u8bd5\uff09\uff0c\u5219\u53ea\u4f1a\u5b58\u5728\u5728Topic\u7684\u5176\u4e2d\u4e00\u4e2a\u961f\u5217\u4e2d\uff0c\u6d88\u606f\u5728\u961f\u5217\u4e2d\u6309\u7167\u5148\u8fdb\u5148\u51fa\u7684\u539f\u5219\u5b58\u50a8\uff0c\u6bcf\u6761\u6d88\u606f\u4f1a\u6709\u81ea\u5df1\u7684\u4f4d\u70b9\uff0c\u6bcf\u4e2a\u961f\u5217\u4f1a\u7edf\u8ba1\u5f53\u524d\u6d88\u606f\u7684\u603b\u6761\u6570\uff0c\u8fd9\u4e2a\u79f0\u4e3a\u6700\u5927\u4f4d\u70b9MaxOffset\uff1b\u961f\u5217\u7684\u8d77\u59cb\u4f4d\u7f6e\u5bf9\u5e94\u7684\u4f4d\u7f6e\u53eb\u505a\u8d77\u59cb\u4f4d\u70b9MinOffset\u3002\u961f\u5217\u53ef\u4ee5\u63d0\u5347\u6d88\u606f\u53d1\u9001\u548c\u6d88\u8d39\u7684\u5e76\u53d1\u5ea6\u3002"),(0,l.kt)("h2",{id:"\u751f\u4ea7\u8005"},"\u751f\u4ea7\u8005"),(0,l.kt)("p",null,"\u751f\u4ea7\u8005\uff08Producer\uff09\u5c31\u662f\u6d88\u606f\u7684\u53d1\u9001\u8005\uff0cApache RocketMQ\u62e5\u6709\u4e30\u5bcc\u7684\u6d88\u606f\u7c7b\u578b\uff0c\u53ef\u4ee5\u652f\u6301\u4e0d\u7528\u7684\u5e94\u7528\u573a\u666f\uff0c\u5728\u4e0d\u540c\u7684\u573a\u666f\u4e2d\uff0c\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u6d88\u606f\u8fdb\u884c\u53d1\u9001\u3002\u6bd4\u5982\u5728\u7535\u5546\u4ea4\u6613\u4e2d\u8d85\u65f6\u672a\u652f\u4ed8\u5173\u95ed\u8ba2\u5355\u7684\u573a\u666f\uff0c\u5728\u8ba2\u5355\u521b\u5efa\u65f6\u4f1a\u53d1\u9001\u4e00\u6761\u5ef6\u65f6\u6d88\u606f\u3002\u8fd9\u6761\u6d88\u606f\u5c06\u4f1a\u572830\u5206\u949f\u4ee5\u540e\u6295\u9012\u7ed9\u6d88\u8d39\u8005\uff0c\u6d88\u8d39\u8005\u6536\u5230\u6b64\u6d88\u606f\u540e\u9700\u8981\u5224\u65ad\u5bf9\u5e94\u7684\u8ba2\u5355\u662f\u5426\u5df2\u5b8c\u6210\u652f\u4ed8\u3002\u5982\u652f\u4ed8\u672a\u5b8c\u6210\uff0c\u5219\u5173\u95ed\u8ba2\u5355\u3002\u5982\u5df2\u5b8c\u6210\u652f\u4ed8\u5219\u5ffd\u7565\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u7528\u5230\u5ef6\u8fdf\u6d88\u606f\uff1b\u7535\u5546\u573a\u666f\u4e2d\uff0c\u4e1a\u52a1\u4e0a\u8981\u6c42\u540c\u4e00\u8ba2\u5355\u7684\u6d88\u606f\u4fdd\u6301\u4e25\u683c\u987a\u5e8f\uff0c\u6b64\u65f6\u5c31\u8981\u7528\u5230\u987a\u5e8f\u6d88\u606f\u3002\u5728\u65e5\u5fd7\u5904\u7406\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u63a5\u53d7\u7684\u6bd4\u8f83\u5927\u7684\u53d1\u9001\u5ef6\u8fdf\uff0c\u4f46\u5bf9\u541e\u5410\u91cf\u7684\u8981\u6c42\u5f88\u9ad8\uff0c\u5e0c\u671b\u6bcf\u79d2\u80fd\u5904\u7406\u767e\u4e07\u6761\u65e5\u5fd7\uff0c\u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528\u6279\u91cf\u6d88\u606f\u3002\u5728\u94f6\u884c\u6263\u6b3e\u7684\u573a\u666f\u4e2d\uff0c\u8981\u4fdd\u6301\u4e0a\u6e38\u7684\u6263\u6b3e\u64cd\u4f5c\u548c\u4e0b\u6e38\u7684\u77ed\u4fe1\u901a\u77e5\u4fdd\u6301\u4e00\u81f4\uff0c\u6b64\u65f6\u5c31\u8981\u4f7f\u7528\u4e8b\u52a1\u6d88\u606f\uff0c\u4e0b\u4e00\u8282\u5c06\u4f1a\u4ecb\u7ecd\u5404\u79cd\u7c7b\u578b\u6d88\u606f\u7684\u53d1\u9001\u3002"))}d.isMDXComponent=!0},3687:function(t,e,n){e.Z=n.p+"assets/images/Message-224a4f35e34285e8fcfb71141e41cec4.png"},7941:function(t,e,n){e.Z=n.p+"assets/images/MessageQueue-fb79728bdee77764e50382620552495d.png"},9694:function(t,e,n){e.Z=n.p+"assets/images/Tag-d3d114dcf3f174d165a3749d34c27f7a.png"}}]);