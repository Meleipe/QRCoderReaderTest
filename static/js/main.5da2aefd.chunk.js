(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},13:function(e,t,n){e.exports=n(41)},18:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),l=n.n(o),c=(n(18),n(6)),s=n(7),i=n(11),d=n(8),u=n(12),h=n(2),m=n(9),p=n.n(m),E=n(10),b=n.n(E),f=(n(39),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={result:"Nothing yet",done:!1},n.handleScan=n.handleScan.bind(Object(h.a)(Object(h.a)(n))),n.handleError=n.handleError.bind(Object(h.a)(Object(h.a)(n))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleError",value:function(e){console.error(e)}},{key:"handleScan",value:function(e){console.log(e),!1===this.state.done&&null!==e&&this.setState({result:e}),null!=e&&this.setState({done:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),r.a.createElement("body",null,r.a.createElement(p.a,{delay:500,onError:this.handleError,onScan:this.handleScan}),r.a.createElement("p",null,r.a.createElement("a",{href:this.state.result},this.state.result?this.state.result:""))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.5da2aefd.chunk.js.map