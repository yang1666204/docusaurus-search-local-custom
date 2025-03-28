"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8209],{8931:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>P,Ki:()=>k,kJ:()=>b,x:()=>l,e7:()=>u,J_:()=>f,Gx:()=>y});var s=a(912),n=a(1315),i=a(5603),r=a(5868);function l(){var e;const t=(0,i.A)(),a=null==t||null==(e=t.data)?void 0:e.blogMetadata;if(!a)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return a}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(o.Provider,{value:i,children:t})}function u(){const e=(0,s.useContext)(o);if(null===e)throw new n.dV("BlogPostProvider");return e}var d=a(3081),m=a(2122);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(x);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: "+a})}:{}}function b(e){const{siteConfig:t}=(0,m.A)(),{withBaseUrl:a}=(0,d.hH)(),{metadata:{blogDescription:s,blogTitle:n,permalink:i}}=e,r=""+t.url+i;return{"@context":"https://schema.org","@type":"Blog","@id":r,mainEntityOfPage:r,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){var s,n;const{assets:i,frontMatter:r,metadata:l}=e,{date:o,title:c,description:u,lastUpdatedAt:d}=l,m=null!=(s=i.image)?s:r.image,b=null!=(n=r.keywords)?n:[],f=""+t.url+l.permalink,x=d?g(d):void 0;return Object.assign({"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:c,name:c,description:u,datePublished:o},x?{dateModified:x}:{},h(l.authors),p(m,a,c),b?{keywords:b}:{})}(e.content,t,a)))}}function f(){var e,t;const a=l(),{assets:s,metadata:n}=u(),{siteConfig:i}=(0,m.A)(),{withBaseUrl:r}=(0,d.hH)(),{date:o,title:c,description:b,frontMatter:f,lastUpdatedAt:x}=n,j=null!=(e=s.image)?e:f.image,v=null!=(t=f.keywords)?t:[],N=x?g(x):void 0,C=""+i.url+n.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":C,mainEntityOfPage:C,url:C,headline:c,name:c,description:b,datePublished:o},N?{dateModified:N}:{},h(n.authors),p(j,r,c),v?{keywords:v}:{},{isPartOf:{"@type":"Blog","@id":""+i.url+a.blogBasePath,name:a.blogTitle}})}function x(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var v=a(8567),N=a(246),C=a(5435),A=a(128);function y(e){const{pathname:t}=(0,v.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,A.ys)(e.permalink,t))}(e,t)))),[e,t])}function k(e){const t=(0,C.$z)(e,(e=>""+new Date(e.date).getFullYear())),a=Object.entries(t);return a.reverse(),a}function P(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:i}=e;return(0,r.jsx)("ul",{className:a,children:t.map((e=>(0,r.jsx)("li",{className:s,children:(0,r.jsx)(N.A,{isNavLink:!0,to:e.permalink,className:n,activeClassName:i,children:e.title})},e.permalink)))})}},8846:(e,t,a)=>{a.d(t,{A:()=>L});var s=a(7175),n=a(912),i=a(9679),r=a(3700),l=a(7172),o=a(792),c=a(8931),u=a(1609),d=a(1440),m=a(5868);function g(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,m.jsxs)("div",{role:"group",children:[(0,m.jsx)(d.A,{as:"h3",className:a,children:t}),s]})}function h(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,u.p)().blog.sidebar.groupByYear){const e=(0,c.Ki)(t);return(0,m.jsx)(m.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,m.jsx)(g,{year:t,yearGroupHeadingClassName:a,children:(0,m.jsx)(s,{items:n})},t)}))})}return(0,m.jsx)(s,{items:t})}const p=(0,n.memo)(h),b="sidebar_rOVu",f="sidebarItemTitle_kHT5",x="sidebarItemList_YZc7",j="sidebarItem_hd8D",v="sidebarItemLink_gua1",N="sidebarItemLinkActive_VWLx",C="yearGroupHeading_riON",A=e=>{let{items:t}=e;return(0,m.jsx)(c.OU,{items:t,ulClassName:(0,i.A)(x,"clean-list"),liClassName:j,linkClassName:v,linkActiveClassName:N})};function y(e){let{sidebar:t}=e;const a=(0,c.Gx)(t.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,i.A)(b,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,i.A)(f,"margin-bottom--md"),children:t.title}),(0,m.jsx)(p,{items:a,ListComponent:A,yearGroupHeadingClassName:C})]})})}const k=(0,n.memo)(y);var P=a(3551);const _={yearGroupHeading:"yearGroupHeading_UoGS"},O=e=>{let{items:t}=e;return(0,m.jsx)(c.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function w(e){let{sidebar:t}=e;const a=(0,c.Gx)(t.items);return(0,m.jsx)(p,{items:a,ListComponent:O,yearGroupHeadingClassName:_.yearGroupHeading})}function B(e){return(0,m.jsx)(P.GX,{component:w,props:e})}const G=(0,n.memo)(B);function U(e){let{sidebar:t}=e;const a=(0,l.l)();return null!=t&&t.items.length?"mobile"===a?(0,m.jsx)(G,{sidebar:t}):(0,m.jsx)(k,{sidebar:t}):null}const H=["sidebar","toc","children"];function L(e){const{sidebar:t,toc:a,children:n}=e,l=(0,s.A)(e,H),o=t&&t.items.length>0;return(0,m.jsx)(r.A,Object.assign({},l,{children:(0,m.jsx)("div",{className:"container margin-vert--lg",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)(U,{sidebar:t}),(0,m.jsx)("main",{className:(0,i.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:n}),a&&(0,m.jsx)("div",{className:"col col--2",children:a})]})})}))}},2066:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});a(912);var s=a(9679),n=a(4673),i=a(7982),r=a(1274),l=a(8846),o=a(198),c=a(5829),u=a(1440),d=a(5868);function m(e){let{tags:t,sidebar:a}=e;const m=(0,n.b)();return(0,d.jsxs)(i.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogTagsListPage),children:[(0,d.jsx)(i.be,{title:m}),(0,d.jsx)(c.A,{tag:"blog_tags_list"}),(0,d.jsxs)(l.A,{sidebar:a,children:[(0,d.jsx)(u.A,{as:"h1",children:m}),(0,d.jsx)(o.A,{tags:t})]})]})}},7890:(e,t,a)=>{a.d(t,{A:()=>l});a(912);var s=a(9679),n=a(246);const i={tag:"tag_yER8",tagRegular:"tagRegular_K_1C",tagWithCount:"tagWithCount_ryEi"};var r=a(5868);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}},198:(e,t,a)=>{a.d(t,{A:()=>c});a(912);var s=a(4673),n=a(7890),i=a(1440);const r={tag:"tag_B8B1"};var l=a(5868);function o(e){let{letterEntry:t}=e;return(0,l.jsxs)("article",{children:[(0,l.jsx)(i.A,{as:"h2",id:t.letter,children:t.letter}),(0,l.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(n.A,Object.assign({},e))},e.permalink)))}),(0,l.jsx)("hr",{})]})}function c(e){let{tags:t}=e;const a=(0,s.Q)(t);return(0,l.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,l.jsx)(o,{letterEntry:e},e.letter)))})}},4673:(e,t,a)=>{a.d(t,{Q:()=>i,b:()=>n});var s=a(792);const n=()=>(0,s.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function i(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);