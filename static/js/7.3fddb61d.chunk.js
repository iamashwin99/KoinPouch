/*! For license information please see 7.3fddb61d.chunk.js.LICENSE.txt */
(this.webpackJsonpkoinpouch=this.webpackJsonpkoinpouch||[]).push([[7],{118:function(e,a,t){"use strict";var r=t(5),n=t(8),s=t(55),c=t.n(s),o=t(0),i=t.n(o),l=t(56),u=t(61),d=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(r.a)({},a,{ref:t,className:c()(a.className,e)}))}))},f=i.a.createContext(null);f.displayName="CardContext";var b=f,p=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(l.a)(t,"card-img");return i.a.createElement(d,Object(r.a)({ref:a,className:c()(o?b+"-"+o:b,s)},f))}));p.displayName="CardImg",p.defaultProps={variant:null};var m=p,v=d("h5"),j=d("h6"),h=Object(u.a)("card-body"),x=Object(u.a)("card-title",{Component:v}),O=Object(u.a)("card-subtitle",{Component:j}),y=Object(u.a)("card-link",{Component:"a"}),g=Object(u.a)("card-text",{Component:"p"}),N=Object(u.a)("card-header"),P=Object(u.a)("card-footer"),w=Object(u.a)("card-img-overlay"),C=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,u=e.bg,d=e.text,f=e.border,p=e.body,m=e.children,v=e.as,j=void 0===v?"div":v,x=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(l.a)(t,"card"),y=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return i.a.createElement(b.Provider,{value:y},i.a.createElement(j,Object(r.a)({ref:a},x,{className:c()(s,O,u&&"bg-"+u,d&&"text-"+d,f&&"border-"+f)}),p?i.a.createElement(h,null,m):m))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=m,C.Title=x,C.Subtitle=O,C.Body=h,C.Link=y,C.Text=g,C.Header=N,C.Footer=P,C.ImgOverlay=w;a.a=C},55:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var c=n.apply(null,r);c&&e.push(c)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var o in r)t.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},56:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));t(5);var r=t(0),n=t.n(r),s=n.a.createContext({});s.Consumer,s.Provider;function c(e,a){var t=Object(r.useContext)(s);return e||t[a]||a}},61:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var r=t(5),n=t(8),s=t(55),c=t.n(s),o=/-(.)/g;var i=t(0),l=t.n(i),u=t(56),d=function(e){return e[0].toUpperCase()+(a=e,a.replace(o,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function f(e,a){var t=void 0===a?{}:a,s=t.displayName,o=void 0===s?d(e):s,i=t.Component,f=t.defaultProps,b=l.a.forwardRef((function(a,t){var s=a.className,o=a.bsPrefix,d=a.as,f=void 0===d?i||"div":d,b=Object(n.a)(a,["className","bsPrefix","as"]),p=Object(u.a)(o,e);return l.a.createElement(f,Object(r.a)({ref:t,className:c()(s,p)},b))}));return b.defaultProps=f,b.displayName=o,b}},73:function(e,a,t){"use strict";var r=t(5),n=t(8),s=t(55),c=t.n(s),o=t(0),i=t.n(o),l=t(56),u=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.as,d=void 0===o?"div":o,f=Object(n.a)(e,["bsPrefix","className","as"]),b=Object(l.a)(t,"col"),p=[],m=[];return u.forEach((function(e){var a,t,r,n=f[e];if(delete f[e],"object"===typeof n&&null!=n){var s=n.span;a=void 0===s||s,t=n.offset,r=n.order}else a=n;var c="xs"!==e?"-"+e:"";a&&p.push(!0===a?""+b+c:""+b+c+"-"+a),null!=r&&m.push("order"+c+"-"+r),null!=t&&m.push("offset"+c+"-"+t)})),p.length||p.push(b),i.a.createElement(d,Object(r.a)({},f,{ref:a,className:c.a.apply(void 0,[s].concat(p,m))}))}));d.displayName="Col",a.a=d},93:function(e,a,t){"use strict";t.r(a);t(0);var r=t(94),n=t(73),s=t(118),c=t(25),o=t(3);a.default=function(){return Object(o.jsx)(c.a,{children:Object(o.jsx)(r.a,{children:Object(o.jsx)(n.a,{md:6,xl:12,children:Object(o.jsx)(s.a,{className:"Recent-Users",children:Object(o.jsxs)(s.a.Body,{className:"px-0 py-2",children:[Object(o.jsx)("div",{className:"row align-items-center justify-content-center",children:Object(o.jsx)("h3",{children:"Use the Sidebar for Navigation through the various use cases of the Dashboard!"})}),Object(o.jsx)("div",{className:"row align-items-center justify-content-center",children:Object(o.jsxs)("h7",{children:["Powered by: ",Object(o.jsx)("img",{src:"https://www.covalenthq.com/static/images/covalent-logo.png",alt:"Covalent Logo",style:{width:"10%",height:"10%"}})," "]})})]})})})})})}},94:function(e,a,t){"use strict";var r=t(5),n=t(8),s=t(55),c=t.n(s),o=t(0),i=t.n(o),l=t(56),u=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.noGutters,d=e.as,f=void 0===d?"div":d,b=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(l.a)(t,"row"),m=p+"-cols",v=[];return u.forEach((function(e){var a,t=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&v.push(""+m+r+"-"+a)})),i.a.createElement(f,Object(r.a)({ref:a},b,{className:c.a.apply(void 0,[s,p,o&&"no-gutters"].concat(v))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d}}]);
//# sourceMappingURL=7.3fddb61d.chunk.js.map