(function(window){var svgSprite='<svg><symbol id="icon-tuige" viewBox="0 0 1395 1024"><path d="M1229.851676 1024h-719.567568a23.911784 23.911784 0 0 1-3.90227-1.051676 96.864865 96.864865 0 0 1-64.152216-28.118486L28.118486 580.718703a97.639784 97.639784 0 0 1 0-138.046271L442.229622 28.588973A97.224649 97.224649 0 0 1 509.868973 0h719.982703a166.054054 166.054054 0 0 1 166.054054 166.054054v691.891892a166.054054 166.054054 0 0 1-166.054054 166.054054z m110.702702-820.556108A149.808432 149.808432 0 0 0 1189.113081 55.351351H532.48a89.558486 89.558486 0 0 0-61.689081 25.378595L92.132324 454.739027a78.01773 78.01773 0 0 0 0 114.604973l378.658595 373.178811a89.254054 89.254054 0 0 0 58.506378 25.074162 23.081514 23.081514 0 0 0 3.542487 0.940973h656.273297a149.808432 149.808432 0 0 0 151.441297-148.009514v-617.167567z m-253.536864 519.776865l-19.566703 19.566702a13.837838 13.837838 0 0 1-19.566703 0l-205.491892-205.491891-205.491892 205.491891a13.837838 13.837838 0 0 1-19.566702 0l-19.566703-19.566702a13.837838 13.837838 0 0 1 0-19.566703L803.258811 498.162162l-205.491892-205.491892a13.837838 13.837838 0 0 1 0-19.566702l19.566703-19.566703a13.837838 13.837838 0 0 1 19.566702 0l205.491892 205.491892 205.491892-205.491892a13.837838 13.837838 0 0 1 19.566703 0l19.566703 19.566703a13.837838 13.837838 0 0 1 0 19.566702L881.525622 498.162162l205.491892 205.491892a13.837838 13.837838 0 0 1 0 19.566703z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)