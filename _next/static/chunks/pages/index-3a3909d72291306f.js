(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(358)}])},358:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ne}});var r=n(5893),i=n(9008),a=n.n(i),o=n(7160),s=n.n(o),c=n(9337),l=n.n(c),u=n(3695),d=n.n(u),f=n(7294),p=(n(6130),n(1193)),m=n.n(p),h=n(375),g=h.Z.apps.length?h.Z.app():h.Z.initializeApp({apiKey:"AIzaSyDeywR4_4KQSKDXz2rbDe6u_NVfpRaswTI",authDomain:"redskull-me.firebaseapp.com",projectId:"redskull-me",storageBucket:"redskull-me.appspot.com",messagingSenderId:"665630490828",appId:"1:665630490828:web:7ebeeaf81e97af87c84269",measurementId:"G-EVVLJ4X3ZM"}),b=n(6526);function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return!t||"object"!==N(t)&&"function"!==typeof t?y(e):t}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var i=x(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(o,e);var t,n,i,a=k(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),_(y(t=a.call(this,e)),"onScroll",(function(){document.getElementById("con").style.display="none"})),_(y(t),"napSter",(function(){fetch("https://api.napster.com/v2.1/tracks/top?apikey=ODVjZDc4ZWMtNzcxNC00NjVlLWE1YjQtOGQzN2M1NGZlNTEx").then((function(e){return e.json()})).then((function(e){t.setState({napsterLink:e.tracks[Math.floor(Math.random()*e.tracks.length)].previewURL})}))})),t.state={musicLink:"",napsterLink:""},t}return t=o,(n=[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.onScroll);var t=(0,b.sN)(g);t.settings.minimumFetchIntervalMillis=1e4,t.defaultConfig={musicLink:""},(0,b.xS)(t).then((function(){var n=(0,b.NA)(t,"musicLink").asString();e.setState({musicLink:n})})).catch((function(e){console.log(e)})),this.napSter()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"render",value:function(){var e=1,t="undefined"!==typeof Audio&&new Audio("https://"+this.state.napsterLink.slice(7)),n=function(){1==e?"undefined"!=typeof Audio&&(t.play(),e=0):(t.pause(),e=1)},i=["/dance/dance.gif","/dance/dance2.gif","/dance/dance3.gif"],a=Math.floor(Math.random()*i.length);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("center",{children:(0,r.jsxs)("div",{className:d().Head,children:[(0,r.jsx)(m(),{axis:"x",handle:".handle",defaultPosition:{x:0,y:0},position:null,grid:[25,25],scale:1,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,children:(0,r.jsx)("div",{className:"handle",children:(0,r.jsx)("img",{src:i[a],className:d().Bitmoji,loading:"lazy","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Drag This Emote!",onClick:function(e){n()}})})}),(0,r.jsxs)("div",{className:d().content,children:[(0,r.jsx)("h1",{className:d().cute,children:"Hey,"}),(0,r.jsx)("h1",{className:d().title,children:(0,r.jsx)("span",{children:"Nice To Meet You!"})})]}),(0,r.jsx)("h1",{id:"con",className:d().continue,children:"Scroll Down"})]})})})}}])&&j(t.prototype,n),i&&j(t,i),o}(f.Component),P=n(9825),S=n.n(P),C=n(2711),L=n.n(C);n(3935);function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return!t||"object"!==I(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=A(e);if(t){var i=A(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return B(this,n)}}var T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(o,e);var t,n,i,a=H(o);function o(){return E(this,o),a.apply(this,arguments)}return t=o,(n=[{key:"render",value:function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("center",{children:(0,r.jsxs)("main",{className:S().About,children:[(0,r.jsx)("h1",{className:S().title,"data-aos":"fade-up",children:"About Me!"}),(0,r.jsx)("div",{className:S().content,"data-aos":"fade-up",children:(0,r.jsxs)("p",{children:["Hey, Myself Meer Tarbani and Currently enrolled in Computer Application Field (BCA) at"," ",(0,r.jsx)("a",{href:"https://silveroakuni.ac.in",children:"Silver Oak University."})," ","Apart from my studies, I`m an Open-Source contributor at"," ",(0,r.jsx)("a",{href:"https://girlscript.tech",children:"GirlScript!"}),(0,r.jsx)("br",{}),"Also I`m lead of"," ",(0,r.jsx)("a",{href:"https://rdeclub.live",children:"Palm Tree Club."})]})}),(0,r.jsx)("img",{src:"images/emote1.png",loading:"lazy","data-aos":"fade-down",className:l().emote}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:S().title,"data-aos":"fade-up",children:"Thing`s I Love!"}),(0,r.jsxs)("div",{className:S().tech,"data-aos":"fade-up",children:[(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-down",src:"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-html-web-development-flaticons-lineal-color-flat-icons.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-up",src:"https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-css-no-code-flaticons-flat-flat-icons.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-down",src:"https://img.icons8.com/external-others-iconmarket/64/000000/external-js-file-types-others-iconmarket-4.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-up",src:"https://img.icons8.com/external-flat-juicy-fish/48/000000/external-c-coding-and-development-flat-flat-juicy-fish.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-down",src:"https://img.icons8.com/color/48/000000/flutter.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-up",src:"https://img.icons8.com/color/48/000000/google-cloud.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-down",src:"https://img.icons8.com/office/40/000000/react.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-up",src:"https://img.icons8.com/fluency/48/000000/python.png"})]})]})]})})})}}])&&R(t.prototype,n),i&&R(t,i),o}(f.Component),z=T,D=n(2802),G=n.n(D);function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return!t||"object"!==Z(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=V(e);if(t){var i=V(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return U(this,n)}}var K=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(o,e);var t,n,i,a=Q(o);function o(){return F(this,o),a.apply(this,arguments)}return t=o,(n=[{key:"render",value:function(){return(0,r.jsxs)("center",{children:[(0,r.jsx)("h1",{className:G().title,"data-aos":"fade-up",children:"Current Position"}),(0,r.jsxs)("div",{className:G().Position,"data-aos":"fade-up",children:[(0,r.jsx)("h1",{children:"GDSC Lead"}),(0,r.jsx)("img",{loading:"lazy",src:"https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg",alt:"GDSC",onClick:function(e){window.open("https://gdsc.community.dev/")}})]})]})}}])&&W(t.prototype,n),i&&W(t,i),o}(f.Component),X=K,Y=n(2159),J=n.n(Y),$=n(1163);function ee(){var e=(0,$.useRouter)();return(0,r.jsxs)("center",{children:[(0,r.jsx)("h1",{className:J().title,"data-aos":"fade-up",children:"Projects"}),(0,r.jsxs)("div",{className:J().projectsdiv,"data-aos":"fade-up",children:[(0,r.jsxs)("div",{className:J().card,"data-aos":"fade-right",children:[(0,r.jsx)("img",{src:"https://github.com/Redskull-127/projects/blob/main/assets/images/binge.png?raw=true",className:"card-img-top ".concat(J().projectimg),alt:"BINGE"}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("p",{className:J().cardp,children:"BINGE"}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{className:J().cardp,children:["BINGE is a free app for watching Movies and Tv shows for Free! Code is Available on"," ",(0,r.jsx)("a",{href:"https://github.com/redskull-127/BINGE_APP",children:"Github"})]}),(0,r.jsx)("button",{type:"button",onClick:function(){e.push("/BINGE")},className:"btn btn-warning ".concat(J().btn),children:"DOWNLOAD"})]})]}),(0,r.jsxs)("div",{className:J().card,"data-aos":"fade-up",children:[(0,r.jsx)("img",{src:"https://github.com/Redskull-127/projects/blob/main/assets/images/magic.png?raw=true",className:"card-img-top ".concat(J().projectimg),alt:"Magic-WOL"}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("p",{className:J().cardp,children:"Magic-WOL"}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{className:J().cardp,children:["Magic wakeup-on-lan app, helps you to wake your computer. Code is Available on"," ",(0,r.jsx)("a",{href:"https://github.com/Redskull-127/magicWOL",children:"Github"})]}),(0,r.jsx)("button",{type:"button",onClick:function(){e.push("https://github.com/Redskull-127/magicWOL")},className:"btn btn-warning ".concat(J().btn),children:"DOWNLOAD"})]})]}),(0,r.jsxs)("div",{className:J().card,"data-aos":"fade-left",children:[(0,r.jsx)("img",{src:"https://github.com/Redskull-127/projects/blob/main/assets/images/passmgr.png?raw=true",className:"card-img-top ".concat(J().projectimg),alt:"Pass Manager"}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("p",{className:J().cardp,children:"Pass Manager"}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{className:J().cardp,children:["Pass Manager helps you to keep your passwords secure! Code is Available on "," ",(0,r.jsx)("a",{href:"https://github.com/Redskull-127/Manager",children:"Github"})]}),(0,r.jsx)("button",{type:"button",onClick:function(){e.push("/Manager")},className:"btn btn-warning ".concat(J().btn),children:"VISIT"})]})]})]}),(0,r.jsxs)("div",{className:J().Projects,"data-aos":"fade-up",children:[(0,r.jsx)("p",{children:"Get My All Projects "})," ",(0,r.jsx)("br",{}),(0,r.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){e.push("/projects")},children:"Here"})]})]})}var te=n(8915),ne=n.n(te);function re(){var e=(0,f.useState)([]),t=e[0],n=e[1],i=(0,f.useState)([]),a=i[0],o=i[1],s=(0,f.useState)([]),c=s[0],l=s[1],u=(0,f.useState)([]),d=u[0],p=u[1],m=(0,f.useState)(!1),h=m[0],y=m[1],j=(0,f.useState)(!0),_=j[0],x=j[1],v=(0,f.useState)(""),w=(v[0],v[1]);return(0,f.useEffect)((function(){var e=(0,b.sN)(g);e.settings.minimumFetchIntervalMillis=1e4,e.defaultConfig={spotify:""},(0,b.xS)(e).then((function(){var t=(0,b.NA)(e,"spotify").asString();w(t),fetch("https://api.spotify.com/v1/me/player/currently-playing",{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n(JSON.stringify(e.item.name)),o(e.item.album.images[1].url),l(e.item.external_urls.spotify),x(!1),y(e.is_playing),p(e.item.artists),console.log(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}),[]),(0,r.jsx)(r.Fragment,{children:_?null:(0,r.jsxs)("div",{className:ne().current,children:[(0,r.jsx)(r.Fragment,{children:h?(0,r.jsx)("h1",{children:"Now Playing"}):(0,r.jsx)("h1",{children:"Was Listening"})}),(0,r.jsxs)("div",{className:ne().details,children:[(0,r.jsxs)("h1",{children:[" ",t," -",d.map((function(e,t){return(0,r.jsxs)(r.Fragment,{children:[" ",e.name," "]})}))]}),(0,r.jsx)("img",{src:a,title:"Click To Play",onClick:function(e){e.preventDefault(),window.open(c,"_blank")}})]})]})})}var ie=n(4747),ae=n.n(ie),oe=(n(6721),n(3678),n(3454)),se=function(){var e=(0,f.useState)(""),t=e[0],n=e[1],i=(0,f.useState)(""),a=(i[0],i[1]);return(0,f.useEffect)((function(){var e=(0,b.sN)(g);e.settings.minimumFetchIntervalMillis=1e4,e.defaultConfig={testing:"not_working",musicLink:""},(0,b.xS)(e).then((function(){var t=document.getElementById("testing"),r=(0,b.NA)(e,"testing").asString(),i=(0,b.NA)(e,"musicLink").asString();t.innerHTML=r,n(oe.env.REACT_APP_FIREBASE_API_KEY),a(i)})).catch((function(e){console.log(e)}))}),[]),(0,r.jsxs)("div",{className:ae().testing,children:[(0,r.jsx)("h1",{id:"testing",children:"Loading"}),(0,r.jsx)("h1",{id:"toolip",children:t})]})},ce=n(7246),le=n.n(ce);function ue(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e,t){return!t||"object"!==he(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var he=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function ge(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=fe(e);if(t){var i=fe(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return pe(this,n)}}var be=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(s,e);var t,n,i,o=ge(s);function s(){return ue(this,s),o.apply(this,arguments)}return t=s,(n=[{key:"gmail",value:function(){window.open("mailto:admin@meertarbani.dev")}},{key:"linkedin",value:function(){window.open("https://www.linkedin.com/in/meer-tarbani-225243216")}},{key:"twitter",value:function(){window.open("https://twitter.com/meertarbani")}},{key:"render",value:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,300&display=swap",rel:"stylesheet"})]}),(0,r.jsxs)("div",{className:le().Footer,children:[(0,r.jsx)("h1",{children:"Connect with me..."}),(0,r.jsxs)("div",{className:le().imgs,children:[(0,r.jsx)("img",{loading:"lazy",onClick:this.gmail,src:"gifs/gmail.gif"}),(0,r.jsx)("img",{loading:"lazy",onClick:this.linkedin,src:"gifs/linkedin.gif"}),(0,r.jsx)("img",{loading:"lazy",onClick:this.twitter,src:"gifs/twitter.gif"})]})]})]})}}])&&de(t.prototype,n),i&&de(t,i),s}(f.Component),ye=be,je=n(7504),_e=n(5644),xe=n.n(_e);n(3454);function ve(){(0,f.useEffect)((function(){fetch("https://animechan.vercel.app/api/random").then((function(e){return e.json()})).then((function(e){e&&a(!1),c(e.quote),d(e.anime+" - "+e.character),h("Random Anime Quote")})),t("https://animechan.vercel.app/api/random")}),[]);var e=(0,f.useState)([]),t=(e[0],e[1]),n=(0,f.useState)(!0),i=n[0],a=n[1],o=(0,f.useState)(null),s=o[0],c=o[1],l=(0,f.useState)(null),u=l[0],d=l[1],p=(0,f.useState)(null),m=p[0],h=p[1];return i?(0,r.jsx)("div",{"data-aos":"fade-up",className:xe().quote,children:(0,r.jsx)("h1",{children:"Loading..."})}):(0,r.jsxs)("div",{"data-aos":"fade-up",className:xe().quote,children:[(0,r.jsx)("h1",{children:m}),(0,r.jsx)("br",{}),(0,r.jsxs)("h1",{children:["`",s,"`"]}),(0,r.jsx)("br",{}),(0,r.jsxs)("h1",{children:[" ",u]})]})}var we=n(6261);function Ne(){var e=(0,f.useState)(!1),t=e[0],n=e[1];(0,f.useEffect)((function(){var e=e||[];e.push("aR694qa3yr7BKorkHcnnVW"),function(){var e,t=document.createElement("script");t.src="https://cdn.tynt.com/ti.js",(e=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,e)}(),L().init({duration:2e3});var t=navigator.userAgent.toLowerCase(),r=t.indexOf("android")>-1,i=t.indexOf("iphone")>-1;(r||i)&&n(!0)}),[]);return(0,r.jsxs)(f.Fragment,{children:[(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(je.e,{component:"images/cursor2.png",isDisabled:t,width:50,height:50,zIndex:420,transform:"translate(-32%, -10%) rotateZ(0deg)"})}),(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Meer Tarbani"}),(0,r.jsx)("meta",{name:"description",content:"Meer Tarbani Portfolio Website"}),(0,r.jsx)("meta",{name:"keywords",content:"Meer Tarbani, Meer, Tarbani, Portfolio, Website, meer tarbani, meer tarbani acid, meer tarbani as a fraction, meer tarbani ba, meer tarbani bali, meer tarbani bangla, meer tarbani bangla lyrics, meer tarbani battery, meer tarbani bank, meer tarbani blood pressure, meer tarbani chords, meer tarbani com, meer tarbani code, meer tarbani center, meer tarbani de, meer tarbani delhi, meer tarbani dei, meer tarbani dit, meer tarbani definition, meer tarbani download, meer tarbani disease, meer tarbani english translation, meer tarbani english lyrics, meer tarbani english, meer tarbani english pdf, meer tarbani english subtitles, meer tarbani englisch, meer tarbani example, meer tarbani film, meer tarbani facebook, meer tarbani full movie, meer tarbani fakaza, meer tarbani font, meer tarbani file, meer tarbani for sale, eer tarbani gif, meer tarbani google translate, meer tarbani google scholar, meer tarbani google, meer tarbani google drive, meer tarbani games, meer tarbani germany,"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/images/favicon.ico"})]}),(0,r.jsxs)("main",{className:s().main,id:"mains",children:[(0,r.jsx)("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",id:"openSVG",className:d().menuopen,viewBox:"0 0 24 24",width:"24px",height:"24px",onClick:function(e){e.preventDefault();var t=document.getElementById("openSVG"),n=document.getElementById("closeSVG"),r=document.getElementById("container"),i=document.getElementById("headdiv");t.style.display="none",t.style.transition="all 0.5s ease-in-out",n.style.transition="all 0.5s ease-in-out",n.style.display="block",r.style.display="flex",r.style.left="65%",r.style.top="50%",r.style.transform="translate(50%, -65%)",r.style.zIndex="11",i.style.transition="all 0.5s ease-in-out",i.style.marginRight="50%"},children:(0,r.jsx)("path",{d:"M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"})}),(0,r.jsx)("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",id:"closeSVG",style:{display:"none"},className:d().menuopen,viewBox:"0 0 30 30",width:"24px",height:"24px",onClick:function(e){e.preventDefault();var t=document.getElementById("openSVG"),n=document.getElementById("closeSVG"),r=document.getElementById("container"),i=document.getElementById("headdiv");t.style.transition="all 0.5s ease-in-out",n.style.transition="all 0.5s ease-in-out",t.style.display="block",n.style.display="none",r.style.display="none",i.style.marginRight="0px"},children:(0,r.jsx)("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})}),(0,r.jsxs)("div",{className:d().container,style:{display:"none"},id:"container",children:[(0,r.jsx)("h1",{children:(0,r.jsx)(we.rU,{activeClass:"active",to:"aboutdiv",smooth:!0,duration:500,children:"About"})}),(0,r.jsx)("h1",{children:(0,r.jsx)(we.rU,{activeClass:"active",to:"positiondiv",smooth:!0,duration:500,children:"Work"})}),(0,r.jsx)("h1",{children:(0,r.jsx)(we.rU,{activeClass:"active",to:"positiondiv",smooth:!0,duration:500,children:"Projects"})}),(0,r.jsx)("h1",{children:(0,r.jsx)(we.rU,{activeClass:"active",to:"contactdiv",smooth:!0,duration:500,children:"Contact"})})]}),(0,r.jsx)("div",{id:"headdiv",children:(0,r.jsx)(O,{})}),(0,r.jsx)("div",{id:"aboutdiv",children:(0,r.jsx)(z,{})}),(0,r.jsx)("img",{src:"images/emote2.png",loading:"lazy","data-aos":"fade-down",className:l().emote}),(0,r.jsx)("div",{id:"positiondiv",children:(0,r.jsx)(X,{})}),(0,r.jsx)("img",{src:"images/emote3.png",loading:"lazy","data-aos":"fade-down",className:l().emote}),(0,r.jsx)("div",{id:"projectdiv",children:(0,r.jsx)(ee,{})}),(0,r.jsx)("img",{src:"images/emote4.png",loading:"lazy","data-aos":"fade-down",className:s().emote4}),(0,r.jsx)(ve,{}),(0,r.jsx)(re,{}),(0,r.jsx)("div",{id:"contactdiv",children:(0,r.jsx)(se,{})})]})]}),(0,r.jsx)("div",{onMouseEnter:function(e){n(!0)},onMouseLeave:function(e){n(!1)},children:(0,r.jsx)(ye,{})})]})}},9825:function(e){e.exports={About:"About_About__D3Tjb",preloader:"About_preloader__O_Bhl",title:"About_title__mGjZR",content:"About_content__X0uk3",tech:"About_tech__pCABA"}},8915:function(e){e.exports={current:"CurrentPlaying_current__4LDPT",details:"CurrentPlaying_details__pfHb2"}},9337:function(e){e.exports={emote:"Emote_emote__JUri1"}},7246:function(e){e.exports={Footer:"Footer_Footer__qt1iW",imgs:"Footer_imgs__5CS7Z"}},3695:function(e){e.exports={Head:"Header_Head__cvU1v",cute:"Header_cute__9EgRH",continue:"Header_continue__XC5fv",title:"Header_title__UlymB",content:"Header_content__eF0vW",showup:"Header_showup__uEjnY",reveal:"Header_reveal__EaQm1",slidein:"Header_slidein__vOnN7",menuopen:"Header_menuopen__RWgIi",Bitmoji:"Header_Bitmoji__6p523",container:"Header_container__B90GU",fadeIn:"Header_fadeIn__S0qXm"}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",preloader:"Home_preloader__HDxhp",emote4:"Home_emote4__fBPe_"}},2802:function(e){e.exports={Position:"Positions_Position__Wh0Ol",title:"Positions_title__5u4wy"}},2159:function(e){e.exports={Projects:"Projects_Projects__75z7g",projectsdiv:"Projects_projectsdiv__hNV5g",card:"Projects_card__xMaYd",projectimg:"Projects_projectimg___F1U6",cardp:"Projects_cardp__WHsNV",btn:"Projects_btn__iofQa",title:"Projects_title__KlqFj"}},5644:function(e){e.exports={quote:"Quote_quote__qomie"}},4747:function(e){e.exports={testing:"Testing_testing__7WiTJ"}}},function(e){e.O(0,[143,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);