_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{HyLH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n("o0o1"),i=n.n(a),r=n("HaE+");function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(c){i=!0,r=c}finally{try{a||null==s.return||s.return()}finally{if(i)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n("nKUr"),u=n("q1tI"),d=n.n(u),f=n("vDqi"),m=n.n(f),h=n("vFsZ"),g=n("IfJ9"),p=n("nhtP"),v=n("SJpO"),b={name:"",artist:"",level:"",genre:"",difficulty:""},j=n("dVpa"),y=n.n(j);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=m.a.create({baseURL:"https://kingofboxes.mxblue.net.au:4000/"}),w={heading:"Maimai DX",description:["Maimai DX is an arcade rhythm game with eight buttons spaced around in a circle. \n  Below are a list of songs available on the machine (the international version), \n  as the song list on the official site is not up-to-date.",'Every song is either a "Deluxe" or "Standard" song, and is specified by the logo. If it is a Deluxe song,\n  the font color is rainbow, and if it is a Standard song, the font color is white. Deluxe songs\n  are exclusive to Maimai DX, and some songs may even have both Deluxe and Standard versions! The genre\n  for each song is located in the top right corner.',"Each song has a minimum of four difficulties: BASIC, ADVANCED, EXPERT and MASTER.\n  Some songs have a fifth difficulty, RE:MASTER, which is harder than MASTER. The difficulty levels\n  of the songs range from 1 to 15, and there is only currently one song that is Level 15.","I do not own any of the images or songs, all ownership belongs to SEGA."]},S=function(e){var t=c(d.a.useState(!1),2),n=t[0],a=t[1],i=c(d.a.useState(5),2),r=i[0],o=i[1],s=c(d.a.useState(e.record),2),u=s[0],f=s[1],m=c(d.a.useState(b),2),j=m[0],_=m[1],E=function(e){var t=[],n=[];return e.forEach((function(e){t.includes(e.genre)||t.push(e.genre)})),t.map((function(e){n.push({key:e,text:e,value:e})})),n}(e.record),S=function(e){var t=[],n=[],a=[],i=[];return e.forEach((function(e){Object.keys(e.data).map((function(n){if(!t.includes(e.data[n].level)){var i=e.data[n].level.replace("+",".5");a.push(Number(i)),t.push(e.data[n].level)}}))})),a.sort((function(e,t){return e-t})),a.forEach((function(e){var t=String(e).replace(".5","+");n.push(t)})),n.map((function(e){i.push({key:e,text:e,value:e})})),i}(e.record),O=function(){var e=[];return["BASIC","ADVANCED","EXPERT","MASTER","REMASTER"].map((function(t){e.push({key:t,text:t,value:t})})),e}();d.a.useEffect((function(){var e=function(){var e=document.body.scrollHeight;window.scrollY+window.innerHeight>=e&&u&&r<u.length&&(a(!0),setTimeout((function(){a(!1),o(r+10)}),500))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[u,r]);var M=function(t){var n,a=e.record;""!==t.name&&(n=new RegExp("^".concat(t.name),"i"),a=a.filter((function(e){return n.test(e.song)}))),""!==t.artist&&(n=new RegExp("^".concat(t.artist),"i"),a=a.filter((function(e){return n.test(e.artist)}))),""!==t.genre&&(n=new RegExp(t.genre,"i"),a=a.filter((function(e){return n.test(e.genre)}))),""!==t.level&&(a=function(e,t){var n=t.replace("+","\\+"),a=[],i=new RegExp("^".concat(n,"$"),"i");return e.forEach((function(e){Object.keys(e.data).map((function(t){i.test(e.data[t].level)&&a.push(e)}))})),a=a.filter((function(e,t){return a.indexOf(e)===t}))}(a,t.level)),""!==t.level&&""!==t.difficulty&&(a=function(e,t,n){var a=t.replace("+","\\+"),i=[],r=new RegExp("^".concat(a,"$"),"i");return e.forEach((function(e){e.data[n]&&r.test(e.data[n].level)&&i.push(e)})),i=i.filter((function(e,t){return i.indexOf(e)===t}))}(a,t.level,t.difficulty)),f(a),_(t)};return Object(l.jsxs)(p.a,{title:"Maimai DX Song List | Justin's Website",children:[Object(l.jsx)(g.a,{data:w}),Object(l.jsx)("h2",{children:"Song List"}),Object(l.jsx)("div",{className:y.a.search,children:Object(l.jsxs)(h.a,{inverted:!0,children:[Object(l.jsxs)(h.a.Group,{widths:"equal",children:[Object(l.jsx)(h.a.Input,{clearable:!0,fluid:!0,label:"Song Name:",placeholder:"Search by song name...",value:j.name,onChange:function(e){var t=x(x({},j),{},{name:e.target.value});M(t)}}),Object(l.jsx)(h.a.Input,{clearable:!0,fluid:!0,label:"Artist:",placeholder:"Search by artist...",value:j.artist,onChange:function(e){var t=x(x({},j),{},{artist:e.target.value});M(t)}}),Object(l.jsx)(h.a.Dropdown,{clearable:!0,fluid:!0,label:"Genre:",selection:!0,placeholder:"Filter by genre...",options:E,onChange:function(e,t){var n=String(t.value),a=x(x({},j),{},{genre:n});M(a)}})]}),Object(l.jsxs)(h.a.Group,{widths:"equal",children:[Object(l.jsx)(h.a.Dropdown,{clearable:!0,fluid:!0,label:"Difficulty:",selection:!0,placeholder:"Filter by difficulty...",options:O,onChange:function(e,t){var n=String(t.value),a=x(x({},j),{},{difficulty:n});M(a)}}),Object(l.jsx)(h.a.Dropdown,{clearable:!0,fluid:!0,label:"Level:",selection:!0,placeholder:"Filter by level...",options:S,onChange:function(e,t){var n=String(t.value),a=x(x({},j),{},{level:n});M(a)}})]})]})}),u&&u.map((function(e,t){if(t<r)return Object(l.jsx)(v.MaimaiSongComponent,{song:e},e.id)})),n&&Object(l.jsx)(v.MaimaiSongLoader,{})]})};S.getInitialProps=Object(r.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/maimai");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));var O=S},SJpO:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.MaimaiSongLoader=t.MaimaiSongComponent=void 0;var i=n("nKUr"),r=(a(n("q1tI")),n("FvIY")),o=a(n("dVpa")),s=function(e){var t=e.song;return(0,i.jsxs)("div",{className:o.default.container,children:[(0,i.jsx)("div",{className:o.default.album,children:(0,i.jsx)("img",{src:t.cover,alt:"".concat(t.song,"-album-cover")})}),(0,i.jsxs)("div",{className:o.default.info,children:[(0,i.jsxs)("div",{className:o.default.header,children:["DELUXE"===t.version&&(0,i.jsx)("div",{className:o.default.version,children:(0,i.jsx)("img",{src:"https://maimaidx-eng.com/maimai-mobile/img/music_dx.png"})}),"STANDARD"===t.version&&(0,i.jsx)("div",{className:o.default.version,children:(0,i.jsx)("img",{src:"https://maimaidx-eng.com/maimai-mobile/img/music_standard.png"})}),(0,i.jsx)("span",{className:o.default.genre,children:t.genre})]}),(0,i.jsxs)("div",{className:o.default.details,children:[(0,i.jsx)("span",{className:o.default.songname,children:t.song}),(0,i.jsx)("hr",{}),(0,i.jsx)("span",{className:o.default.artist,children:t.artist})]}),(0,i.jsx)("div",{className:o.default.difficulty,children:Object.keys(t.data).map((function(e){return(0,i.jsx)("div",{className:o.default[e],children:t.data[e]&&t.data[e].level},"".concat(t.id,"-").concat(e))}))})]})]},t.id)};t.MaimaiSongComponent=s;var c=function(){return(0,i.jsxs)(r.Segment,{children:[(0,i.jsx)(r.Dimmer,{active:!0,children:(0,i.jsx)(r.Loader,{size:"big",children:"Loading"})}),(0,i.jsx)(r.Image,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"}),(0,i.jsx)(r.Image,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"}),(0,i.jsx)(r.Image,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})]})};t.MaimaiSongLoader=c,e.exports={MaimaiSongComponent:s,MaimaiSongLoader:c}},dVpa:function(e,t,n){e.exports={container:"Maimai_container__1bz6i",album:"Maimai_album__2wC7q",info:"Maimai_info__tg7EQ",header:"Maimai_header__21xQ-",details:"Maimai_details__69TwU",songname:"Maimai_songname__3Yqm0",artist:"Maimai_artist__1gzyf",version:"Maimai_version__3t-xx",difficulty:"Maimai_difficulty__1zQ-E",BASIC:"Maimai_BASIC__1O5fN",ADVANCED:"Maimai_ADVANCED__1WYQN",EXPERT:"Maimai_EXPERT__3yeY_",MASTER:"Maimai_MASTER__3OZYN",REMASTER:"Maimai_REMASTER__2buiu",search:"Maimai_search__1CXjS",genre:"Maimai_genre__3r1Bp"}},fDYi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/maimai",function(){return n("HyLH")}])}},[["fDYi",0,2,4,1,3,5,6]]]);