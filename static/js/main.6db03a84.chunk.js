(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(t,e,n){t.exports=n(30)},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e),n.d(e,"store",(function(){return k}));var a=n(0),i=n.n(a),o=n(7),c=n.n(o),r=(n(19),n(2)),l=n(3),s=n(6),u=n(5),d=(n(20),n(1)),h=(n(21),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={id:0,completed:!1,date:null},a.onsubmit=a.onsubmit.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"onsubmit",value:function(){if(0===this.text.value.trim().length)alert("Must write some text on input field");else{var t=(new Date).toLocaleDateString();t=t.substring(0,t.length-1),k.dispatch({type:"APPEND_TODO_LIST",list:[this.state.id,t,this.text.value,this.state.completed]}),this.text.value="",this.setState((function(t){return{id:t.id++}}))}}},{key:"componentDidMount",value:function(){var t=this;setInterval((function(){var e=(new Date).toLocaleDateString();e=e.substring(0,e.length-1);var n=(new Date).toLocaleTimeString(),a=(new Date).getDay();t.setState({date:"".concat(e," / ").concat(n," (").concat([null,"\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0","\uc77c"][a],")")})}),10)}},{key:"render",value:function(){var t=this;return i.a.createElement(i.a.Fragment,null,this.state.date?i.a.createElement("div",{id:"clockPart"},this.state.date):i.a.createElement("div",{id:"clockPart"},"Loading..."),i.a.createElement("div",{id:"inputArea"},i.a.createElement("input",{ref:function(e){t.text=e},placeholder:"write your ToDoList",type:"text"}),i.a.createElement("button",{onClick:this.onsubmit},"\ub4f1\ub85d")))}}]),n}(i.a.Component)),m=n(8),b=(n(28),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).checkComplete=a.checkComplete.bind(Object(d.a)(a)),a.deleteList=a.deleteList.bind(Object(d.a)(a)),a.state={button:"\ud3ec\uae30"},a.buttonMouseOver=a.buttonMouseOver.bind(Object(d.a)(a)),a.buttonMouseOut=a.buttonMouseOut.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"checkComplete",value:function(){k.dispatch({type:"COMPLETE_TODO_LIST",id:this.idValue.value})}},{key:"deleteList",value:function(){k.dispatch({type:"DELETE_TODO_LIST",id:this.idValue.value})}},{key:"buttonMouseOver",value:function(){this.setState({button:"\ud3ec\uae30\ud558\uc9c0 \ub9d0\uc790!"})}},{key:"buttonMouseOut",value:function(){this.setState({button:"\ud3ec\uae30"})}},{key:"render",value:function(){var t=this,e=this.props,n=e.id,a=e.date,o=e.text,c=e.completed;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"list"},i.a.createElement("div",{id:"date"},a),i.a.createElement("div",{id:"text",style:c?{textDecorationLine:"line-through"}:{}},o.length<=15?o:"".concat(o.substring(0,16),"...")),i.a.createElement("input",{id:"checkbox",type:"checkbox",onChange:this.checkComplete}),i.a.createElement("input",{type:"hidden",value:n,ref:function(e){t.idValue=e}}),i.a.createElement("button",{onMouseOver:this.buttonMouseOver,onMouseOut:this.buttonMouseOut,onClick:this.deleteList},this.state.button)))}}]),n}(i.a.Component));n(29);var v=function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"lists"},t.lists.map((function(t){return i.a.createElement(b,{key:t[0],id:t[0],date:t[1],text:t[2],completed:t[3]})}))))},O=Object(m.b)((function(t){return{lists:t.appendList.list}}))(v),p=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={id:0,completed:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Nav"},i.a.createElement(h,null)),i.a.createElement(O,null))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(4),f={list:[]},g=Object(E.b)({appendList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APPEND_TODO_LIST":return Object.assign({},{list:t.list.concat([e.list])});case"DELETE_TODO_LIST":var n=t.list;return n=n.filter((function(t){return t[0]!==parseInt(e.id)})),console.log(n),Object.assign({},t,{list:n});case"COMPLETE_TODO_LIST":var a=t.list;return a=a.map((function(t){return t[0]===parseInt(e.id)?(!1===t[3]?t.splice(3,1,!0):t.splice(3,1,!1),t):t})),Object.assign({},{list:a});default:return t}}}),k=Object(E.c)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m.a,{store:k},i.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.6db03a84.chunk.js.map