(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(358)}])},358:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return we}});var r=n(5893),a=n(9008),o=n.n(a),i=n(7160),s=n.n(i),c=n(9337),l=n.n(c),u=n(3695),f=n.n(u),d=n(7294),p=(n(6130),n(1193)),m=n.n(p),h=n(375),g=h.Z.apps.length?h.Z.app():h.Z.initializeApp({apiKey:"AIzaSyDeywR4_4KQSKDXz2rbDe6u_NVfpRaswTI",authDomain:"redskull-me.firebaseapp.com",projectId:"redskull-me",storageBucket:"redskull-me.appspot.com",messagingSenderId:"665630490828",appId:"1:665630490828:web:7ebeeaf81e97af87c84269",measurementId:"G-EVVLJ4X3ZM"}),b=n(6526);function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return!t||"object"!==N(t)&&"function"!==typeof t?j(e):t}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v(this,n)}}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(i,e);var t,n,a,o=k(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),_(j(t=o.call(this,e)),"onScroll",(function(){document.getElementById("con").style.display="none"})),_(j(t),"napSter",(function(){fetch("https://api.napster.com/v2.1/tracks/top?apikey=ODVjZDc4ZWMtNzcxNC00NjVlLWE1YjQtOGQzN2M1NGZlNTEx").then((function(e){return e.json()})).then((function(e){t.setState({napsterLink:e.tracks[Math.floor(Math.random()*e.tracks.length)].previewURL})}))})),t.state={musicLink:"",napsterLink:""},t}return t=i,(n=[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.onScroll);var t=(0,b.sN)(g);t.settings.minimumFetchIntervalMillis=1e4,t.defaultConfig={musicLink:""},(0,b.xS)(t).then((function(){var n=(0,b.NA)(t,"musicLink").asString();e.setState({musicLink:n})})).catch((function(e){console.log(e)})),this.napSter()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"render",value:function(){var e=1,t="undefined"!==typeof Audio&&new Audio("https://"+this.state.napsterLink.slice(7)),n=function(){1==e?"undefined"!=typeof Audio&&(t.play(),e=0):(t.pause(),e=1)},a=["/dance/dance.gif","/dance/dance2.gif","/dance/dance3.gif"],o=Math.floor(Math.random()*a.length);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("center",{children:(0,r.jsxs)("div",{className:f().Head,children:[(0,r.jsx)(m(),{axis:"x",handle:".handle",defaultPosition:{x:0,y:0},position:null,grid:[25,25],scale:1,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,children:(0,r.jsx)("div",{className:"handle",children:(0,r.jsx)("img",{src:a[o],className:f().Bitmoji,loading:"lazy","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Drag This Emote!",onClick:function(e){n()}})})}),(0,r.jsxs)("div",{className:f().content,children:[(0,r.jsx)("h1",{className:f().cute,children:"Hey,"}),(0,r.jsx)("h1",{className:f().title,children:(0,r.jsx)("span",{children:"Nice To Meet You!"})})]}),(0,r.jsx)("h1",{id:"con",className:f().continue,children:"Scroll Down"})]})})})}}])&&y(t.prototype,n),a&&y(t,a),i}(d.Component),P=n(9825),S=n.n(P),E=n(2711),C=n.n(E);n(3935);function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return!t||"object"!==L(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=T(e);if(t){var a=T(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return M(this,n)}}var z=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(i,e);var t,n,a,o=B(i);function i(){return R(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("center",{children:(0,r.jsxs)("main",{className:S().About,children:[(0,r.jsx)("h1",{className:S().title,"data-aos":"fade-up",children:"About Me!"}),(0,r.jsx)("div",{className:S().content,"data-aos":"fade-up",children:(0,r.jsxs)("p",{children:["Hey, Myself Meer Tarbani and Currently enrolled in Computer Application Field (BCA) at"," ",(0,r.jsx)("a",{href:"https://silveroakuni.ac.in",children:"Silver Oak University."})," ","Apart from my studies, I`m an Open-Source contributor at"," ",(0,r.jsx)("a",{href:"https://girlscript.tech",children:"GirlScript!"}),(0,r.jsx)("br",{}),"Also I`m lead of"," ",(0,r.jsx)("a",{href:"https://rdeclub.live",children:"Palm Tree Club."})]})}),(0,r.jsx)("img",{src:"images/emote1.png",loading:"lazy","data-aos":"fade-down",className:l().emote}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:S().title,"data-aos":"fade-up",children:"Thing`s I Love!"}),(0,r.jsxs)("div",{className:S().tech,"data-aos":"fade-up",children:[(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-down",src:"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-html-web-development-flaticons-lineal-color-flat-icons.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-up",src:"https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-css-no-code-flaticons-flat-flat-icons.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-down",src:"https://img.icons8.com/external-others-iconmarket/64/000000/external-js-file-types-others-iconmarket-4.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-up",src:"https://img.icons8.com/external-flat-juicy-fish/48/000000/external-c-coding-and-development-flat-flat-juicy-fish.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-down",src:"https://img.icons8.com/color/48/000000/flutter.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-up",src:"https://img.icons8.com/color/48/000000/google-cloud.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-down",src:"https://img.icons8.com/office/40/000000/react.png"}),(0,r.jsx)("img",{loading:"lazy","data-aos":"fade-up",src:"https://img.icons8.com/fluency/48/000000/python.png"})]})]})]})})})}}])&&A(t.prototype,n),a&&A(t,a),i}(d.Component),I=z,D=n(2802),F=n.n(D);function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return!t||"object"!==V(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Z(e);if(t){var a=Z(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return q(this,n)}}var U=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(i,e);var t,n,a,o=K(i);function i(){return W(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return(0,r.jsxs)("center",{children:[(0,r.jsx)("h1",{className:F().title,"data-aos":"fade-up",children:"Current Position"}),(0,r.jsxs)("div",{className:F().Position,"data-aos":"fade-up",children:[(0,r.jsx)("h1",{children:"GDSC Lead"}),(0,r.jsx)("img",{loading:"lazy",src:"https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg",alt:"GDSC",onClick:function(e){window.open("https://gdsc.community.dev/")}})]})]})}}])&&G(t.prototype,n),a&&G(t,a),i}(d.Component),X=U,Y=n(2159),J=n.n(Y),$=n(1163);function ee(){var e=(0,$.useRouter)();return(0,r.jsxs)("center",{children:[(0,r.jsx)("h1",{className:J().title,"data-aos":"fade-up",children:"Projects"}),(0,r.jsxs)("div",{className:J().projectsdiv,"data-aos":"fade-up",children:[(0,r.jsxs)("div",{className:J().card,"data-aos":"fade-right",children:[(0,r.jsx)("img",{src:"https://github.com/Redskull-127/projects/blob/main/assets/images/binge.png?raw=true",className:"card-img-top ".concat(J().projectimg),alt:"BINGE"}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("p",{className:J().cardp,children:"BINGE"}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{className:J().cardp,children:["BINGE is a free app for watching Movies and Tv shows for Free! Code is Available on"," ",(0,r.jsx)("a",{href:"https://github.com/redskull-127/BINGE_APP",children:"Github"})]}),(0,r.jsx)("button",{type:"button",onClick:function(){e.push("/BINGE")},className:"btn btn-warning ".concat(J().btn),children:"DOWNLOAD"})]})]}),(0,r.jsxs)("div",{className:J().card,"data-aos":"fade-up",children:[(0,r.jsx)("img",{src:"https://github.com/Redskull-127/projects/blob/main/assets/images/magic.png?raw=true",className:"card-img-top ".concat(J().projectimg),alt:"Magic-WOL"}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("p",{className:J().cardp,children:"Magic-WOL"}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{className:J().cardp,children:["Magic wakeup-on-lan app, helps you to wake your computer. Code is Available on"," ",(0,r.jsx)("a",{href:"https://github.com/Redskull-127/magicWOL",children:"Github"})]}),(0,r.jsx)("button",{type:"button",onClick:function(){e.push("https://github.com/Redskull-127/magicWOL")},className:"btn btn-warning ".concat(J().btn),children:"DOWNLOAD"})]})]}),(0,r.jsxs)("div",{className:J().card,"data-aos":"fade-left",children:[(0,r.jsx)("img",{src:"https://github.com/Redskull-127/projects/blob/main/assets/images/passmgr.png?raw=true",className:"card-img-top ".concat(J().projectimg),alt:"Pass Manager"}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("p",{className:J().cardp,children:"Pass Manager"}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{className:J().cardp,children:["Pass Manager helps you to keep your passwords secure! Code is Available on "," ",(0,r.jsx)("a",{href:"https://github.com/Redskull-127/Manager",children:"Github"})]}),(0,r.jsx)("button",{type:"button",onClick:function(){e.push("/Manager")},className:"btn btn-warning ".concat(J().btn),children:"VISIT"})]})]})]}),(0,r.jsxs)("div",{className:J().Projects,"data-aos":"fade-up",children:[(0,r.jsx)("p",{children:"Get My All Projects "})," ",(0,r.jsx)("br",{}),(0,r.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){e.push("/projects")},children:"Here"})]})]})}var te=n(8915),ne=n.n(te);function re(){var e=(0,d.useState)([]),t=e[0],n=e[1],a=(0,d.useState)([]),o=a[0],i=a[1],s=(0,d.useState)([]),c=s[0],l=s[1],u=(0,d.useState)([]),f=u[0],p=u[1],m=(0,d.useState)(!1),h=m[0],j=m[1],y=(0,d.useState)(!0),_=y[0],x=y[1],v=(0,d.useState)(""),w=(v[0],v[1]);return(0,d.useEffect)((function(){var e=(0,b.sN)(g);e.settings.minimumFetchIntervalMillis=1e4,e.defaultConfig={spotify:""},(0,b.xS)(e).then((function(){var t=(0,b.NA)(e,"spotify").asString();w(t),fetch("https://api.spotify.com/v1/me/player/currently-playing",{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n(JSON.stringify(e.item.name)),i(e.item.album.images[1].url),l(e.item.external_urls.spotify),x(!1),j(e.is_playing),p(e.item.artists),console.log(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}),[]),(0,r.jsx)(r.Fragment,{children:_?null:(0,r.jsxs)("div",{className:ne().current,children:[(0,r.jsx)(r.Fragment,{children:h?(0,r.jsx)("h1",{children:"Now Playing"}):(0,r.jsx)("h1",{children:"Was Listening"})}),(0,r.jsxs)("div",{className:ne().details,children:[(0,r.jsxs)("h1",{children:[" ",t," -",f.map((function(e,t){return(0,r.jsxs)(r.Fragment,{children:[e.name," "," "]})}))]}),(0,r.jsx)("img",{src:o,title:"Click To Play",onClick:function(e){e.preventDefault(),window.open(c,"_blank")}})]})]})})}var ae=n(4747),oe=n.n(ae),ie=(n(6721),n(3678),n(3454)),se=function(){var e=(0,d.useState)(""),t=e[0],n=e[1],a=(0,d.useState)(""),o=(a[0],a[1]);return(0,d.useEffect)((function(){var e=(0,b.sN)(g);e.settings.minimumFetchIntervalMillis=1e4,e.defaultConfig={testing:"not_working",musicLink:""},(0,b.xS)(e).then((function(){var t=document.getElementById("testing"),r=(0,b.NA)(e,"testing").asString(),a=(0,b.NA)(e,"musicLink").asString();t.innerHTML=r,n(ie.env.REACT_APP_FIREBASE_API_KEY),o(a)})).catch((function(e){console.log(e)}))}),[]),(0,r.jsxs)("div",{className:oe().testing,children:[(0,r.jsx)("h1",{id:"testing",children:"Loading"}),(0,r.jsx)("h1",{id:"toolip",children:t})]})},ce=n(7246),le=n.n(ce);function ue(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e,t){return!t||"object"!==he(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var he=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function ge(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=de(e);if(t){var a=de(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return pe(this,n)}}var be=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(s,e);var t,n,a,i=ge(s);function s(){return ue(this,s),i.apply(this,arguments)}return t=s,(n=[{key:"gmail",value:function(){window.open("mailto:admin@meertarbani.dev")}},{key:"linkedin",value:function(){window.open("https://www.linkedin.com/in/meer-tarbani-225243216")}},{key:"twitter",value:function(){window.open("https://twitter.com/meertarbani")}},{key:"render",value:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,300&display=swap",rel:"stylesheet"})]}),(0,r.jsxs)("div",{className:le().Footer,children:[(0,r.jsx)("h1",{children:"Connect with me..."}),(0,r.jsxs)("div",{className:le().imgs,children:[(0,r.jsx)("img",{loading:"lazy",onClick:this.gmail,src:"gifs/gmail.gif"}),(0,r.jsx)("img",{loading:"lazy",onClick:this.linkedin,src:"gifs/linkedin.gif"}),(0,r.jsx)("img",{loading:"lazy",onClick:this.twitter,src:"gifs/twitter.gif"})]})]})]})}}])&&fe(t.prototype,n),a&&fe(t,a),s}(d.Component),je=be,ye=n(7504),_e=n(5644),xe=n.n(_e);n(3454);function ve(){(0,d.useEffect)((function(){fetch("https://animechan.vercel.app/api/random").then((function(e){return e.json()})).then((function(e){e&&o(!1),c(e.quote),f(e.anime+" - "+e.character),h("Random Anime Quote")})),t("https://animechan.vercel.app/api/random")}),[]);var e=(0,d.useState)([]),t=(e[0],e[1]),n=(0,d.useState)(!0),a=n[0],o=n[1],i=(0,d.useState)(null),s=i[0],c=i[1],l=(0,d.useState)(null),u=l[0],f=l[1],p=(0,d.useState)(null),m=p[0],h=p[1];return a?(0,r.jsx)("div",{"data-aos":"fade-up",className:xe().quote,children:(0,r.jsx)("h1",{children:"Loading..."})}):(0,r.jsxs)("div",{"data-aos":"fade-up",className:xe().quote,children:[(0,r.jsx)("h1",{children:m}),(0,r.jsx)("br",{}),(0,r.jsxs)("h1",{children:["`",s,"`"]}),(0,r.jsx)("br",{}),(0,r.jsxs)("h1",{children:[" ",u]})]})}n(5503);function we(){var e=(0,d.useState)(!1),t=e[0],n=e[1];return(0,d.useEffect)((function(){var e=e||[];e.push("aR694qa3yr7BKorkHcnnVW"),function(){var e,t=document.createElement("script");t.src="https://cdn.tynt.com/ti.js",(e=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,e)}(),C().init({duration:2e3});var t=navigator.userAgent.toLowerCase(),r=t.indexOf("android")>-1,a=t.indexOf("iphone")>-1;(r||a)&&n(!0)}),[]),(0,r.jsxs)(d.Fragment,{children:[(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(ye.e,{component:"images/cursor2.png",isDisabled:t,width:50,height:50,zIndex:420,transform:"translate(-32%, -10%) rotateZ(0deg)"})}),(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Meer Tarbani"}),(0,r.jsx)("meta",{name:"description",content:"Meer Tarbani Portfolio Website"}),(0,r.jsx)("meta",{name:"keywords",content:"Meer Tarbani, Meer, Tarbani, Portfolio, Website, meer tarbani, meer tarbani acid, meer tarbani as a fraction, meer tarbani ba, meer tarbani bali, meer tarbani bangla, meer tarbani bangla lyrics, meer tarbani battery, meer tarbani bank, meer tarbani blood pressure, meer tarbani chords, meer tarbani com, meer tarbani code, meer tarbani center, meer tarbani de, meer tarbani delhi, meer tarbani dei, meer tarbani dit, meer tarbani definition, meer tarbani download, meer tarbani disease, meer tarbani english translation, meer tarbani english lyrics, meer tarbani english, meer tarbani english pdf, meer tarbani english subtitles, meer tarbani englisch, meer tarbani example, meer tarbani film, meer tarbani facebook, meer tarbani full movie, meer tarbani fakaza, meer tarbani font, meer tarbani file, meer tarbani for sale, eer tarbani gif, meer tarbani google translate, meer tarbani google scholar, meer tarbani google, meer tarbani google drive, meer tarbani games, meer tarbani germany,"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/images/favicon.ico"})]}),(0,r.jsxs)("main",{className:s().main,id:"mains",children:[(0,r.jsx)(O,{}),(0,r.jsx)(I,{}),(0,r.jsx)("img",{src:"images/emote2.png",loading:"lazy","data-aos":"fade-down",className:l().emote}),(0,r.jsx)(X,{}),(0,r.jsx)("img",{src:"images/emote3.png",loading:"lazy","data-aos":"fade-down",className:l().emote}),(0,r.jsx)(ee,{}),(0,r.jsx)("img",{src:"images/emote4.png",loading:"lazy","data-aos":"fade-down",className:s().emote4}),(0,r.jsx)(ve,{}),(0,r.jsx)(re,{}),(0,r.jsx)(se,{})]})]}),(0,r.jsx)("div",{onMouseEnter:function(e){n(!0)},onMouseLeave:function(e){n(!1)},children:(0,r.jsx)(je,{})})]})}},9825:function(e){e.exports={About:"About_About__D3Tjb",preloader:"About_preloader__O_Bhl",title:"About_title__mGjZR",content:"About_content__X0uk3",tech:"About_tech__pCABA"}},8915:function(e){e.exports={current:"CurrentPlaying_current__4LDPT",details:"CurrentPlaying_details__pfHb2"}},9337:function(e){e.exports={emote:"Emote_emote__JUri1"}},7246:function(e){e.exports={Footer:"Footer_Footer__qt1iW",imgs:"Footer_imgs__5CS7Z"}},3695:function(e){e.exports={Head:"Header_Head__cvU1v",cute:"Header_cute__9EgRH",continue:"Header_continue__XC5fv",title:"Header_title__UlymB",content:"Header_content__eF0vW",showup:"Header_showup__uEjnY",reveal:"Header_reveal__EaQm1",slidein:"Header_slidein__vOnN7",Bitmoji:"Header_Bitmoji__6p523"}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",preloader:"Home_preloader__HDxhp",emote4:"Home_emote4__fBPe_"}},2802:function(e){e.exports={Position:"Positions_Position__Wh0Ol",title:"Positions_title__5u4wy"}},2159:function(e){e.exports={Projects:"Projects_Projects__75z7g",projectsdiv:"Projects_projectsdiv__hNV5g",card:"Projects_card__xMaYd",projectimg:"Projects_projectimg___F1U6",cardp:"Projects_cardp__WHsNV",btn:"Projects_btn__iofQa",title:"Projects_title__KlqFj"}},5644:function(e){e.exports={quote:"Quote_quote__qomie"}},4747:function(e){e.exports={testing:"Testing_testing__7WiTJ"}}},function(e){e.O(0,[807,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);