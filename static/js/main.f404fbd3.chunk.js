(this.webpackJsonpscherma=this.webpackJsonpscherma||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),c=a.n(r),o=(a(87),a(49)),l=a(50),s=a(53),u=a(52),m=a(40),h=a(63),f=a(17),d=(a(88),a(70)),p=a(156),g=a(140),v=a(152),E=a(142),b=a(144),y=a(145),j=a(146),S=a(147),k=a(67),w=a.n(k),O=a(148),I=a(157),C=a(68),x=a.n(C),A=a(69),z=a.n(A),N=a(51),M=a.n(N),F=a(155),W=a(104),R=a(153),T=a(159),D=a(158),P=a(151),U=a(5),H=(a(89),a(60),a(65)),q=a.n(H);U.initializeApp({apiKey:"AIzaSyCe8mQ5RcM_tm7LPvM1kxbJ211Fq7G3fFA",authDomain:"scherma-d21ad.firebaseapp.com",databaseURL:"https://scherma-d21ad.firebaseio.com",projectId:"scherma-d21ad",storageBucket:"scherma-d21ad.appspot.com",messagingSenderId:"720411353134",appId:"1:720411353134:web:d7c17466ebf51edc34ffbf"}),U.firestore().enablePersistence().catch((function(e){"failed-precondition"===e.code||e.code}));var B=Object(d.a)({palette:{background:{default:"#282c34"},primary:{main:"#282c34"},secondary:{main:"#ffffff"}},status:{danger:"orange"},typography:{h2:{color:"#fed111"},h1:{color:"#fed111"},h5:{color:"white"},h6:{color:"white"}}});B=Object(p.a)(B);var L=Object(g.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},formControl:{margin:e.spacing(1),minWidth:180}}}));function G(e){var t=L();return i.a.createElement(E.a,{position:"fixed",color:"primary",elevation:0},i.a.createElement(b.a,null,i.a.createElement(y.a,{variant:"h6",className:t.title,onClick:function(){return e.setSchermataMaestro(!1)}},"Scherma"),e.schermataMaestro?i.a.createElement(i.a.Fragment,null,i.a.createElement(j.a,{style:{color:"white"},onClick:function(){return e.setSchermataMaestro(!1)}},"Home"),i.a.createElement(S.a,{style:{color:"white"},"aria-label":"logout",onClick:function(){U.auth().signOut()}},i.a.createElement(w.a,null))):i.a.createElement(j.a,{style:{color:"white"},onClick:function(){return e.setSchermataMaestro(!0)}},"Maestro")))}function J(e){return i.a.createElement(F.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.open,autoHideDuration:5e3,onClose:e.handleClose,message:e.messaggio,action:i.a.createElement(i.a.Fragment,null,i.a.createElement(S.a,{size:"small","aria-label":"close",color:"inherit",onClick:e.handleClose},i.a.createElement(M.a,{fontSize:"small"})))})}function Q(e){return i.a.createElement("div",null,"Ciao atleti")}function V(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)([]),l=Object(f.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(""),h=Object(f.a)(m,2),d=h[0],p=h[1],g=Object(n.useState)(1),v=Object(f.a)(g,2),E=v[0],b=v[1];return i.a.createElement(O.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},i.a.createElement(O.a,{item:!0,xs:9,justify:"center",alignItems:"center"},i.a.createElement(I.a,{id:"nomesequenza",label:"Nome sequenza",onChange:function(e){return p(e.target.value)}})),i.a.createElement(O.a,{item:!0,xs:9,justify:"center",alignItems:"center"},Array(E).fill(1).map((function(e,t){return e+t-1})).map((function(e){return i.a.createElement(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},i.a.createElement(O.a,{item:!0,xs:8,justify:"center",alignItems:"center"},i.a.createElement(I.a,{id:"azione",label:"Azione",onChange:function(t){return function(e,t){try{if(r.map((function(e){return e.chiave})).includes(e)){var a=r;a[e].testo=t,c(a)}else c(r.concat({chiave:e,testo:t}))}catch(n){c(r.concat({chiave:e,testo:t}))}}(e,t.target.value)}})),i.a.createElement(O.a,{item:!0,xs:4,justify:"center",alignItems:"center"},i.a.createElement(I.a,{id:"tempo",label:"Tempo",onChange:function(t){return function(e,t){try{if(s.map((function(e){return e.chiave})).includes(e)){var a=s;a[e].testo=t,u(a)}else u(s.concat({chiave:e,testo:t}))}catch(n){u(s.concat({chiave:e,testo:t}))}}(e,t.target.value)}})))}))),i.a.createElement(O.a,{item:!0,xs:3,justify:"flex-start",alignItems:"center",style:{marginTop:"20px"}},i.a.createElement(S.a,{color:"primary","aria-label":"aggiungi",onClick:function(){return b(E+1)}},i.a.createElement(x.a,null))),i.a.createElement(O.a,{item:!0,xs:12,justify:"flex-bottom",alignItems:"center"},i.a.createElement(P.a,null),i.a.createElement(S.a,{color:"primary","aria-label":"save",onClick:function(){return console.log("SALVO"),void(""!==d?(e.chiudiSnack(),r.length===s.length?(e.apriSnack("Salvato."),console.log(r),console.log(s)):e.apriSnack("Mancano delle mosse o dei tempi.")):e.apriSnack("Inserisci il nome della sequenza per salvare."))}},i.a.createElement(z.a,null))))}function _(e){var t,a=L(),r=Object(n.useState)({azioni:"",name:"hai"}),c=Object(f.a)(r,2),o=c[0],l=c[1],s=Object(n.useState)(!1),u=Object(f.a)(s,2),d=u[0],p=u[1],g=Object(n.useState)(!1),v=Object(f.a)(g,2),E=v[0],b=v[1],y=Object(n.useState)(""),j=Object(f.a)(y,2),S=j[0],k=j[1],w=function(e,t){"clickaway"!==t&&b(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(J,{open:E,messaggio:S,handleClose:w}),i.a.createElement(O.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",style:{minHeight:"80vh"}},i.a.createElement(O.a,{item:!0,xs:12,justify:"center",alignItems:"center",style:{marginTop:"40px"}},i.a.createElement(D.a,{variant:"filled",className:a.formControl},i.a.createElement(T.a,{htmlFor:"filled-age-native-simple"},"Sequenze"),i.a.createElement(R.a,{native:!0,value:o.azioni,onChange:(t="azioni",function(e){l(Object(h.a)({},o,Object(m.a)({},t,e.target.value))),"creaNuova883745"==e.target.value?p(!0):p(!1)}),inputProps:{name:"azioni",id:"filled-azini-native-simple"}},i.a.createElement("option",{value:""}),i.a.createElement("option",{value:10},"Ten"),i.a.createElement("option",{value:20},"Twenty"),i.a.createElement(P.a,null),i.a.createElement("option",{value:"creaNuova883745"},"+ Crea nuova")))),d?i.a.createElement(V,{apriSnack:function(e){console.log("apri snack"),b(!0),k(e)},chiudiSnack:w}):void 0))}function K(e){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-body"},i.a.createElement(W.a,{style:{margin:"50px",marginTop:"80px",minHeight:"80vh"}},i.a.createElement(S.a,{style:{color:"black",position:"fixed",right:"50px"},"aria-label":"logout",onClick:function(){e.chiudiFinestra()}},i.a.createElement(M.a,null)),"atleti"==e.cosa?i.a.createElement(Q,{apriSnack:e.apriSnack,chiudiSnack:e.apriSnack}):i.a.createElement(_,null))))}var Y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isSignedIn:!1,azioni:!1,atleti:!1},e.uiConfig={signInFlow:"popup",signInOptions:[U.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},e.chiudiFinestra=function(){e.setState({azioni:!1,atleti:!1})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unregisterAuthObserver=U.auth().onAuthStateChanged((function(t){return e.setState({isSignedIn:!!t})}))}},{key:"componentWillUnmount",value:function(){this.unregisterAuthObserver()}},{key:"render",value:function(){var e=this;return this.state.azioni?i.a.createElement(K,{cosa:"azioni",chiudiFinestra:this.chiudiFinestra}):this.state.atleti?i.a.createElement(K,{cosa:"atleti",chiudiFinestra:this.chiudiFinestra}):this.state.isSignedIn?i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-body"},i.a.createElement(O.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{minHeight:"100vh",minWidth:"100vw"}},i.a.createElement(O.a,{item:!0,xs:12,sm:6,justify:"center",alignItems:"center"},i.a.createElement(y.a,{variant:"h4"},"Benvenuto ",U.auth().currentUser.displayName)),i.a.createElement(O.a,{item:!0,xs:3,justify:"center",alignItems:"center"},i.a.createElement("div",{style:{height:"40px"}})),i.a.createElement(O.a,{item:!0,xs:12,sm:6,justify:"center",alignItems:"center"},i.a.createElement(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3},i.a.createElement(O.a,{item:!0,xs:6,justify:"center",alignItems:"center"},i.a.createElement(j.a,{variant:"contained",color:"secondary",size:"large",onClick:function(){return e.setState({azioni:!0})}},"Azioni")),i.a.createElement(O.a,{item:!0,xs:6,justify:"center",alignItems:"center"},i.a.createElement(j.a,{variant:"contained",color:"secondary",size:"large",onClick:function(){return e.setState({atleti:!0})}},"Atleti"))))))):i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(q.a,{uiConfig:this.uiConfig,firebaseAuth:U.auth()})))}}]),a}(i.a.Component),$=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({time:Date.now()})}),1500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return i.a.createElement("p",null,this.props.mosse[Math.floor(Math.random()*this.props.mosse.length)])}}]),a}(i.a.Component);function X(){var e=Object(n.useState)(["caricamento..."]),t=Object(f.a)(e,2),a=t[0],r=t[1],c=U.firestore();"caricamento..."===a[0]&&c.collection("mosse").doc("oueHRRQQ7wt6sV087Ynl").get().then((function(e){e.exists?r(e.data().lista):console.log("No such document!")})).catch((function(e){console.log("Error getting document",e)}));return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement($,{mosse:a})))}var Z=function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),r=a[0],c=a[1];return i.a.createElement("div",null,i.a.createElement(v.a,{theme:B},i.a.createElement(G,{schermataMaestro:r,setSchermataMaestro:c}),r?i.a.createElement(Y,null):i.a.createElement(X,null)))},ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/scherma",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/scherma","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):te(t,e)}))}}()},82:function(e,t,a){e.exports=a(103)},87:function(e,t,a){},88:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.f404fbd3.chunk.js.map