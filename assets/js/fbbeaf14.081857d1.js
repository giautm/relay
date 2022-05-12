(self.webpackChunk=self.webpackChunk||[]).push([[78971],{3905:(e,r,t)=>{"use strict";t.r(r),t.d(r,{MDXContext:()=>s,MDXProvider:()=>f,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>l});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){return function(r){var t=u(r.components);return n.createElement(e,a({},r,{components:t}))}},u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(t),f=o,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return t?n.createElement(m,p(p({ref:r},s),{},{components:t})):n.createElement(m,p({ref:r},s))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64070:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>s,toc:()=>l,default:()=>f});var n=t(74034),o=t(79973),a=(t(67294),t(3905)),i=["components"],p={},c=void 0,s={unversionedId:"api-reference/types/Disposable",id:"version-v13.0.0/api-reference/types/Disposable",isDocsHomePage:!1,title:"Disposable",description:"Interface Disposable",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/Disposable.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/Disposable",permalink:"/docs/api-reference/types/Disposable",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/types/Disposable.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1652379389,formattedLastUpdatedAt:"5/12/2022",frontMatter:{}},l=[{value:"Interface <code>Disposable</code>",id:"interface-disposable",children:[],level:4}],u={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"interface-disposable"},"Interface ",(0,a.mdx)("inlineCode",{parentName:"h4"},"Disposable")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"An object with the following key:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"dispose"),": ",(0,a.mdx)("inlineCode",{parentName:"li"},"() => void"),". Disposes of the resource.")))))}f.isMDXComponent=!0}}]);