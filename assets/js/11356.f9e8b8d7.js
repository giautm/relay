(self.webpackChunk=self.webpackChunk||[]).push([[11356],{36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>v});var r=t(79973),o=t(67294),a=t(73727),i=t(52263),u=t(13919),s=t(10412),c=(0,o.createContext)({collectLink:function(){}}),l=t(44996),f=t(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const v=function(e){var n,t,v=e.isNavLink,g=e.to,m=e.href,p=e.activeClassName,h=e.isActive,b=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,y=void 0===w||w,E=(0,r.Z)(e,d),P=(0,i.default)().siteConfig,C=P.trailingSlash,L=P.baseUrl,S=(0,l.useBaseUrlUtils)().withBaseUrl,D=(0,o.useContext)(c),A=g||m,k=(0,u.Z)(A),R=null==A?void 0:A.replace("pathname://",""),x=void 0!==R?(t=R,y&&function(e){return e.startsWith("/")}(t)?S(t):t):void 0;x&&k&&(x=(0,f.applyTrailingSlash)(x,{trailingSlash:C,baseUrl:L}));var O=(0,o.useRef)(!1),V=v?a.OL:a.rU,T=s.default.canUseIntersectionObserver,M=(0,o.useRef)();(0,o.useEffect)((function(){return!T&&k&&null!=x&&window.docusaurus.prefetch(x),function(){T&&M.current&&M.current.disconnect()}}),[M,x,T,k]);var B=null!==(n=null==x?void 0:x.startsWith("#"))&&void 0!==n&&n,I=!x||!k||B;return x&&k&&!B&&!b&&D.collectLink(x),I?o.createElement("a",Object.assign({href:x},A&&!k&&{target:"_blank",rel:"noopener noreferrer"},E)):o.createElement(V,Object.assign({},E,{onMouseEnter:function(){O.current||null==x||(window.docusaurus.preload(x),O.current=!0)},innerRef:function(e){var n,t;T&&e&&k&&(n=e,t=function(){null!=x&&window.docusaurus.prefetch(x)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(n),M.current.disconnect(),t())}))})),M.current.observe(n))},to:x||""},v&&{isActive:h,activeClassName:p}))}},24973:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>l,translate:()=>c});var r=t(67294),o=/{\w+}/g,a="{}";function i(e,n){var t=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==n?void 0:n[o];if(void 0!==i){var u=r.isValidElement(i)?i:String(i);return t.push(u),a}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(a).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):i.split(a).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}var u=t(64644);function s(e){var n,t,r=e.id,o=e.message;if(void 0===r&&void 0===o)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(t=null!==(n=u[null!=r?r:o])&&void 0!==n?n:o)&&void 0!==t?t:r}function c(e,n){return i(s({message:e.message,id:e.id}),n)}function l(e){var n=e.children,t=e.id,r=e.values;if(n&&"string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");return i(s({message:n,id:t}),r)}},29935:(e,n,t)=>{"use strict";t.d(n,{m:()=>r});var r="default"},13919:(e,n,t)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>o})},28143:(e,n,t)=>{"use strict";t.r(n),t.d(n,{BrowserRouter:()=>r.VK,HashRouter:()=>r.UT,Link:()=>r.rU,MemoryRouter:()=>r.VA,NavLink:()=>r.OL,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=t(73727)},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>a,default:()=>i});var r=t(52263),o=t(13919);function a(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,u=void 0!==i&&i,s=a.absolute,c=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(u)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+l:l}(a,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},28084:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a,useAllPluginInstancesData:()=>i,usePluginData:()=>u});var r=t(52263),o=t(29935);function a(){var e=(0,r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var n=a()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function u(e,n){void 0===n&&(n=o.m);var t=i(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},72389:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});var r=t(67294),o=t(9913);function a(){return(0,r.useContext)(o._)}},48408:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(28143);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!(0,r.matchPath)(n,{path:t.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return a};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=(0,n.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,a,i=(0,n.getActiveVersion)(e,t),u=null==i?void 0:i.docs.find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:u,alternateDocVersions:u?(o=u.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(a[e.name]=n)}))})),a):{}}};n.getDocVersionSuggestions=function(e,t){var r=(0,n.getLatestVersion)(e),o=(0,n.getActiveDocContext)(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},96730:(e,n,t)=>{"use strict";Object.defineProperty(n,"X$",{value:!0}),n.Jo=n.Iw=n.zu=n.yW=n.gB=n.WS=n.gA=n.zh=n._r=void 0;var r=t(70655),o=t(28143),a=(0,r.__importStar)(t(28084)),i=t(48408),u={};n._r=function(){var e;return null!==(e=(0,a.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:u};n.zh=function(e){return(0,a.usePluginData)("docusaurus-plugin-content-docs",e)};n.gA=function(e){void 0===e&&(e={});var t=(0,n._r)(),r=(0,o.useLocation)().pathname;return(0,i.getActivePlugin)(t,r,e)};n.WS=function(e){void 0===e&&(e={});var t=(0,n.gA)(e),r=(0,o.useLocation)().pathname;if(t)return{activePlugin:t,activeVersion:(0,i.getActiveVersion)(t.pluginData,r)}};n.gB=function(e){return(0,n.zh)(e).versions};n.yW=function(e){var t=(0,n.zh)(e);return(0,i.getLatestVersion)(t)};n.zu=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveVersion)(t,r)};n.Iw=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveDocContext)(t,r)};n.Jo=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getDocVersionSuggestions)(t,r)}},80907:(e,n,t)=>{"use strict";t.r(n),t.d(n,{__esModule:()=>r.X$,useActiveDocContext:()=>r.Iw,useActivePlugin:()=>r.gA,useActivePluginAndVersion:()=>r.WS,useActiveVersion:()=>r.zu,useAllDocsData:()=>r._r,useDocVersionSuggestions:()=>r.Jo,useDocsData:()=>r.zh,useLatestVersion:()=>r.yW,useVersions:()=>r.gB});var r=t(96730)},83039:(e,n,t)=>{"use strict";t.r(n),t.d(n,{AnnouncementBarProvider:()=>Pe,Collapsible:()=>z,DEFAULT_SEARCH_TAG:()=>m,Details:()=>K,DocsPreferredVersionContextProvider:()=>ce,MobileSecondaryMenuFiller:()=>re,MobileSecondaryMenuProvider:()=>ee,ScrollControllerProvider:()=>Ie,ThemeClassNames:()=>pe,createStorageSlot:()=>c,docVersionSearchTag:()=>p,duplicates:()=>me,isDocsPluginEnabled:()=>b,isSamePath:()=>w,listStorageKeys:()=>l,listTagsByLetters:()=>Ae,parseCodeBlockTitle:()=>g,translateTagsPageTitle:()=>De,useAlternatePageUtils:()=>d,useAnnouncementBar:()=>Ce,useCollapsible:()=>B,useDocsPreferredVersion:()=>ve,useDocsPreferredVersionByPluginId:()=>ge,useDynamicCallback:()=>k,useHistoryPopHandler:()=>ke,useIsomorphicLayoutEffect:()=>A,useLocalPathname:()=>Le,useLocationChange:()=>x,useMobileSecondaryMenuRenderer:()=>te,usePluralForm:()=>D,usePrevious:()=>R,useScrollController:()=>Ue,useScrollPosition:()=>je,useScrollPositionBlocker:()=>He,useTOCFilter:()=>Me,useTOCHighlight:()=>Ve,useThemeConfig:()=>o,useTitleFormatter:()=>y});var r=t(52263);function o(){return(0,r.default)().siteConfig.themeConfig}var a="localStorage";function i(e){if(void 0===e&&(e=a),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,u||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),u=!0),null}var n}var u=!1;var s={get:function(){return null},set:function(){},del:function(){}};var c=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=i(null==n?void 0:n.persistence);return null===t?s:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function l(e){void 0===e&&(e=a);var n=i(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(5977);function d(){var e=(0,r.default)(),n=e.siteConfig,t=n.baseUrl,o=n.url,a=e.i18n,i=a.defaultLocale,u=a.currentLocale,s=(0,f.TH)().pathname,c=u===i?t:t.replace("/"+u+"/","/"),l=s.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+c:""+c+e+"/"}(n)+l}}}var v=/title=(["'])(.*?)\1/;function g(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var m="default";function p(e,n){return"docs-"+e+"-"+n}var h=t(80907),b=!!h.useAllDocsData,w=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},y=function(e){var n=(0,r.default)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},E=t(67294),P=["zero","one","two","few","many","other"];function C(e){return P.filter((function(n){return e.includes(n)}))}var L={locale:"en",pluralForms:C(["one","other"]),select:function(e){return 1===e?"one":"other"}};function S(){var e=(0,r.default)().i18n.currentLocale;return(0,E.useMemo)((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),L;try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:C(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n'),L}var n,t}),[e])}function D(){var e=S();return{selectMessage:function(n,t){return function(e,n,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms+"), but the message contains "+r.length+" plural forms: "+e+" ");var o=t.select(n),a=t.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}(t,n,e)}}}var A="undefined"!=typeof window?E.useLayoutEffect:E.useEffect;function k(e){var n=(0,E.useRef)(e);return A((function(){n.current=e}),[e]),(0,E.useCallback)((function(){return n.current.apply(n,arguments)}),[])}function R(e){var n=(0,E.useRef)();return A((function(){n.current=e})),n.current}function x(e){var n=(0,f.TH)(),t=R(n),r=k(e);(0,E.useEffect)((function(){r({location:n,previousLocation:t})}),[r,n,t])}var O=t(79973),V=t(10412),T=["collapsed"],M=["lazy"];function B(e){var n=e.initialState,t=(0,E.useState)(null!=n&&n),r=t[0],o=t[1],a=(0,E.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:a}}var I={display:"none",overflow:"hidden",height:"0px"},U={display:"block",overflow:"visible",height:"auto"};function N(e,n){var t=n?I:U;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function j(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,E.useRef)(!1);(0,E.useEffect)((function(){var e,a=n.current;function i(){var e,n,t=a.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t);return{transition:"height "+o+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function u(){var e=i();a.style.transition=e.transition,a.style.height=e.height}if(!o.current)return N(a,t),void(o.current=!0);return a.style.willChange="height",e=requestAnimationFrame((function(){t?(u(),requestAnimationFrame((function(){a.style.height=I.height,a.style.overflow=I.overflow}))):(a.style.display="block",requestAnimationFrame((function(){u()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function H(e){if(!V.default.canUseDOM)return e?I:U}function _(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,a=e.animation,i=e.onCollapseTransitionEnd,u=e.className,s=e.disableSSRStyle,c=(0,E.useRef)(null);return j({collapsibleRef:c,collapsed:r,animation:a}),E.createElement(t,{ref:c,style:s?void 0:H(r),onTransitionEnd:function(e){"height"===e.propertyName&&(N(c.current,r),null==i||i(r))},className:u},o)}function F(e){var n=e.collapsed,t=(0,O.Z)(e,T),r=(0,E.useState)(!n),o=r[0],a=r[1];(0,E.useLayoutEffect)((function(){n||a(!0)}),[n]);var i=(0,E.useState)(n),u=i[0],s=i[1];return(0,E.useLayoutEffect)((function(){o&&s(n)}),[o,n]),o?E.createElement(_,Object.assign({},t,{collapsed:u})):null}function z(e){var n=e.lazy,t=(0,O.Z)(e,M),r=n?F:_;return E.createElement(r,Object.assign({},t))}var W=t(72389),q=t(86010);const Z="details_2Ziz",X="isBrowser_2j9b",J="collapsibleContent_3OHp";var Y=["summary","children"];function $(e){return!!e&&("SUMMARY"===e.tagName||$(e.parentElement))}function G(e,n){return!!e&&(e===n||G(e.parentElement,n))}const K=function(e){var n,t=e.summary,r=e.children,o=(0,O.Z)(e,Y),a=(0,W.default)(),i=(0,E.useRef)(null),u=B({initialState:!o.open}),s=u.collapsed,c=u.setCollapsed,l=(0,E.useState)(o.open),f=l[0],d=l[1];return E.createElement("details",Object.assign({},o,{ref:i,open:f,"data-collapsed":s,className:(0,q.default)(Z,(n={},n[X]=a,n),o.className),onMouseDown:function(e){$(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;$(n)&&G(n,i.current)&&(e.preventDefault(),s?(c(!1),d(!0)):c(!0))}}),t,E.createElement(z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){c(e),d(!e)}},E.createElement("div",{className:J},r)))};var Q=(0,E.createContext)(null);function ee(e){var n=e.children;return E.createElement(Q.Provider,{value:(0,E.useState)(null)},n)}function ne(){var e=(0,E.useContext)(Q);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function te(){var e=ne()[0];if(e){var n=e.component;return function(t){return E.createElement(n,Object.assign({},e.props,t))}}return function(){}}function re(e){var n,t=e.component,r=e.props,o=ne()[1],a=(n=r,(0,E.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,E.useEffect)((function(){o({component:t,props:a})}),[o,t,a]),(0,E.useEffect)((function(){return function(){return o(null)}}),[o]),null}var oe=function(e){return"docs-preferred-version-"+e};const ae={save:function(e,n,t){c(oe(e),{persistence:n}).set(t)},read:function(e,n){return c(oe(e),{persistence:n}).get()},clear:function(e,n){c(oe(e),{persistence:n}).del()}};function ie(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=ae.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(ae.clear(e,t),{preferredVersionName:null})}(e)})),o}function ue(){var e=(0,h.useAllDocsData)(),n=o().docs.versionPersistence,t=(0,E.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,E.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),a=r[0],i=r[1];return(0,E.useEffect)((function(){i(ie({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[a,(0,E.useMemo)((function(){return{savePreferredVersion:function(e,t){ae.save(e,n,t),i((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[n])]}var se=(0,E.createContext)(null);function ce(e){var n=e.children;return b?E.createElement(le,null,n):E.createElement(E.Fragment,null,n)}function le(e){var n=e.children,t=ue();return E.createElement(se.Provider,{value:t},n)}function fe(){var e=(0,E.useContext)(se);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}var de=t(29935);function ve(e){void 0===e&&(e=de.m);var n=(0,h.useDocsData)(e),t=fe(),r=t[0],o=t[1],a=r[e].preferredVersionName;return{preferredVersion:a?n.versions.find((function(e){return e.name===a})):null,savePreferredVersionName:(0,E.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o,e])}}function ge(){var e=(0,h.useAllDocsData)(),n=fe()[0];var t=Object.keys(e),r={};return t.forEach((function(t){r[t]=function(t){var r=e[t],o=n[t].preferredVersionName;return o?r.versions.find((function(e){return e.name===o})):null}(t)})),r}function me(e,n){return void 0===n&&(n=function(e,n){return e===n}),e.filter((function(t,r){return e.findIndex((function(e){return n(e,t)}))!==r}))}var pe={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},blog:{}},he=c("docusaurus.announcement.dismiss"),be=c("docusaurus.announcement.id"),we=function(){return"true"===he.get()},ye=function(e){return he.set(String(e))},Ee=(0,E.createContext)(null),Pe=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,W.default)(),t=(0,E.useState)((function(){return!!n&&we()})),r=t[0],a=t[1];(0,E.useEffect)((function(){a(we())}),[]);var i=(0,E.useCallback)((function(){ye(!0),a(!0)}),[]);return(0,E.useEffect)((function(){if(e){var n=e.id,t=be.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;be.set(n),r&&ye(!1),!r&&we()||a(!1)}}),[e]),(0,E.useMemo)((function(){return{isActive:!!e&&!r,close:i}}),[e,r,i])}();return E.createElement(Ee.Provider,{value:t},n)},Ce=function(){var e=(0,E.useContext)(Ee);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function Le(){var e=(0,r.default)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}var Se=t(24973),De=function(){return(0,Se.translate)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function Ae(e){var n={};return Object.values(e).forEach((function(e){var t,r=function(e){return e[0].toUpperCase()}(e.name);n[r]=null!==(t=n[r])&&void 0!==t?t:[],n[r].push(e)})),Object.entries(n).sort((function(e,n){var t=e[0],r=n[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,n){return e.name.localeCompare(n.name)}))}}))}function ke(e){!function(e){var n=(0,f.k6)().block,t=(0,E.useRef)(e);(0,E.useEffect)((function(){t.current=e}),[e]),(0,E.useEffect)((function(){return n((function(e,n){return t.current(e,n)}))}),[n,t])}((function(n,t){if("POP"===t)return e(n,t)}))}function Re(e){var n=e.getBoundingClientRect();return n.top===n.bottom?Re(e.parentNode):n}function xe(e,n){var t,r=n.anchorTopOffset,o=e.find((function(e){return Re(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Re(o))?o:null!==(t=e[e.indexOf(o)-1])&&void 0!==t?t:null:e[e.length-1]}function Oe(){var e=(0,E.useRef)(0),n=o().navbar.hideOnScroll;return(0,E.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}const Ve=function(e){var n=(0,E.useRef)(void 0),t=Oe();(0,E.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,a=e.minHeadingLevel,i=e.maxHeadingLevel;function u(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),u=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],o=n;o<=t;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),s=xe(u,{anchorTopOffset:t.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){var r;t?(n.current&&n.current!==e&&(null===(r=n.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===c)}))}return document.addEventListener("scroll",u),document.addEventListener("resize",u),u(),function(){document.removeEventListener("scroll",u),document.removeEventListener("resize",u)}}),[e,t])};function Te(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=Te({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function Me(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,E.useMemo)((function(){return Te({toc:n,minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}var Be=(0,E.createContext)(void 0);function Ie(e){var n,t=e.children;return E.createElement(Be.Provider,{value:(n=(0,E.useRef)(!0),(0,E.useMemo)((function(){return{scrollEventsEnabledRef:n,enableScrollEvents:function(){n.current=!0},disableScrollEvents:function(){n.current=!1}}}),[]))},t)}function Ue(){var e=(0,E.useContext)(Be);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}var Ne=function(){return V.default.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};function je(e,n){void 0===n&&(n=[]);var t=Ue().scrollEventsEnabledRef,r=(0,E.useRef)(Ne()),o=k(e);(0,E.useEffect)((function(){var e=function(){if(t.current){var e=Ne();o&&o(e,r.current),r.current=e}},n={passive:!0};return e(),window.addEventListener("scroll",e,n),function(){return window.removeEventListener("scroll",e,n)}}),[o,t].concat(n))}function He(){var e,n,t,r=Ue(),o=(e=(0,E.useRef)({elem:null,top:0}),n=(0,E.useCallback)((function(n){e.current={elem:n,top:n.getBoundingClientRect().top}}),[]),t=(0,E.useCallback)((function(){var n=e.current,t=n.elem,r=n.top;if(!t)return{restored:!1};var o=t.getBoundingClientRect().top-r;return o&&window.scrollBy({left:0,top:o}),e.current={elem:null,top:0},{restored:0!==o}}),[]),(0,E.useMemo)((function(){return{save:n,restore:t}}),[t,n])),a=(0,E.useRef)(void 0),i=(0,E.useCallback)((function(e){o.save(e),r.disableScrollEvents(),a.current=function(){var e=o.restore().restored;if(a.current=void 0,e){window.addEventListener("scroll",(function e(){r.enableScrollEvents(),window.removeEventListener("scroll",e)}))}else r.enableScrollEvents()}}),[r,o]);return(0,E.useLayoutEffect)((function(){var e;null===(e=a.current)||void 0===e||e.call(a)})),{blockElementScrollPositionUntilNextRender:i}}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,a=e.split(/[#?]/)[0],i="/"===a||a===r?a:(o=a,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(a,i)}},18780:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var o=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var a=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},86010:(e,n,t)=>{"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.r(n),t.d(n,{default:()=>o})}}]);