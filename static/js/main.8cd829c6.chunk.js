(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(49)},33:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"auth",function(){return f});var r={};a.r(r),a.d(r,"doSignInWithEmailAndPassword",function(){return E}),a.d(r,"doSignOut",function(){return g}),a.d(r,"doPasswordReset",function(){return O}),a.d(r,"doPasswordUpdate",function(){return j});a(25),a(19),a(27),a(28);var o=a(0),c=a.n(o),l=a(21),i=a.n(l),u=(a(33),a(52)),s=a(54),m=a(51),p=a(50),h=Object(o.createContext)(null),d="/home",b=a(18),v=a.n(b);a(42);v.a.apps.length||v.a.initializeApp({apiKey:"AIzaSyDwUHqyEz3Xt8hPFLM3yflFtfJXaBFzDw0",authDomain:"hackathon-here-86d54.firebaseapp.com",databaseURL:"https://hackathon-here-86d54.firebaseio.com",projectId:"hackathon-here-86d54",storageBucket:"hackathon-here-86d54.appspot.com",messagingSenderId:"219832925319"});var f=v.a.auth(),E=function(e,t){return f.signInWithEmailAndPassword(e,t)},g=function(){console.log("Adios"),f.signOut()},O=function(e){return f.sendPasswordResetEmail(e)},j=function(e){return f.currentUser.updatePassword(e)},S=function(){return c.a.createElement("button",{type:"button",onClick:r.doSignOut},"Cerrar sesi\xf3n")},w=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},c.a.createElement("a",{className:"navbar-brand",href:"/hackathon-here/"},"Hackathon HERE"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.a,{to:d,className:"nav-link"},"Informaci\xf3n")),c.a.createElement(S,{className:"nav-item"}))))},y=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},c.a.createElement("a",{className:"navbar-brand",href:"/hackathon-here/"},"Hackathon HERE"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item  mr-3"},c.a.createElement(p.a,{to:"/",className:"nav-link"},"Acerca de")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.a,{to:"/signin",className:"nav-link"},"Entrar")))))},C=function(){return c.a.createElement(h.Consumer,null,function(e){return e?c.a.createElement(w,null):c.a.createElement(y,null)})},k=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Landing Page"))},N=a(13),P=a(6),I=a(7),x=a(9),A=a(8),_=a(10),D=a(12),U=a(53),z=function(e,t){return function(){return Object(D.a)({},e,t)}},R={email:"",password:"",error:null},L=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(x.a)(this,Object(A.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,o=t.password,c=a.props.history;r.doSignInWithEmailAndPassword(n,o).then(function(){a.setState(Object(N.a)({},R)),c.push(d)}).catch(function(e){a.setState(z("error",e))})},a.state=Object(N.a)({},R),a}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,r=t.error,o=""===n||""===a;return c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("input",{value:a,onChange:function(t){return e.setState(z("email",t.target.value))},type:"email",placeholder:"Correo electr\xf3nico"}),c.a.createElement("input",{value:n,onChange:function(t){return e.setState(z("password",t.target.value))},type:"password",placeholder:"Contrase\xf1a"}),c.a.createElement("button",{disabled:o,type:"submit"},"Entrar"),r&&c.a.createElement("p",null,r.message))}}]),t}(o.Component),W=Object(U.a)(function(e){var t=e.history;return c.a.createElement("div",null,c.a.createElement("h1",null,"Ingresa a tu cuenta"),c.a.createElement(L,{history:t}))}),H=function(e,t){return function(){return Object(D.a)({},e,t)}},J={email:"",error:null},B=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(x.a)(this,Object(A.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state.email;r.doPasswordReset(t).then(function(){a.setState(Object(N.a)({},J))}).catch(function(e){a.setState(H("error",e))})},a.state=Object(N.a)({},J),a}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.error,r=""===a;return c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("input",{value:this.state.email,onChange:function(t){return e.setState(H("email",t.target.value))},type:"email",placeholder:"Correo electr\xf3nico"}),c.a.createElement("button",{disabled:r,type:"submit"},"Restablecer contrase\xf1a"),n&&c.a.createElement("p",null,n.message))}}]),t}(o.Component),F=function(){return c.a.createElement("div",{className:"center container col-8"},c.a.createElement("h1",{className:"mb-3"},"\xbfOlvidaste tu contrase\xf1a?"),c.a.createElement("p",null,"Ingresa tu correo electr\xf3nico y recibe un email con las instrucciones para restablecerla"),c.a.createElement(B,null))},M=function(e){return function(t){var a=function(a){function r(){return Object(P.a)(this,r),Object(x.a)(this,Object(A.a)(r).apply(this,arguments))}return Object(_.a)(r,a),Object(I.a)(r,[{key:"componentDidMount",value:function(){var t=this;n.auth.onAuthStateChanged(function(a){e(a)||t.props.history.push("/")})}},{key:"render",value:function(){var e=this;return c.a.createElement(h.Consumer,null,function(a){return a?c.a.createElement(t,e.props):null})}}]),r}(o.Component);return Object(U.a)(a)}},T=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(x.a)(this,Object(A.a)(t).call(this,e))).state={url:"https://image.maps.api.here.com/mia/1.6/mapview?",points:[]},a}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return c.a.createElement("img",{src:"".concat(this.state.url,"&app_id=").concat(this.props.app_id,"&app_code=").concat(this.props.app_code,"&c=").concat(this.props.app_coord,"&z=").concat(this.props.app_zoom),alt:"mapa de ruta"})}}]),t}(o.Component),Z=(a(47),function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(x.a)(this,Object(A.a)(t).call(this,e))).state={value:"0,0",error:null},a}return Object(_.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){e.setState({value:"".concat(t.coords.latitude,",").concat(t.coords.longitude),error:null})},function(t){return e.setState({error:t.message})})}},{key:"render",value:function(){return c.a.createElement(T,{app_id:"GJI8ICf6LihEIAGbLTZb",app_code:"C-Z87J-qv8YxWSZ5ctQLSg",app_coord:this.state.value,app_zoom:"15"})}}]),t}(o.Component)),q=M(function(e){return!!e})(Z),G=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Page404 Page"))},X=function(e){return function(t){function a(e){var t;return Object(P.a)(this,a),(t=Object(x.a)(this,Object(A.a)(a).call(this,e))).state={authUser:null},t}return Object(_.a)(a,t),Object(I.a)(a,[{key:"componentDidMount",value:function(){var e=this;n.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"render",value:function(){var t=this.state.authUser;return c.a.createElement(h.Provider,{value:t},c.a.createElement(e,this.props))}}]),a}(o.Component)}(function(){return c.a.createElement(u.a,{basename:"/hackathon-here"},c.a.createElement(o.Fragment,null,c.a.createElement(C,null),c.a.createElement(s.a,null,c.a.createElement(m.a,{exact:!0,path:"/",component:k}),c.a.createElement(m.a,{exact:!0,path:"/signin",component:W}),c.a.createElement(m.a,{exact:!0,path:"/pw-forget",component:F}),c.a.createElement(m.a,{exact:!0,path:d,component:q}),c.a.createElement(m.a,{component:G}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.8cd829c6.chunk.js.map