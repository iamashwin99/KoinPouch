(this.webpackJsonpkoinpouch=this.webpackJsonpkoinpouch||[]).push([[14],{127:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(102),i=a(77),r=a(19),l=a(10),n=a(11),o=a(13),d=a(12),h=a(137),j=a(126),p=a(138),b=a(62),O=a.n(b),m=a(25),u=a(60),x=a(3),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={isOption:e.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},e.cardReloadHandler=function(){e.setState({loadCard:!0}),setInterval((function(){e.setState({loadCard:!1})}),3e3)},e.cardRemoveHandler=function(){e.setState({cardRemove:!0})},e}return Object(n.a)(a,[{key:"render",value:function(){var e,t,a,s,c,i=this,l=[];return this.state.isOption&&(a=Object(x.jsx)("div",{className:"card-header-right",children:Object(x.jsxs)(h.a,{alignRight:!0,className:"btn-group card-option",children:[Object(x.jsx)(h.a.Toggle,{id:"dropdown-basic",className:"btn-icon",children:Object(x.jsx)("i",{className:"feather icon-more-horizontal"})}),Object(x.jsxs)(h.a.Menu,{as:"ul",className:"list-unstyled card-option",children:[Object(x.jsxs)(h.a.Item,{as:"li",className:"dropdown-item",onClick:function(){i.setState((function(e){return{fullCard:!e.fullCard}}))},children:[Object(x.jsx)("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),Object(x.jsxs)("a",{href:u.a.BLANK_LINK,children:[" ",this.state.fullCard?"Restore":"Maximize"," "]})]}),Object(x.jsxs)(h.a.Item,{as:"li",className:"dropdown-item",onClick:function(){i.setState((function(e){return{collapseCard:!e.collapseCard}}))},children:[Object(x.jsx)("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),Object(x.jsxs)("a",{href:u.a.BLANK_LINK,children:[" ",this.state.collapseCard?"Expand":"Collapse"," "]})]}),Object(x.jsxs)(h.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler,children:[Object(x.jsx)("i",{className:"feather icon-refresh-cw"}),Object(x.jsx)("a",{href:u.a.BLANK_LINK,children:" Reload "})]}),Object(x.jsxs)(h.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler,children:[Object(x.jsx)("i",{className:"feather icon-trash"}),Object(x.jsx)("a",{href:u.a.BLANK_LINK,children:" Remove "})]})]})]})})),s=Object(x.jsxs)(j.a.Header,{children:[Object(x.jsx)(j.a.Title,{as:"h5",children:this.props.title}),a]}),this.state.fullCard&&(l=[].concat(Object(r.a)(l),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(l=[].concat(Object(r.a)(l),["card-load"]),t=Object(x.jsx)("div",{className:"card-loader",children:Object(x.jsx)("i",{className:"pct-loader1 anim-rotate"})})),this.state.cardRemove&&(l=[].concat(Object(r.a)(l),["d-none"])),this.props.cardClass&&(l=[].concat(Object(r.a)(l),[this.props.cardClass])),c=Object(x.jsxs)(j.a,{className:l.join(" "),style:e,children:[s,Object(x.jsx)(p.a,{in:!this.state.collapseCard,children:Object(x.jsx)("div",{children:Object(x.jsx)(j.a.Body,{children:this.props.children})})}),t]}),Object(x.jsx)(m.a,{children:c})}}]),a}(s.Component),C=O()(f);t.default=function(){return Object(x.jsx)(m.a,{children:Object(x.jsx)(c.a,{children:Object(x.jsxs)(i.a,{children:[Object(x.jsx)(C,{title:"Wallet",isOption:!0,children:Object(x.jsx)("iframe",{src:"https://iamashwin99.github.io/avax-wallet/",height:"800",width:"100%",title:"Wallet"})}),Object(x.jsxs)(C,{title:"About the project",isOption:!0,children:[Object(x.jsx)("p",{children:" This project is an entry for onemillionwallets hackathon "}),Object(x.jsx)("p",{children:" Use the Sidebar for Navigation through the various use cases of the WebApp!"}),Object(x.jsxs)("p",{children:["  Powered by: ",Object(x.jsx)("img",{src:"https://www.covalenthq.com/static/images/covalent-logo.png",alt:"Covalent Logo",style:{width:"10%"}})," "]})]})]})})})}}}]);
//# sourceMappingURL=14.e39eeb04.chunk.js.map