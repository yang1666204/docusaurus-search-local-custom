"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8401],{4284:(e,n,t)=>{t.d(n,{A:()=>c});t(912);var s=t(9679),a=t(5015),i=t(1274),l=t(8642),o=t(5868);function r(e){let{className:n}=e;return(0,o.jsx)(l.A,{type:"caution",title:(0,o.jsx)(a.Rc,{}),className:(0,s.A)(n,i.G.common.unlistedBanner),children:(0,o.jsx)(a.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.AE,{}),(0,o.jsx)(r,Object.assign({},e))]})}},3361:(e,n,t)=>{t.d(n,{A:()=>d});t(912);var s=t(9679),a=t(5015),i=t(1274),l=t(8642),o=t(5868);function r(e){let{className:n}=e;return(0,o.jsx)(l.A,{type:"caution",title:(0,o.jsx)(a.Yh,{}),className:(0,s.A)(n,i.G.common.draftBanner),children:(0,o.jsx)(a.TT,{})})}var c=t(4284);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:s}=n;return(0,o.jsxs)(o.Fragment,{children:[(t||s.unlisted)&&(0,o.jsx)(c.A,{}),s.draft&&(0,o.jsx)(r,{})]})}},802:(e,n,t)=>{t.d(n,{A:()=>f});t(912);var s=t(9679),a=t(1274),i=t(2703),l=t(128),o=t(246),r=t(792),c=t(3081),d=t(5868);function u(e){return(0,d.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_NcsM"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_WM9Q"};function v(e){let{children:n,href:t,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,d.jsx)(o.A,{className:a,href:t,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:n})}):(0,d.jsx)("span",{className:a,children:n})}function x(e){let{children:n,active:t,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",Object.assign({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function f(){const e=(0,i.OF)(),n=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,d.jsx)(h,{}),e.map(((n,t)=>{const s=t===e.length-1,a="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,d.jsx)(x,{active:s,index:t,addMicrodata:!!a,children:(0,d.jsx)(v,{href:a,isLast:s,children:n.label})},t)}))]})}):null}},2603:(e,n,t)=>{t.r(n),t.d(n,{default:()=>R});var s=t(912),a=t(7982),i=t(1315),l=t(5868);const o=s.createContext(null);function r(e){let{children:n,content:t}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,l.jsx)(o.Provider,{value:a,children:n})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){var e;const{metadata:n,frontMatter:t,assets:s}=c();return(0,l.jsx)(a.be,{title:n.title,description:n.description,keywords:t.keywords,image:null!=(e=s.image)?e:t.image})}var u=t(9679),m=t(7172),h=t(6945);function b(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var v=t(7124),x=t(293),f=t(1274),g=t(5902),p=t(81);function j(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:a}=e,i=a.length>0,o=!!(n||t||s);return i||o?(0,l.jsxs)("footer",{className:(0,u.A)(f.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",f.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(g.A,{tags:a})})}),o&&(0,l.jsx)(p.A,{className:(0,u.A)("margin-top--sm",f.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var A=t(3929),N=t(2540),L=t(7175),C=t(792);const _={tocCollapsibleButton:"tocCollapsibleButton_bgk2",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_opSa"},T=["collapsed"];function k(e){let{collapsed:n}=e,t=(0,L.A)(e,T);return(0,l.jsx)("button",Object.assign({type:"button"},t,{className:(0,u.A)("clean-btn",_.tocCollapsibleButton,!n&&_.tocCollapsibleButtonExpanded,t.className),children:(0,l.jsx)(C.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const H={tocCollapsible:"tocCollapsible_NQ5w",tocCollapsibleContent:"tocCollapsibleContent_PGcy",tocCollapsibleExpanded:"tocCollapsibleExpanded_Unn4"};function M(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,A.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(H.tocCollapsible,!i&&H.tocCollapsibleExpanded,t),children:[(0,l.jsx)(k,{collapsed:i,onClick:o}),(0,l.jsx)(A.N,{lazy:!0,className:H.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(N.A,{toc:n,minHeadingLevel:s,maxHeadingLevel:a})})]})}const y={tocMobile:"tocMobile_bitF"};function w(){const{toc:e,frontMatter:n}=c();return(0,l.jsx)(M,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.A)(f.G.docs.docTocMobile,y.tocMobile)})}var B=t(640);function I(){const{toc:e,frontMatter:n}=c();return(0,l.jsx)(B.A,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var O=t(1440),E=t(1967);function V(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(f.G.docs.docMarkdown,"markdown"),children:[t&&(0,l.jsx)("header",{children:(0,l.jsx)(O.A,{as:"h1",children:t})}),(0,l.jsx)(E.A,{children:n})]})}var S=t(802),G=t(3361);const U={docItemContainer:"docItemContainer_ytYv",docItemCol:"docItemCol_KPSB"};function P(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&n.length>0;return{hidden:s,mobile:a?(0,l.jsx)(w,{}):void 0,desktop:!a||"desktop"!==t&&"ssr"!==t?void 0:(0,l.jsx)(I,{})}}(),{metadata:s}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!t.hidden&&U.docItemCol),children:[(0,l.jsx)(G.A,{metadata:s}),(0,l.jsx)(v.A,{}),(0,l.jsxs)("div",{className:U.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(S.A,{}),(0,l.jsx)(x.A,{}),t.mobile,(0,l.jsx)(V,{children:n}),(0,l.jsx)(j,{})]}),(0,l.jsx)(b,{})]})]}),t.desktop&&(0,l.jsx)("div",{className:"col col--3",children:t.desktop})]})}function R(e){const n="docs-doc-id-"+e.content.metadata.id,t=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:n,children:[(0,l.jsx)(d,{}),(0,l.jsx)(P,{children:(0,l.jsx)(t,{})})]})})}},6945:(e,n,t)=>{t.d(n,{A:()=>l});t(912);var s=t(792),a=t(3816),i=t(5868);function l(e){const{previous:n,next:t}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,i.jsx)(a.A,Object.assign({},n,{subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),t&&(0,i.jsx)(a.A,Object.assign({},t,{subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}},293:(e,n,t)=>{t.d(n,{A:()=>r});t(912);var s=t(9679),a=t(792),i=t(1274),l=t(986),o=t(5868);function r(e){let{className:n}=e;const t=(0,l.r)();return t.badge?(0,o.jsx)("span",{className:(0,s.A)(n,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},7124:(e,n,t)=>{t.d(n,{A:()=>x});t(912);var s=t(9679),a=t(2122),i=t(246),l=t(792),o=t(6433),r=t(1274),c=t(7895),d=t(986),u=t(5868);const m={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const n=m[e.versionMetadata.banner];return(0,u.jsx)(n,Object.assign({},e))}function b(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:t,onClick:s,children:(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function v(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:i}}=(0,a.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:v}=(0,o.HW)(l),x=null!=m?m:(f=v).docs.find((e=>e.id===f.mainDocId));var f;return(0,u.jsxs)("div",{className:(0,s.A)(n,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:t})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:v.label,to:x.path,onClick:()=>d(v.name)})})]})}function x(e){let{className:n}=e;const t=(0,d.r)();return t.banner?(0,u.jsx)(v,{className:n,versionMetadata:t}):null}},640:(e,n,t)=>{t.d(n,{A:()=>u});var s=t(7175),a=(t(912),t(9679)),i=t(2540);const l={tableOfContents:"tableOfContents_MgEx",docItemContainer:"docItemContainer_IC58"};var o=t(5868);const r=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){let{className:n}=e,t=(0,s.A)(e,r);return(0,o.jsx)("div",{className:(0,a.A)(l.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(i.A,Object.assign({},t,{linkClassName:c,linkActiveClassName:d}))})}},2540:(e,n,t)=>{t.d(n,{A:()=>g});var s=t(7175),a=t(912),i=t(1609);const l=["parentIndex"];function o(e){const n=e.map((e=>Object.assign({},e,{parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t}=e,i=(0,s.A)(e,l);t>=0?n[t].children.push(i):a.push(i)})),a}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function d(e,n){var t;let{anchorTopOffset:s}=n;const a=e.find((e=>c(e).top>=s));if(a){var i;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:null!=(i=e[e.indexOf(a)-1])?i:null}return null!=(t=e[e.length-1])?t:null}function u(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){const n=(0,a.useRef)(void 0),t=u();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push("h"+a+".anchor");return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),r=d(o,{anchorTopOffset:t.current}),c=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var h=t(246),b=t(5868);function v(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,b.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,b.jsxs)("li",{children:[(0,b.jsx)(h.A,{to:"#"+e.id,className:null!=s?s:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,b.jsx)(v,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const x=a.memo(v),f=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u}=e,h=(0,s.A)(e,f);const v=(0,i.p)(),g=null!=d?d:v.tableOfContents.minHeadingLevel,p=null!=u?u:v.tableOfContents.maxHeadingLevel,j=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>r({toc:o(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:g,maxHeadingLevel:p});return m((0,a.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:p}}),[l,c,g,p])),(0,b.jsx)(x,Object.assign({toc:j,className:t,linkClassName:l},h))}},5015:(e,n,t)=>{t.d(n,{AE:()=>r,Rc:()=>l,TT:()=>d,Uh:()=>o,Yh:()=>c});t(912);var s=t(792),a=t(7836),i=t(5868);function l(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);