(this["webpackJsonptech-test"]=this["webpackJsonptech-test"]||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),s=a.n(c),o=(a(21),a(2)),l=(a(22),a(3)),i=a.n(l),u=a(14),m=(a(24),a(15)),h=a.n(m),p=function(e){return e?h.a.get("https://images-api.nasa.gov/search",{params:{q:e}}).then((function(e){return e.data.collection.items.filter((function(e){return"image"===e.data[0].media_type})).map((function(e){return e.links[0].href}))})).catch((function(e){console.log(e)})):Promise.resolve([])},f=function(e){var t=e.setSearchResultList,a=Object(n.useState)(""),c=Object(o.a)(a,2),s=c[0],l=c[1],m=Object(n.useState)(!1),h=Object(o.a)(m,2),f=h[0],g=h[1],v=Object(n.useState)(!1),d=Object(o.a)(v,2),b=d[0],E=d[1],w=function(){var e=Object(u.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),a.preventDefault(),e.prev=2,e.t0=t,e.next=6,p(s);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(2),E(!0);case 13:g(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return b?r.a.createElement("div",null,"Sorry, something went wrong. Please refresh the page."):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"search-form",onSubmit:w},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search for an image",onChange:function(e){return l(e.target.value)}}),r.a.createElement("button",{className:"submit-button",type:"submit",name:"go"},"Go!")),f&&r.a.createElement("div",{className:"loader"}))},g=(a(42),function(e){var t=e.results;return t.length?r.a.createElement("div",{className:"image-container"},r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("img",{key:e,src:e,alt:"spaceImage",className:"spaceImages"})})))):r.a.createElement("h1",{className:"no-result"},"No result")});var v=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("img",{className:"nasa-logo",src:"https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg",alt:"nasa-logo",name:"nasa-logo"}),r.a.createElement(f,{setSearchResultList:c}),r.a.createElement(g,{results:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.275c41aa.chunk.js.map