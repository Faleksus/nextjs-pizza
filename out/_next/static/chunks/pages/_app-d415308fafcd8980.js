(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(3882)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(6495).Z,s=i(2648).Z,a=i(1598).Z,n=i(7273).Z,l=a(i(7294)),o=s(i(2636)),c=i(7757),d=i(3735),u=i(3341);i(4210);var f=s(i(7746));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,s,a,n,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&n(!0),null==s?void 0:s.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;s.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let x=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:s,widthInt:a,qualityInt:o,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:m,placeholder:h,loading:g,srcString:x,config:v,unoptimized:_,loader:j,onLoadRef:b,onLoadingCompleteRef:N,setBlurComplete:w,setShowAltText:E,onLoad:y,onError:S}=e,I=n(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},I,{loading:g,width:a,height:s,decoding:"async","data-nimg":m?"fill":"1",className:c,style:r({},d,u)},i,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&p(e,x,h,b,N,w,_))},[x,h,b,N,w,S,_,t]),onLoad:e=>{let t=e.currentTarget;p(t,x,h,b,N,w,_)},onError:e=>{E(!0),"blur"===h&&w(!0),S&&S(e)}})))}),v=l.forwardRef((e,t)=>{let i,s;var a,{src:p,sizes:v,unoptimized:_=!1,priority:j=!1,loading:b,className:N,quality:w,width:E,height:y,fill:S,style:I,onLoad:C,onLoadingComplete:R,placeholder:O="empty",blurDataURL:A,layout:z,objectFit:F,objectPosition:k,lazyBoundary:P,lazyRoot:D}=e,M=n(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let L=l.useContext(u.ImageConfigContext),T=l.useMemo(()=>{let e=m||L||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[L]),B=M,W=B.loader||f.default;delete B.loader;let Y="__next_img_default"in W;if(Y){if("custom"===T.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=W;W=t=>{let{config:i}=t,r=n(t,["config"]);return e(r)}}if(z){"fill"===z&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(I=r({},I,e));let t={responsive:"100vw",fill:"100vw"}[z];t&&!v&&(v=t)}let Z="",U=g(E),q=g(y);if("object"==typeof(a=p)&&(h(a)||void 0!==a.src)){let e=h(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,s=e.blurHeight,A=A||e.blurDataURL,Z=e.src,!S){if(U||q){if(U&&!q){let t=U/e.width;q=Math.round(e.height*t)}else if(!U&&q){let t=q/e.height;U=Math.round(e.width*t)}}else U=e.width,q=e.height}}let G=!j&&("lazy"===b||void 0===b);((p="string"==typeof p?p:Z).startsWith("data:")||p.startsWith("blob:"))&&(_=!0,G=!1),T.unoptimized&&(_=!0),Y&&p.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(_=!0);let[H,K]=l.useState(!1),[V,X]=l.useState(!1),J=g(w),Q=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:F,objectPosition:k}:{},V?{}:{color:"transparent"},I),$="blur"===O&&A&&!H?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:q,blurWidth:i,blurHeight:s,blurDataURL:A,objectFit:Q.objectFit}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:r,width:s,quality:a,sizes:n,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:s}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:s,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))];return{widths:a,kind:"x"}}(t,s,n),d=o.length-1;return{sizes:n||"w"!==c?n:"100vw",srcSet:o.map((e,r)=>"".concat(l({config:t,src:i,quality:a,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:l({config:t,src:i,quality:a,width:o[d]})}}({config:T,src:p,unoptimized:_,width:U,quality:J,sizes:v,loader:W}),et=p,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},er=l.useRef(C);l.useEffect(()=>{er.current=C},[C]);let es=l.useRef(R);l.useEffect(()=>{es.current=R},[R]);let ea=r({isLazy:G,imgAttributes:ee,heightInt:q,widthInt:U,qualityInt:J,className:N,imgStyle:Q,blurStyle:$,loading:b,config:T,fill:S,unoptimized:_,placeholder:O,loader:W,srcString:et,onLoadRef:er,onLoadingCompleteRef:es,setBlurComplete:K,setShowAltText:X},B);return l.default.createElement(l.default.Fragment,null,l.default.createElement(x,Object.assign({},ea,{ref:t})),j?l.default.createElement(o.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:s,blurDataURL:a,objectFit:n}=e,l=r||t,o=s||i,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&s?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:s}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},3882:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return m}});var r=i(5893);i(7952),i(7294);var s=i(5675),a=i.n(s),n=i(7889),l=i.n(n);let o=()=>(0,r.jsxs)("div",{className:l().container,children:[(0,r.jsx)("div",{className:l().item,children:(0,r.jsx)(a(),{src:"/img/bg.png",objectFit:"cover",layout:"fill",alt:""})}),(0,r.jsxs)("div",{className:l().item,children:[(0,r.jsx)("div",{className:l().card,children:(0,r.jsx)("h2",{className:l().motto,children:"OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA."})}),(0,r.jsxs)("div",{className:l().card,children:[(0,r.jsx)("h1",{className:l().title,children:"FIND OUR RESTAURANTS"}),(0,r.jsxs)("p",{className:l().text,children:["1654 R. Don Road #304.",(0,r.jsx)("br",{})," NewYork, 85022",(0,r.jsx)("br",{})," (602) 867-1010"]}),(0,r.jsxs)("p",{className:l().text,children:["2356 K. Laquie Rd #235.",(0,r.jsx)("br",{})," NewYork, 85022",(0,r.jsx)("br",{})," (602) 867-1011"]}),(0,r.jsxs)("p",{className:l().text,children:["1614 E. Erwin St #104.",(0,r.jsx)("br",{})," NewYork, 85022",(0,r.jsx)("br",{})," (602) 867-1012"]}),(0,r.jsxs)("p",{className:l().text,children:["1614 W. Caroll St #125.",(0,r.jsx)("br",{})," NewYork, 85022",(0,r.jsx)("br",{})," (602) 867-1013"]})]}),(0,r.jsxs)("div",{className:l().card,children:[(0,r.jsx)("h1",{className:l().title,children:"WORKING HOURS"}),(0,r.jsxs)("p",{className:l().text,children:["MONDAY UNTIL FRIDAY",(0,r.jsx)("br",{})," 9:00 – 22:00"]}),(0,r.jsxs)("p",{className:l().text,children:["SATURDAY - SUNDAY",(0,r.jsx)("br",{})," 12:00 – 24:00"]})]})]})]});var c=i(3030),d=i.n(c);let u=()=>(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsxs)("div",{className:d().item,children:[(0,r.jsx)("div",{className:d().callButton,children:(0,r.jsx)(a(),{src:"/img/telephone.png",alt:"",width:20,height:20})}),(0,r.jsxs)("div",{className:d().texts,children:[(0,r.jsx)("div",{className:d().text,children:"ORDER NOW"}),(0,r.jsx)("div",{className:d().text,children:"096 514 83 83"})]})]}),(0,r.jsx)("div",{className:d().item,children:(0,r.jsxs)("ul",{className:d().list,children:[(0,r.jsx)("li",{className:d().listItem,children:"Homepage"}),(0,r.jsx)("li",{className:d().listItem,children:"Products"}),(0,r.jsx)("li",{className:d().listItem,children:"Menu"}),(0,r.jsx)(a(),{src:"/img/logo.png",alt:"logo",width:160,height:69}),(0,r.jsx)("li",{className:d().listItem,children:"Events"}),(0,r.jsx)("li",{className:d().listItem,children:"Blog"}),(0,r.jsx)("li",{className:d().listItem,children:"Contact"})]})}),(0,r.jsx)("div",{className:d().item,children:(0,r.jsxs)("div",{className:d().cart,children:[(0,r.jsx)(a(),{src:"/img/cart.png",alt:"",width:30,height:30}),(0,r.jsx)("div",{className:d().counter,children:"2"})]})})]}),f=e=>{let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),t,(0,r.jsx)(o,{})]})};function m(e){let{Component:t,pageProps:i}=e;return(0,r.jsx)(f,{children:(0,r.jsx)(t,{...i})})}},7952:function(){},7889:function(e){e.exports={container:"Footer_container__bwQe4",item:"Footer_item__OoOG2",card:"Footer_card__nIgtz",title:"Footer_title__LdEX5",text:"Footer_text__TPgcV",motto:"Footer_motto__ZdSEd"}},3030:function(e){e.exports={container:"Navbar_container__ql08n",item:"Navbar_item__4Aj__",callButton:"Navbar_callButton__1NZQg",texts:"Navbar_texts__DNT2d",text:"Navbar_text__fp35b",list:"Navbar_list__j1FKl",listItem:"Navbar_listItem__4BM2Z",cart:"Navbar_cart__VXkyy",counter:"Navbar_counter__5fFKF"}},5675:function(e,t,i){e.exports=i(3740)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);