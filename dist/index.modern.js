import{useCallback as e,useRef as n,useState as t,useEffect as r,useLayoutEffect as i}from"react";function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const c={debug:10,info:20,warn:30,error:40,none:100},f="undefined"!=typeof window&&window.document&&window.document.createElement?i:r;export default({logLevel:i="info",maxFontSize:a=100,minFontSize:u=20,onFinish:l,onStart:s,resolution:z=5}={})=>{const S=c[i],d=e(()=>({calcKey:0,fontSize:a,fontSizePrev:u,fontSizeMax:a,fontSizeMin:u}),[a,u]),m=n(null),w=n(),h=n(!1),[M,v]=t(d),{calcKey:y,fontSize:x,fontSizeMax:b,fontSizeMin:g,fontSizePrev:p}=M;let F=null;const[K]=t(()=>new ResizeObserver(()=>{F=window.requestAnimationFrame(()=>{h.current||(s&&s(),h.current=!0,v(o({},d(),{calcKey:y+1})))})}));r(()=>(m.current&&K.observe(m.current),()=>{F&&window.cancelAnimationFrame(F),K.disconnect()}),[F,K]);const O=m.current&&m.current.innerHTML;return r(()=>{0===y||h.current||(O!==w.current&&(s&&s(),v(o({},d(),{calcKey:y+1}))),w.current=O)},[y,d,O,s]),f(()=>{if(0===y)return;const e=Math.abs(x-p)<=z,n=!!m.current&&(m.current.scrollHeight>m.current.offsetHeight||m.current.scrollWidth>m.current.offsetWidth),t=x>p;if(e)return void(n&&x===p?(h.current=!1,S<=c.info&&console.info(`[use-fit-text] reached \`minFontSize = ${u}\` without fitting text`)):n?v({fontSize:t?p:g,fontSizeMax:b,fontSizeMin:g,fontSizePrev:p,calcKey:y}):(h.current=!1,l&&l(x)));let r,i=b,o=g;n?(r=t?p-x:g-x,i=Math.min(b,x)):(r=t?b-x:p-x,o=Math.max(g,x)),v({calcKey:y,fontSize:x+r/2,fontSizeMax:i,fontSizeMin:o,fontSizePrev:x})},[y,x,b,g,p,l,m,z]),{fontSize:x+"%",ref:m}};
//# sourceMappingURL=index.modern.js.map
