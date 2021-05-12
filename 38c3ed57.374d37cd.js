(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1142:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},347:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(1142)),i={id:"fetch-query",title:"fetchQuery",original_id:"fetch-query"},c={unversionedId:"fetch-query",id:"version-v3.0.0/fetch-query",isDocsHomePage:!1,title:"fetchQuery",description:"You can use the fetchQuery function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer.",source:"@site/versioned_docs/version-v3.0.0/Modern-fetchQuery.md",slug:"/fetch-query",permalink:"/docs/v3.0.0/fetch-query",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v3.0.0/Modern-fetchQuery.md",version:"v3.0.0",lastUpdatedBy:"Davis Robertson",lastUpdatedAt:1620849510,sidebar:"version-v3.0.0/docs",previous:{title:"Relay Store",permalink:"/docs/v3.0.0/relay-store"},next:{title:"Routing",permalink:"/docs/v3.0.0/routing"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Return Value",id:"return-value",children:[]}],l={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"fetchQuery")," function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import {fetchQuery, graphql} from 'relay-runtime';\n\nconst query = graphql`\n  query ExampleQuery($pageID: ID!) {\n    page(id: $pageID) {\n      name\n    }\n  }\n`;\n\nconst variables = {\n  pageID: '110798995619330',\n};\n\nfetchQuery(environment, query, variables)\n  .then(data => {\n    // access the graphql response\n  });\n")),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"environment"),": The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"./relay-environment"}),"Relay Environment")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"query"),": The ",Object(o.b)("inlineCode",{parentName:"li"},"graphql")," tagged query. ",Object(o.b)("strong",{parentName:"li"},"Note:")," To enable ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"./relay-compat"}),"compatibility mode"),", ",Object(o.b)("inlineCode",{parentName:"li"},"relay-compiler")," enforces the query to be named as ",Object(o.b)("inlineCode",{parentName:"li"},"<FileName>Query"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"variables"),": Object containing set of variables to pass to the GraphQL query, i.e. a mapping from variable name to value.")),Object(o.b)("h2",{id:"return-value"},"Return Value"),Object(o.b)("p",null,"The function returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," that resolves with an object containing data obtained from the query."))}s.isMDXComponent=!0}}]);