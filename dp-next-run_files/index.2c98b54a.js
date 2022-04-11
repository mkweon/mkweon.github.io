import{V as d,a as A,m as B,i as Y,r as I,d as f,b as J,c as q,e as W,u as X,t as K,f as v,s as w,L as x,g as Z,p as Q,h as ee,j as te,k as oe,A as se,P as ie}from"./vendor.e1f08135.js";const re=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}};re();const ne="modulepreload",P={},ae="/",i=function(o,t){return!t||t.length===0?o():Promise.all(t.map(s=>{if(s=`${ae}${s}`,s in P)return;P[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":ne,r||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),r)return new Promise((c,l)=>{n.addEventListener("load",c),n.addEventListener("error",l)})})).then(()=>o())};const ce=e=>{const o=new de,t=le(e);let s;const r=[],a=n=>V(e,s,n).catch(c=>{o.emit("error",{error:c,data:n})});return o.on("request",n=>{s&&!r.length?a(n):r.push(n)}),o.on("terminate",()=>{V(e,s,{close:!0}),t.emit("terminate")}),t.on("close",()=>o.emit("close")).on("message",n=>{if("id"in n)for(s=n.id;r.length;)a(r.shift());else"ev"in n?o.emit("event",...n.ev):"rpc"in n?o.emit(...n.rpc):"sub"in n?o.emit(...n.sub):console.warn("unknown event",n)}),o},le=e=>{const o=new j;let t;const s=()=>{t=new window.EventSource(e),t.onerror=r=>o.emit("error",r),t.onopen=r=>o.emit("open",r),t.onmessage=r=>o.emit("message",JSON.parse(r.data))};return o.on("terminate",()=>{t.close()}),s(),o};class j{constructor(){this._listeners=new Map}on(o,t){var s;return this._listeners.has(o)||this._listeners.set(o,[]),(s=this._listeners.get(o))==null||s.push(t),this}once(o,t){const s=(...r)=>{this.off(o,s),t(...r)};return this.on(o,s)}off(o,t){return o?t?(this._listeners.has(o)&&this._listeners.set(o,this._listeners.get(o).filter(s=>s!==t)),this):(this._listeners.set(o,[]),this):(this._listeners=new Map,this)}emit(o,...t){if(!this._listeners.has(o))return!1;const s=this._listeners.get(o);return s.forEach(r=>r(...t)),s.length>0}}class de extends j{emitter(){return this._emitter||(this._emitter=new pe(this)),this._emitter}rpc(o){return new me(this,o)}subscribe(o,...t){return new _e(o,t,this)}close(){this.emit("terminate")}}const V=async(e,o,t)=>{await window.fetch(e,{method:"POST",mode:"same-origin",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","x-wire-id":o},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)})};class pe extends j{constructor(o){super();this.$emit=this.emit.bind(this),this.emit=(t,...s)=>(o.emit("request",{ev:[t,s]}),!0),o.on("event",(t,s)=>this.$emit(t,...s)).on("close",()=>this.$emit("close"))}}class me{constructor(o,t){this.remote=o,this._options=t||{requestTimeout:30}}async call(o,...t){const s=S(),{promise:r,resolve:a,reject:n}=new ue;return this.remote.once(s,(c,l)=>c?n(c):a(l)).emit("request",{rpc:[s,o,t]}),Promise.race([r,he(this._options.requestTimeout)])}}class _e{constructor(o,t,s){this.remote=s,this._closed=!1,this.id=S(),this.handle=this.handle.bind(this),this.remote.on(this.id,this.handle).emit("request",{sub:[this.id,o,t]})}handle(o){if(!this._closed){if(!this._onUpdate)return console.warn("unhandled subscription",o);this._onUpdate(o)}}onUpdate(o){this._onUpdate=o}close(){this._closed=!0,this.remote.emit("request",{sub:[this.id]}),this.remote.off(this.id,this.handle)}}class ue{constructor(){this.promise=new Promise((o,t)=>Object.assign(this,{resolve:o,reject:t}))}}const he=e=>new Promise((o,t)=>setTimeout(t,e*1e3,new Error("Request timeout"))),S=(e=2)=>Array.from(window.crypto.getRandomValues(new Uint32Array(e))).map(o=>o.toString(16)).join("-"),C=ce("/wire"),fe=C.rpc(),b=e=>new Proxy({},{get:(o,t)=>e(t)}),k=b(e=>b(o=>(t={})=>C.subscribe("resource",{resource:e,method:o,params:t}))),L=b(e=>b(o=>(t={})=>fe.call("call",e,o,t)));Object.assign(window,{rpc:L,api:k});const y=()=>i(()=>import("./ResourceComments.f705c89f.js"),["assets/ResourceComments.f705c89f.js","assets/utils.b0a2a79e.js","assets/index.a5d666a0.js","assets/vendor.e1f08135.js"]),ge=()=>i(()=>import("./layout.6c153b24.js"),["assets/layout.6c153b24.js","assets/index.ed70964f.js","assets/vendor.e1f08135.js"]),ve=()=>i(()=>import("./item.31c9b556.js"),["assets/item.31c9b556.js","assets/dedup.ace09045.js","assets/vendor.e1f08135.js"]),be=()=>i(()=>import("./layout.89507188.js"),["assets/layout.89507188.js","assets/dag.df7e6054.js","assets/utils.b0a2a79e.js","assets/index.a5d666a0.js","assets/dedup.ace09045.js","assets/icon-cancelled.e0728a21.js","assets/icon-blocked.0de30cbc.js","assets/icon-omitted.59440de0.js","assets/vendor.e1f08135.js"]),Ee=()=>i(()=>import("./item.8edfb282.js"),["assets/item.8edfb282.js","assets/vendor.e1f08135.js"]),Te=()=>i(()=>import("./overview.75f8e544.js"),["assets/overview.75f8e544.js","assets/vendor.e1f08135.js"]),we=()=>i(()=>import("./timeline.c853ae08.js"),["assets/timeline.c853ae08.js","assets/utils.b0a2a79e.js","assets/index.a5d666a0.js","assets/dag.df7e6054.js","assets/vendor.e1f08135.js"]),je=()=>i(()=>import("./files.ac5c99be.js"),["assets/files.ac5c99be.js","assets/vendor.e1f08135.js"]),Le=()=>i(()=>import("./errors.e7f97f75.js"),["assets/errors.e7f97f75.js","assets/vendor.e1f08135.js"]),ye=()=>i(()=>import("./logs.66a71b41.js"),["assets/logs.66a71b41.js","assets/dag.df7e6054.js","assets/vendor.e1f08135.js"]),Re=()=>i(()=>import("./activities.0ac2b668.js"),["assets/activities.0ac2b668.js","assets/ResourceTable.fb0d0c2c.js","assets/index.a5d666a0.js","assets/vendor.e1f08135.js","assets/dedup.ace09045.js"]),$e=()=>i(()=>import("./pipeline.2aabc18a.js"),["assets/pipeline.2aabc18a.js","assets/vendor.e1f08135.js"]),Oe=()=>i(()=>import("./layout.613fdcf4.js"),["assets/layout.613fdcf4.js","assets/icon-cancelled.e0728a21.js","assets/icon-blocked.0de30cbc.js","assets/icon-omitted.59440de0.js","assets/utils.b0a2a79e.js","assets/index.a5d666a0.js","assets/vendor.e1f08135.js"]),De=()=>i(()=>import("./item.f5d0466d.js"),["assets/item.f5d0466d.js","assets/vendor.e1f08135.js"]),Ae=()=>i(()=>import("./activities.0dd0106e.js"),["assets/activities.0dd0106e.js","assets/vendor.e1f08135.js"]),Ie=()=>i(()=>import("./layout.5adafa24.js"),["assets/layout.5adafa24.js","assets/vendor.e1f08135.js"]),xe=()=>i(()=>import("./item.e7cd4928.js"),["assets/item.e7cd4928.js","assets/vendor.e1f08135.js"]),Pe=()=>i(()=>import("./errors.5c29c2b8.js"),["assets/errors.5c29c2b8.js","assets/vendor.e1f08135.js"]),Ve=()=>i(()=>import("./history.ced76f7d.js"),["assets/history.ced76f7d.js","assets/vendor.e1f08135.js"]),Se=()=>i(()=>import("./layout.f7b635cd.js"),["assets/layout.f7b635cd.js","assets/index.c5f1f7e4.js","assets/vendor.e1f08135.js"]),Ce=()=>i(()=>import("./item.83c77a52.js"),["assets/item.83c77a52.js","assets/vendor.e1f08135.js"]),ke=()=>i(()=>import("./runs.abbc9796.js"),["assets/runs.abbc9796.js","assets/vendor.e1f08135.js"]),Ne=()=>i(()=>import("./spec.ecaa3569.js"),["assets/spec.ecaa3569.js","assets/vendor.e1f08135.js"]),ze=()=>i(()=>import("./activities.6818acf3.js"),["assets/activities.6818acf3.js","assets/ResourceTable.fb0d0c2c.js","assets/index.a5d666a0.js","assets/vendor.e1f08135.js"]),Fe=()=>i(()=>import("./overview.8ef0839c.js"),["assets/overview.8ef0839c.js","assets/vendor.e1f08135.js"]),Me=()=>i(()=>import("./layout.39cbd263.js"),["assets/layout.39cbd263.js","assets/Multiselect2.vue_vue&type=style&index=0&scoped=true&lang.bd932b52.js","assets/index.c5f1f7e4.js","assets/vendor.e1f08135.js","assets/UIForm.vue_vue&type=style&index=0&scoped=true&lang.7645200d.js","assets/utils.b0a2a79e.js","assets/index.a5d666a0.js"]),He=()=>i(()=>import("./layout.63639406.js"),["assets/layout.63639406.js","assets/icon-cancelled.e0728a21.js","assets/vendor.e1f08135.js"]),Ge=()=>i(()=>import("./item.5d3d72a1.js"),["assets/item.5d3d72a1.js","assets/vendor.e1f08135.js"]),Ue=()=>i(()=>import("./deliveries.0bdd466e.js"),["assets/deliveries.0bdd466e.js","assets/vendor.e1f08135.js"]),Be=()=>i(()=>import("./layout.ba76d7f8.js"),["assets/layout.ba76d7f8.js","assets/utils.b0a2a79e.js","assets/index.a5d666a0.js","assets/vendor.e1f08135.js"]),Ye=()=>i(()=>import("./item.d919c036.js"),["assets/item.d919c036.js","assets/vendor.e1f08135.js"]),Je=()=>i(()=>import("./details.f2c6b68b.js"),["assets/details.f2c6b68b.js","assets/vendor.e1f08135.js"]),qe=()=>i(()=>import("./table-layout.7aeb1b73.js"),["assets/table-layout.7aeb1b73.js","assets/vendor.e1f08135.js"]),We=()=>i(()=>import("./layout.efba8a9c.js"),["assets/layout.efba8a9c.js","assets/icon-cancelled.e0728a21.js","assets/icon-blocked.0de30cbc.js","assets/icon-omitted.59440de0.js","assets/utils.b0a2a79e.js","assets/index.a5d666a0.js","assets/vendor.e1f08135.js"]),Xe=()=>i(()=>import("./item.f8ec71f5.js"),["assets/item.f8ec71f5.js","assets/vendor.e1f08135.js"]),Ke=()=>i(()=>import("./workflow.68cfbc69.js"),["assets/workflow.68cfbc69.js","assets/vendor.e1f08135.js"]),Ze=()=>i(()=>import("./template.171cdd39.js"),["assets/template.171cdd39.js","assets/vendor.e1f08135.js"]),Qe=()=>i(()=>import("./generators.f7e04718.js"),["assets/generators.f7e04718.js","assets/vendor.e1f08135.js"]),et=()=>i(()=>import("./manifest.72a59676.js"),["assets/manifest.72a59676.js","assets/vendor.e1f08135.js"]),tt=()=>i(()=>import("./artifacts.43418033.js"),["assets/artifacts.43418033.js","assets/vendor.e1f08135.js"]),ot=()=>i(()=>import("./logs.445e0879.js"),["assets/logs.445e0879.js","assets/vendor.e1f08135.js"]),st=()=>i(()=>import("./layout.fdddeccc.js"),["assets/layout.fdddeccc.js","assets/utils.b0a2a79e.js","assets/index.a5d666a0.js","assets/vendor.e1f08135.js"]),it=()=>i(()=>import("./item.43ca4cb2.js"),["assets/item.43ca4cb2.js","assets/vendor.e1f08135.js"]),R=()=>i(()=>import("./generators.0f6441c7.js"),["assets/generators.0f6441c7.js","assets/vendor.e1f08135.js"]),rt=()=>i(()=>import("./executions.655c2b9f.js"),["assets/executions.655c2b9f.js","assets/vendor.e1f08135.js"]),nt=()=>i(()=>import("./workflow.97d78b1f.js"),["assets/workflow.97d78b1f.js","assets/vendor.e1f08135.js"]),at=()=>i(()=>import("./params.f9cf898b.js"),["assets/params.f9cf898b.js","assets/vendor.e1f08135.js"]),ct=()=>i(()=>import("./details.8fb2e2cb.js"),["assets/details.8fb2e2cb.js","assets/vendor.e1f08135.js"]),lt=()=>i(()=>import("./layout.196852fd.js"),["assets/layout.196852fd.js","assets/utils.b0a2a79e.js","assets/index.a5d666a0.js","assets/vendor.e1f08135.js"]),dt=()=>i(()=>import("./item.9efa5145.js"),["assets/item.9efa5145.js","assets/vendor.e1f08135.js"]),pt=()=>i(()=>import("./template.8d97755e.js"),["assets/template.8d97755e.js","assets/vendor.e1f08135.js"]),mt=()=>i(()=>import("./executions.73fab679.js"),["assets/executions.73fab679.js","assets/vendor.e1f08135.js"]),_t=()=>i(()=>import("./params.543bc0af.js"),["assets/params.543bc0af.js","assets/vendor.e1f08135.js"]),ut=()=>i(()=>import("./details.932bc715.js"),["assets/details.932bc715.js","assets/vendor.e1f08135.js"]),ht=()=>i(()=>import("./layout.444e3c43.js"),["assets/layout.444e3c43.js","assets/index.ed70964f.js","assets/vendor.e1f08135.js"]),ft=()=>i(()=>import("./item.b9ed0d22.js"),["assets/item.b9ed0d22.js","assets/vendor.e1f08135.js"]),gt=()=>i(()=>import("./layout.ed819238.js"),["assets/layout.ed819238.js","assets/vendor.e1f08135.js"]),vt=()=>i(()=>import("./not-found.01db4309.js"),["assets/not-found.01db4309.js","assets/vendor.e1f08135.js"]),m=()=>i(()=>import("./empty.da0b2128.js"),["assets/empty.da0b2128.js","assets/vendor.e1f08135.js"]);var bt=[{path:"/",redirect:"/runs"},{path:"/triggers",component:ge,children:[{path:"",component:m},{path:":id",component:ve}]},{path:"/runs",component:be,children:[{path:"",component:m},{path:":id",component:Ee,children:[{path:"/",redirect:"overview"},{path:"overview",component:Te,meta:{tab:"overview"}},{path:"timeline",component:we,meta:{tab:"timeline"}},{path:"files",component:je,meta:{tab:"files"}},{path:"pipeline",component:$e,meta:{tab:"pipeline"}},{path:"errors",component:Le,meta:{tab:"errors"}},{path:"logs",component:ye,meta:{tab:"logs"}},{path:"comments",component:y,meta:{tab:"comments"}},{path:"activities",component:Re,meta:{tab:"activities"}}]}]},{path:"/issues",component:Oe,children:[{path:"",component:m},{path:":id",component:De,children:[{path:"/",redirect:"comments"},{path:"comments",component:y,meta:{tab:"comments"}},{path:"activities",component:Ae,meta:{tab:"activities"}}]}]},{path:"/files",component:Ie,children:[{path:"",component:m},{path:":id",component:xe,children:[{path:"/",redirect:"history"},{path:"history",component:Ve,meta:{tab:"history"}},{path:"errors",component:Pe,meta:{tab:"errors"}}]}]},{path:"/etlconfignodes",component:Se,children:[{path:"",component:m},{path:":id",component:Ce,children:[{path:"/",redirect:"spec"},{path:"runs",component:ke,meta:{tab:"runs"}},{path:"overview",component:Fe,meta:{tab:"overview"}},{path:"spec",component:Ne,meta:{tab:"spec"}},{path:"comments",component:y,meta:{tab:"comments"}},{path:"activities",component:ze,meta:{tab:"activities"}}]}]},{path:"/notifications",component:He,children:[{path:"",component:m},{path:":id",component:Ge,children:[{path:"/",redirect:"deliveries"},{path:"deliveries",component:Ue,meta:{tab:"deliveries"}}]}]},{path:"/artifacts",component:Be,children:[{path:"",component:m},{path:":id",component:Ye,children:[{path:"/",redirect:"details"},{path:"details",component:Je,meta:{tab:"details"}}]}]},{path:"/executions-list",component:qe},{path:"/executions",component:We,children:[{path:"",component:m},{path:":id",component:Xe,children:[{path:"/",redirect:"workflow"},{path:"workflow",component:Ke,meta:{tab:"workflow"}},{path:"template",component:Ze,meta:{tab:"template"}},{path:"generators",component:Qe,meta:{tab:"generators"}},{path:"manifest",component:et,meta:{tab:"manifest"}},{path:"artifacts",component:tt,meta:{tab:"artifacts"}},{path:"logs",component:ot,meta:{tab:"logs"}}]}]},{path:"/templates",component:st,children:[{path:"",component:m},{path:":id",component:it,children:[{path:"/",redirect:"workflow"},{path:"details",component:ct,meta:{tab:"details"}},{path:"generators",component:R,meta:{tab:"generators"},children:[{path:"",component:m,meta:{tab:"generators"}},{path:":gid",component:R,meta:{tab:"generators"}}]},{path:"workflow",component:nt,meta:{tab:"workflow"}},{path:"executions",component:rt,meta:{tab:"executions"}},{path:"params",component:at,meta:{tab:"params"},children:[{path:"",component:m,meta:{tab:"params"}},{path:":gid",component:R,meta:{tab:"params"}}]}]}]},{path:"/generators",component:lt,children:[{path:"",component:m},{path:":id",component:dt,children:[{path:"/",redirect:"details"},{path:"details",component:ut,meta:{tab:"details"}},{path:"template",component:pt,meta:{tab:"template"}},{path:"executions",component:mt,meta:{tab:"executions"}},{path:"params",component:_t,meta:{tab:"params"}}]}]},{path:"/mltriggers",component:ht,children:[{path:"",component:m},{path:":id",component:ft}]},{path:"/preferences",component:Me},{path:"/sandbox",component:gt},{path:"/empty",component:m},{path:"*",component:vt}];d.use(A);var Et=new A({mode:"history",routes:bt});function Tt(e,o){e.component("Lazy",{props:["value","handle","params"],data(){return{loading:!1}},render(){return this.$scopedSlots.default({items:this.value,loading:this.loading,loadNextPage:this.loadNextPage})},created(){this.handle&&a(this)},watch:{params:{handler(c,l){a(this)},deep:!0}},destroyed(){s(this)},methods:{loadNextPage(c){n(this,c)}}});function t(c){return JSON.parse(JSON.stringify(c))}function s(c){(c.$lazySubs||[]).forEach(({cursor:l})=>l.close()),c.items=[],c.$lazySubs=null,c.loading=!1,c.$emit("input",c.items)}function r(c,l){if(c.$lazySubs=c.$lazySubs||[],c.$lazySubs.some(h=>Y(h.params,l)))return;const p=c.handle(l),u={data:null,cursor:p,loading:!0,params:l};c.$lazySubs.push(u),p.onUpdate(h=>{u.data=h,u.loading=!1,c.$emit("input",[].concat(...(c.$lazySubs||[]).map(({data:_})=>_).filter(Boolean))),c.loading=(c.$lazySubs||[]).some(({loading:_})=>_)}),c.loading=!0}function a(c){s(c),r(c,t(c.params))}function n(c,l){r(c,B(t(c.params),l))}}function wt(e,o){const t=document.body,s=document.documentElement,r=()=>Math.max(t.scrollHeight,t.offsetHeight,s.clientHeight,s.scrollHeight,s.offsetHeight);e.component("Height",{data(){return{windowHeight:window.innerHeight,documentHeight:r()}},render(){return this.$scopedSlots.default({windowHeight:this.windowHeight,documentHeight:this.documentHeight})},created(){window.addEventListener("resize",this.handle),this.$destroyed=!1;const a=()=>{if(!this.$destroyed){if(this.$updated){this.$updated=!1;const n=window.innerHeight;n!==this.windowHeight&&(this.windowHeight=n);const c=r();c!==this.documentHeight&&(this.documentHeight=c)}I(a)}};I(a)},methods:{handle(){this.$updated=!0}},destroyed(){window.removeEventListener("resize",this.handle),this.$destroyed=!0}})}function jt(e,o){f.extend(J),f.extend(q),f.extend(W),f.extend(X),f.extend(K),e.prototype.$date=f,e.mixin({methods:{formatLocalDate(t){const s=this.$preferences.timezone?this.$preferences.timezone:this.$date.tz.guess(),r=this.$date(t);return r.isToday()?r.tz(s).format("HH:mm"):r.tz(s).format("MMM D, HH:mm")},getUserTimezone(){return window.localStorage.preferences&&JSON.parse(window.localStorage.preferences).timezone&&JSON.parse(window.localStorage.preferences).timezone!=="local"&&JSON.parse(window.localStorage.preferences).timezone||this.$date.tz.guess()},utcToUserTimezone(t,s){const r=window.localStorage.preferences&&JSON.parse(window.localStorage.preferences).timezone&&JSON.parse(window.localStorage.preferences).timezone!=="local"&&JSON.parse(window.localStorage.preferences).timezone||this.$date.tz.guess(),a=this.$date.utc(t).local();return s?a.tz(r).format(s):a.isToday()?a.tz(r).format("HH:mm"):a.tz(r).format("MMM D, HH:mm")},dayBack(t,s){const r=/P([0-9]+D){0,1}(T([0-9]+H){0,1}([0-9]+M){0,1}([0-9]+S){0,1}){0,1}/,a=s.match(r),n=a[1]?a[1].slice(0,-1):0,c=a[3]?a[3].slice(0,-1):0,l=a[4]?a[4].slice(0,-1):0,p=a[5]?a[5].slice(0,-1):0;return this.$date(t).subtract(n,"day").subtract(c,"hour").subtract(l,"minute").subtract(p,"second")}}})}function Lt(e,o){e.mixin({beforeCreate(){this.$subFns=this.$options.subscriptions||{},this.$options.computed=this.$options.computed||{},Object.entries(this.$subFns).forEach(([t,s])=>{Object.assign(this.$options.computed,{[`_subscriptions$${t}`]:s.bind(this)})})},data(){const t={subscriptionsLoaded:!1};return Object.entries(this.$subFns).forEach(([s,r])=>{Object.assign(t,{[s]:{}})}),t},created(){this.$subs={},this.$subProgress=[],Object.keys(this.$subFns).forEach(t=>{this.$subProgress.push(t),this.$watch(`_subscriptions$${t}`,s=>{s&&s.onUpdate&&s.close&&(this.$subs[t]=s,s.onUpdate(r=>{this.$subs[t]===s?(this.$set(this.$data,t,r),this.$subProgress=this.$subProgress.filter(a=>a!==t),this.$subProgress.length||(this.subscriptionsLoaded=!0)):s.close()}))},{immediate:!0})})},destroyed(){Object.entries(this.$subs).forEach(([t,s])=>{s.close()})}})}function yt({api:e,rpc:o}){return(t,s)=>{t.prototype.$api=e,t.prototype.$rpc=o,Lt(t)}}function Rt(...e){return function(t,s){e.forEach(r=>{Object.entries(r).forEach(([a,n])=>{t.component(a,n.default||n)})})}}function $t(e,o){const t={getByKey(s){return window.localStorage.preferences&&window.localStorage.preferences[s]&&JSON.parse(window.localStorage.preferences[s])},save(s){const r=window.localStorage.preferences&&JSON.parse(window.localStorage.preferences),a=JSON.stringify(Object.assign({},r,s));return window.localStorage.preferences=a,a},get(){return window.localStorage.preferences&&JSON.parse(window.localStorage.preferences)||{}}};e.prototype.$preferences=t}function Ot(){const e=d.observable({nodes:[],scale:1,scrollX:0,scrollY:0,selectedNode:null,filter:""}),o={nodes:()=>e.nodes,scale:()=>e.scale,scrollX:()=>e.scrollX,scrollY:()=>e.scrollY,selectedNode:()=>e.selectedNode,filter:()=>e.filter},t={},s=n=>(t[n.id]||(t[n.id]={id:n.id,selected:!1,expanded:!1}),t[n.id].data=n,n.children=(n.children||[]).map(s),t[n.id]),r=(n=[],c=[])=>(n.forEach(l=>{c.push(l),r(l.data.children,c)}),c);return{state:e,getters:o,mutations:{setScrollX(n){e.scrollX=n},setScrollY(n){e.scrollY=n},setScale(n){e.scale=n},selectNode(n){e.selectedNode=n},toggleNode(n){const c=r(e.nodes).find(l=>l.id===n);c&&(c.expanded=!c.expanded)},setFilter(n){e.filter=n},setNodes(n){e.nodes=n.map(s)}}}}var Dt=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{on:{click:function(s){return e.$emit("toggle")}}},[e.showExpanded?t("svg",{attrs:{width:"11px",height:"8px",viewBox:"0 0 11 8",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[t("path",{attrs:{d:"M2.07678829,7.83274924 C2.07678829,7.94628499 2.11542866,8.05644024 2.18635388,8.14509676 C2.35885866,8.36072773 2.67350484,8.39568842 2.88913581,8.22318364 L8.14509676,4.01841488 C8.17392912,3.995349 8.20011776,3.96916035 8.22318364,3.940328 C8.39568842,3.72469703 8.36072773,3.41005085 8.14509676,3.23754607 L2.88913581,-0.967222691 C2.80047929,-1.03814791 2.69032403,-1.07678829 2.57678829,-1.07678829 C2.30064591,-1.07678829 2.07678829,-0.852930661 2.07678829,-0.576788286 L2.07678829,7.83274924 Z",id:"Rectangle",stroke:"#979797",fill:"#D8D8D8",transform:"translate(5.204787, 3.627999) rotate(90.000000) translate(-5.204787, -3.627999) "}})])]):e._e(),e.showCollapsed?t("svg",{attrs:{width:"8px",height:"11px",viewBox:"0 0 8 11",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[t("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[t("path",{attrs:{d:"M1.07678829,9.83274924 C1.07678829,9.94628499 1.11542866,10.0564402 1.18635388,10.1450968 C1.35885866,10.3607277 1.67350484,10.3956884 1.88913581,10.2231836 L7.14509676,6.01841488 C7.17392912,5.995349 7.20011776,5.96916035 7.22318364,5.940328 C7.39568842,5.72469703 7.36072773,5.41005085 7.14509676,5.23754607 L1.88913581,1.03277731 C1.80047929,0.96185209 1.69032403,0.923211714 1.57678829,0.923211714 C1.30064591,0.923211714 1.07678829,1.14706934 1.07678829,1.42321171 L1.07678829,9.83274924 Z",id:"Rectangle",stroke:"#979797",fill:"#D8D8D8"}})])]):e._e()])},At=[];function g(e,o,t,s,r,a,n,c){var l=typeof e=="function"?e.options:e;o&&(l.render=o,l.staticRenderFns=t,l._compiled=!0),s&&(l.functional=!0),a&&(l._scopeId="data-v-"+a);var p;if(n?(p=function(_){_=_||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!_&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(_=__VUE_SSR_CONTEXT__),r&&r.call(this,_),_&&_._registeredComponents&&_._registeredComponents.add(n)},l._ssrRegister=p):r&&(p=c?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),p)if(l.functional){l._injectStyles=p;var u=l.render;l.render=function(U,D){return p.call(D),u(U,D)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,p):[p]}return{exports:e,options:l}}const It={props:{expanded:{type:Boolean,default:!1},visible:{type:Boolean,default:!1}},computed:{showExpanded(){return this.expanded&&this.visible},showCollapsed(){return!this.expanded&&this.visible}}},N={};var xt=g(It,Dt,At,!1,Pt,"7cf818b2",null,null);function Pt(e){for(let o in N)this[o]=N[o]}var Vt=function(){return xt.exports}(),St=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",e._l(e.nodes,function(s){return t("div",{key:s.id},[t("Layout",{staticClass:"label",class:{selected:e.selected===s.id},attrs:{horizontal:""},on:{click:function(r){return e.$emit("select",s.id)}}},[t("Toggle",{attrs:{expanded:s.expanded,visible:e.hasChildren(s)},on:{toggle:function(r){return e.$emit("toggle",s.id)}}}),e._v(" "+e._s(s.data.name)+" ")],1),s.expanded&&e.hasChildren(s)?t("div",{staticClass:"children"},[t("Tree",{attrs:{nodes:s.data.children,selected:e.selected},on:{toggle:e.toggle,select:e.select}})],1):e._e()],1)}),0)},Ct=[];const $={name:"GanttTree",props:["nodes","selected"],methods:{toggle(e){this.$emit("toggle",e)},select(e){this.$emit("select",e)},hasChildren(e){return Boolean(e.data.children&&e.data.children.length)}}};$.components={Tree:$,Toggle:Vt};const kt=$,z={};var Nt=g(kt,St,Ct,!1,zt,null,null,null);function zt(e){for(let o in z)this[o]=z[o]}var Ft=function(){return Nt.exports}(),Mt=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"gantt-sidebar"},[t("Tree",{attrs:{nodes:e.store.state.nodes,selected:e.store.state.selectedNode},on:{toggle:e.toggle,select:e.select}})],1)},Ht=[];const Gt={props:["store"],components:{Tree:Ft},methods:{toggle(e){this.store.mutations.toggleNode(e)},select(e){this.store.mutations.selectNode(e)}}},F={};var Ut=g(Gt,Mt,Ht,!1,Bt,"1578835c",null,null);function Bt(e){for(let o in F)this[o]=F[o]}var Yt=function(){return Ut.exports}(),Jt=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"gantt-chart"},[t("div",{staticClass:"inner"},[e._l(e.timeMarks,function(s){return t("table",{key:s.id,staticClass:"gridlegend",style:s.style},[t("tr",[t("td",{staticClass:"header"},[e._v(e._s(s.name))])]),t("tr",[t("td",{staticClass:"footer"},[e._v(e._s(s.name))])])])}),e._l(e.visibleNodes,function(s){return t("div",{key:s.id,staticClass:"node"},[t("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.getTimeSpanTooltip(s),expression:"getTimeSpanTooltip(node)"}],staticClass:"segment",style:e.getSegmentStyle(s),on:{click:function(r){return e.click(s)}}},[t("div",{staticClass:"pad",style:e.getPadStyle(s)})]),t("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.getTimeSpanTooltip(s),expression:"getTimeSpanTooltip(node)"}],staticClass:"label",style:e.getLabelStyle(s),on:{click:function(r){return e.click(s)}}},[e._v(" "+e._s(e.getLabel(s))+" ")])])})],2)])},qt=[];const M=(e=[],o=[])=>(e.forEach(t=>{o.push(t),t.expanded&&M(t.data.children,o)}),o),E=(e=[],o=[])=>(e.forEach(t=>{o.push(t),E(t.data.children,o)}),o),T=e=>Math.min(...E(e).map(o=>new Date(o.data.startedAt).getTime()).filter(Boolean)),O=e=>Math.max(...E(e).map(o=>new Date(o.data.finishedAt).getTime()).filter(Boolean)),Wt={props:["store"],computed:{visibleNodes(){return M(this.store.state.nodes)},min(){return T(this.visibleNodes)},max(){return O(this.visibleNodes)},span(){return this.max-this.min},meta(){const e=1,{min:o,span:t}=this,r=1e3*e,a=this.$date(o);a.minute()>0&&a.hour(a.hour()+1),a.minute(0);const n=(a-o)/t*r,c=this.$date(a);c.hour(c.hour()+1);const l=(c-a)/t*r;return{screenSpace:r,screenScale:e,firstGridHour:this.$date(a),firstGridPos:n,gridSize:l,noOfGrids:parseInt(r/l)+1}},timeMarks(){let e=this.$date(this.meta.firstGridHour),o=[];o.push({id:`${this.$date(e).format("YYYY-MM-DD")}`,name:`${this.$date(e).format("YYYY-MM-DD")}`});for(let t=0;t<this.meta.noOfGrids;t++){const s=this.meta.firstGridPos+t*this.meta.gridSize;o.push({id:`${this.$date(e).format("YYYY-MM-DD HH:00")}`,name:`${this.$date(e).format("HH:00")}`,style:{left:`${s}px`,"border-left":"1px solid rgba(215,215,215)"}}),e=e.add(1,"hour")}return o}},methods:{click(e){e.data.children.length>0&&(e.expanded=!e.expanded)},getSegmentStyle(e){const{min:o,max:t,span:s}=this,n=1e3*1;if(e.data.children.length>0){const l=T(e.data.children),p=O(e.data.children),u=(l-o)/s*n,h=(p-l)/s*n;return{left:`${u}px`,width:`${h}px`,position:"absolute",cursor:"pointer"}}else{const l=new Date(e.data.startedAt).getTime(),p=new Date(e.data.finishedAt).getTime(),u=(l-o)/s*n,h=(p-l)/s*n;return{left:`${u}px`,width:`${h}px`,position:"absolute"}}},getPadStyle(e){const o=e.data.children.length>0,t=e.data.state;return{padding:"2px",margin:"0 2px",height:"24px",borderRadius:"4px",background:o?"rgba(0,0,255,.3)":t==="COMPLETED"?"rgba(0,255,0,.3)":t==="RUNNING"?"#03A9F4":t==="FAILED"||t==="UNKNOWN"?"#FF5722":"#afafaf"}},getLabelStyle(e){const{min:o,max:t,span:s}=this,n=1e3*1;return e.data.children.length>0?{left:`${(T(e.data.children)-o)/s*n}px`,padding:"0 0 0 8px",position:"absolute",cursor:"pointer"}:{left:`${(new Date(e.data.startedAt).getTime()-o)/s*n}px`,padding:"0 0 0 8px",position:"absolute"}},getLabel(e){if(e.data.children.length>0){let t=0;const s=/\d+/g;return E(e.data.children).forEach(r=>{const a=parseInt(r.data.duration.match(s));t+=isNaN(a)?0:a}),t?`${t} minutes`:""}else{const t=e.data.name||"",s=e.data.rows||"-",r=e.data.duration&&` in ${e.data.duration}`||"";return`${t} (${s} rows${r})`}},getTimeSpanTooltip(e){const o=e.data.children.length>0,t=o?T(e.data.children):e.data.startedAt,s=o?O(e.data.children):e.data.finishedAt,r=this.utcToUserTimezone(t),a=this.utcToUserTimezone(s);return{content:`Start: ${r}
End: ${a}`||"",classes:["info"]}}}},H={};var Xt=g(Wt,Jt,qt,!1,Kt,"03068478",null,null);function Kt(e){for(let o in H)this[o]=H[o]}var Zt=function(){return Xt.exports}(),Qt=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"gantt"},[t("div",{staticClass:"inner"},[t("Sidebar",{staticClass:"sidebar",attrs:{store:e.store}}),t("div",{staticClass:"content"},[t("Chart",{staticClass:"chart",attrs:{store:e.store}})],1)],1)])},eo=[];const to={props:{items:{type:Array,default(){return[]}}},data(){return{store:Ot()}},watch:{items:{deep:!0,immediate:!0,handler(e){this.store.mutations.setNodes(e)}}},components:{Sidebar:Yt,Chart:Zt}},G={};var oo=g(to,Qt,eo,!1,so,null,null,null);function so(e){for(let o in G)this[o]=G[o]}var io=function(){return oo.exports}();v`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
 
   ul {
     list-style: none;
   }

   html, body, #app {
     height: 100%;
   }
 `;v`
   html {
     font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
     font-weight: normal;
 
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-rendering: optimizeLegibility;
   }

   html, body {
     height: 100%;
     overflow: hidden;
   }
   
   .main {
     height: 100%;
   }
 
   .fade-enter-active,
   .fade-leave-active {
     transition-duration: 0.2s;
     transition-property: all;
     transition-timing-function: ease;
   }
 
   .fade-enter,
   .fade-leave-active {
     opacity: 0;
     transform: translateX(20px);
   }
 
 
   .fade-down-enter-active,
   .fade-down-leave-active {
     transition-duration: 0.15s;
     transition-property: all;
     transition-timing-function: ease;
   }
 
   .fade-down-enter,
   .fade-down-leave-active {
     opacity: 0;
     transform: translateY(20px);
   }
 
   .main-content {
     background: #EBEBEB;
     height: 100%;
   }
 
   .pagination {
     padding: 8px 0;
     text-align: center;
     line-height: 24px;
     font-size: 13px;
     li {
       display: inline-block;
       a {
         padding: 8px;
         outline: 0;
         ::selection {
           background: none;
         }
       }
       &.active {
         font-weight: bold;
       }
       &.disabled {
         opacity: 0.5;
       }
     }
   }
   
   .blink {
     animation: blink-animation 1s steps(5, start) infinite;
     -webkit-animation: blink-animation 1s steps(5, start) infinite;
   }
   
   .transparent {
     opacity: 0;
   }
   
   @keyframes blink-animation {
     to {
       visibility: hidden;
     }
   }
   
   @-webkit-keyframes blink-animation {
     to {
       visibility: hidden;
     }
   }
 
   .tooltip {
     &.info {
       .tooltip-inner {
         background: rgba(0,0,0,0.6);
         color: rgba(255,255,255,1);
         padding: 4px 8px;
         border: 1px solid rgba(0,0,0,1);
         border-radius: 3px;
         box-shadow: 0 5px 30px rgba(0,0,0,0.5);
         max-width: fit-content;
         font-size: 12px;
         white-space: pre;
       }
 
       .tooltip-arrow {
         border-color: rgba(233,242,247, 1);
       }
     }
   }

  .CodeMirror {
    // overflow-y: scroll !important;
    height: auto !important;
  }
  
  .CodeMirror-wrap pre {
    word-break: break-word;
  }
 `;v`
 
 .multiselect__tags {
   background: rgba(255,255,255,0.50);
   border: 1px solid #8D8D8D;
   border-radius: 2px;
   outline: none;
   width: 100%;
 
   font-size: 12px;
   color: #000000;
   letter-spacing: 0.11px;
   line-height: 16px;
 
   padding: 5px 8px;
   margin-bottom: 2px;
   margin-left: -8px;
 
   // min-height: 30px;
 
   &:focus {
     border-color: #007AC4;
   }
 }
 
 `;v`

.led {
  font-size: 11px;
  letter-spacing: 0;
  /* overflow:hidden; */
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  padding-right: 42px;
  /* random(5)/5 + s; */
}
.led:after {
  content: " ";
  width: 8px;
  height: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  position: absolute;
}
@keyframes blink-animation {
  0% {
    /* filter: saturate(100%)*/
    opacity: 1;
  }
  50% {
    opacity: 0.5;
    /* filter: saturate(80%)*/
  }
  100% {
    opacity: 1;
    /*filter: saturate(0%)*/
  }
}
.led.BLUE:after {
  background-color: #03a9f4;
  animation: blink-animation 7s infinite;
}
.led.GREEN:after {
  background: #4caf50;
  animation: none;
}
.led.GREY:after {
  background: #c8c8c8;
  animation: none;
}
.led.YELLOW:after {
  background: #ffc861;
  animation: blink-animation 1.5s infinite;
}
.led.RED:after {
  background: #ff5722;
  animation: blink-animation 1s infinite;
}

`;const ro=w("div",{horizontal:{type:Boolean,default:!1},wrap:{type:Boolean,default:!1},columns:{type:Number,default:1},gutter:{type:Array,default:null},padding:{type:String,default:"0"}})`
  display: flex;
  box-sizing: border-box;
  ${({padding:e})=>e!=="0"?`padding: ${e};`:""};
  min-width: 0;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: ${({columns:e})=>e===1?"auto":`${e*100}%`};
  flex-wrap: ${({wrap:e})=>e?"wrap":"nowrap"};
  flex-direction: ${({horizontal:e})=>e?"row":"column"};
  ${({gutter:e})=>e?`
     margin: 0 -${e[1]/2}px;
     & > * {
       padding: ${e[0]/2}px ${e[1]/2}px;
     }`:""}
`,no=d.component("RouterLink"),ao=w("span",{src:String,width:String,height:String})`
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  vertical-align: middle;

  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  background-image: url(${({src:e})=>e});
`,co=w("div",{})`
  flex: 1 1 auto;
  display: flex;
`;var lo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Layout:ro,RouterLink:no,Icon:ao,Spacer:co});const po={"./components/ArrayInput.vue":()=>i(()=>import("./ArrayInput.b7f25bba.js"),["assets/ArrayInput.b7f25bba.js","assets/vendor.e1f08135.js"]),"./components/ArrivalChart.vue":()=>i(()=>import("./ArrivalChart.406d2a40.js"),["assets/ArrivalChart.406d2a40.js","assets/vendor.e1f08135.js"]),"./components/ArtifactsTable.vue":()=>i(()=>import("./ArtifactsTable.94d9dd9a.js"),["assets/ArtifactsTable.94d9dd9a.js","assets/vendor.e1f08135.js"]),"./components/Avatar.vue":()=>i(()=>import("./Avatar.3c67fdb6.js"),["assets/Avatar.3c67fdb6.js","assets/vendor.e1f08135.js"]),"./components/CodeEditor.vue":()=>i(()=>import("./CodeEditor.9c77c5f1.js"),["assets/CodeEditor.9c77c5f1.js","assets/xml-fold.b4406c28.js","assets/vendor.e1f08135.js"]),"./components/Comments.vue":()=>i(()=>import("./Comments.ee1e050d.js"),["assets/Comments.ee1e050d.js","assets/vendor.e1f08135.js"]),"./components/CommentsBox.vue":()=>i(()=>import("./CommentsBox.894c697f.js"),["assets/CommentsBox.894c697f.js","assets/vendor.e1f08135.js"]),"./components/ConfigInput.vue":()=>i(()=>import("./ConfigInput.c1d68ff9.js"),["assets/ConfigInput.c1d68ff9.js","assets/vendor.e1f08135.js"]),"./components/ConfigViewer.vue":()=>i(()=>import("./ConfigViewer.96d60299.js"),["assets/ConfigViewer.96d60299.js","assets/xml-fold.b4406c28.js","assets/vendor.e1f08135.js"]),"./components/ConfirmDialog.vue":()=>i(()=>import("./ConfirmDialog.44d2bfb0.js"),["assets/ConfirmDialog.44d2bfb0.js","assets/vendor.e1f08135.js"]),"./components/DagOverview.vue":()=>i(()=>import("./DagOverview.1596697c.js"),["assets/DagOverview.1596697c.js","assets/utils.b0a2a79e.js","assets/index.a5d666a0.js","assets/dag.df7e6054.js","assets/vendor.e1f08135.js"]),"./components/Edge.vue":()=>i(()=>import("./Edge.38ed71fb.js"),["assets/Edge.38ed71fb.js","assets/vendor.e1f08135.js"]),"./components/ErrorsTable.vue":()=>i(()=>import("./ErrorsTable.ed5a64d1.js"),["assets/ErrorsTable.ed5a64d1.js","assets/vendor.e1f08135.js"]),"./components/ExecutionsTable.vue":()=>i(()=>import("./ExecutionsTable.622867bc.js"),["assets/ExecutionsTable.622867bc.js","assets/vendor.e1f08135.js"]),"./components/Factsheet.vue":()=>i(()=>import("./Factsheet.99b8f486.js"),["assets/Factsheet.99b8f486.js","assets/vendor.e1f08135.js"]),"./components/FileTreeNode.vue":()=>i(()=>import("./FileTreeNode.17e4870c.js"),["assets/FileTreeNode.17e4870c.js","assets/vendor.e1f08135.js"]),"./components/FileTreeViewer.vue":()=>i(()=>import("./FileTreeViewer.548478c9.js"),["assets/FileTreeViewer.548478c9.js","assets/vendor.e1f08135.js"]),"./components/FileUploader.vue":()=>i(()=>import("./FileUploader.4ba0af9c.js"),["assets/FileUploader.4ba0af9c.js","assets/vendor.e1f08135.js"]),"./components/FilesTable.vue":()=>i(()=>import("./FilesTable.86d0246b.js"),["assets/FilesTable.86d0246b.js","assets/vendor.e1f08135.js"]),"./components/GeneratorsTable.vue":()=>i(()=>import("./GeneratorsTable.3eb96364.js"),["assets/GeneratorsTable.3eb96364.js","assets/vendor.e1f08135.js"]),"./components/Gradient.vue":()=>i(()=>import("./Gradient.868c6e46.js"),["assets/Gradient.868c6e46.js","assets/vendor.e1f08135.js"]),"./components/Heading.vue":()=>i(()=>import("./Heading.0a224cbe.js"),["assets/Heading.0a224cbe.js","assets/vendor.e1f08135.js"]),"./components/LabelInput.vue":()=>i(()=>import("./LabelInput.ca3bbedc.js"),["assets/LabelInput.ca3bbedc.js","assets/vendor.e1f08135.js"]),"./components/ListTree.vue":()=>i(()=>import("./ListTree.909710fa.js"),["assets/ListTree.909710fa.js","assets/vendor.e1f08135.js"]),"./components/LogTreeNode.vue":()=>i(()=>import("./LogTreeNode.3542d65d.js"),["assets/LogTreeNode.3542d65d.js","assets/icon-cancelled.e0728a21.js","assets/icon-blocked.0de30cbc.js","assets/icon-omitted.59440de0.js","assets/vendor.e1f08135.js"]),"./components/LogTreeViewer.vue":()=>i(()=>import("./LogTreeViewer.bd4fea75.js"),["assets/LogTreeViewer.bd4fea75.js","assets/vendor.e1f08135.js"]),"./components/Modal.vue":()=>i(()=>import("./Modal.7b2b2be3.js"),["assets/Modal.7b2b2be3.js","assets/vendor.e1f08135.js"]),"./components/ModalForm.vue":()=>i(()=>import("./ModalForm.fae9277b.js"),["assets/ModalForm.fae9277b.js","assets/vendor.e1f08135.js"]),"./components/Multiselect2.vue":()=>i(()=>import("./Multiselect2.678a87d4.js"),["assets/Multiselect2.678a87d4.js","assets/Multiselect2.vue_vue&type=style&index=0&scoped=true&lang.bd932b52.js","assets/vendor.e1f08135.js"]),"./components/Navigation.vue":()=>i(()=>import("./Navigation.752d7d8c.js"),["assets/Navigation.752d7d8c.js","assets/vendor.e1f08135.js"]),"./components/NodeInput.vue":()=>i(()=>import("./NodeInput.33da869f.js"),["assets/NodeInput.33da869f.js","assets/vendor.e1f08135.js"]),"./components/ParamForm.vue":()=>i(()=>import("./ParamForm.a7506b02.js"),["assets/ParamForm.a7506b02.js","assets/utils.b0a2a79e.js","assets/index.a5d666a0.js","assets/vendor.e1f08135.js","assets/index.c5f1f7e4.js"]),"./components/ParamsTable.vue":()=>i(()=>import("./ParamsTable.2399e397.js"),["assets/ParamsTable.2399e397.js","assets/vendor.e1f08135.js"]),"./components/Resource.vue":()=>i(()=>import("./Resource.63e8dcd7.js"),["assets/Resource.63e8dcd7.js","assets/vendor.e1f08135.js"]),"./components/ResourceComments.vue":()=>i(()=>import("./ResourceComments.f705c89f.js"),["assets/ResourceComments.f705c89f.js","assets/utils.b0a2a79e.js","assets/index.a5d666a0.js","assets/vendor.e1f08135.js"]),"./components/ResourceList.vue":()=>i(()=>import("./ResourceList.88deea88.js"),["assets/ResourceList.88deea88.js","assets/vendor.e1f08135.js"]),"./components/ResourceTable.vue":()=>i(()=>import("./ResourceTable.fb0d0c2c.js"),["assets/ResourceTable.fb0d0c2c.js","assets/index.a5d666a0.js","assets/vendor.e1f08135.js"]),"./components/Sankey.vue":()=>i(()=>import("./Sankey.9713fd76.js"),["assets/Sankey.9713fd76.js","assets/dag.df7e6054.js","assets/vendor.e1f08135.js"]),"./components/Spinner.vue":()=>i(()=>import("./Spinner.5682b046.js"),["assets/Spinner.5682b046.js","assets/vendor.e1f08135.js"]),"./components/TableInput.vue":()=>i(()=>import("./TableInput.7dff49c4.js"),["assets/TableInput.7dff49c4.js","assets/dedup.ace09045.js","assets/vendor.e1f08135.js"]),"./components/Tabs.vue":()=>i(()=>import("./Tabs.4a807996.js"),["assets/Tabs.4a807996.js","assets/vendor.e1f08135.js"]),"./components/Title.vue":()=>i(()=>import("./Title.08816574.js"),["assets/Title.08816574.js","assets/vendor.e1f08135.js"]),"./components/UIButton.vue":()=>i(()=>import("./UIButton.a112f24c.js"),["assets/UIButton.a112f24c.js","assets/vendor.e1f08135.js"]),"./components/UIForm.vue":()=>i(()=>import("./UIForm.79157b5a.js"),["assets/UIForm.79157b5a.js","assets/Multiselect2.678a87d4.js","assets/Multiselect2.vue_vue&type=style&index=0&scoped=true&lang.bd932b52.js","assets/vendor.e1f08135.js","assets/index.c5f1f7e4.js","assets/UIForm.vue_vue&type=style&index=0&scoped=true&lang.7645200d.js"]),"./components/UITable.vue":()=>i(()=>import("./UITable.9b75e5f4.js"),["assets/UITable.9b75e5f4.js","assets/vendor.e1f08135.js"]),"./components/WorkflowOverview.vue":()=>i(()=>import("./WorkflowOverview.c91f9665.js"),["assets/WorkflowOverview.c91f9665.js","assets/dedup.ace09045.js","assets/vendor.e1f08135.js"])};x.install({version:d.version,component(e,o){o.beforeDestroy=function(){this.scrollbar&&this.scrollbar.destroy(),this.$el.removeEventListener("bs-update-scroll-value",this.updateScrollVal,!1),window.removeEventListener("resize",this.winResize,!1)}}});d.use(jt);d.use(yt({api:k,rpc:L}));d.use(x);d.use(Z);d.use(Q);d.use(ee);d.use(te);d.use(oe);d.use(se);d.component("Paginate",ie);d.use(Tt);d.use(wt);d.use($t);const mo=Object.fromEntries(Object.entries(po).map(([e,o])=>[e.split("/").pop().split(".vue").shift(),o]));d.use(Rt(lo,mo));d.component("Gantt",io);const _o=new d({router:Et,data(){return{transition:"fade"}},asyncComputed:{async env(){const{envName:e}=await this.$rpc.configs.env({});return e}},watch:{$route(e,o){const t=e.path.split("/").length;this.transition=t===2?"fade":""}},template:`
   <Layout horizontal class="main">
     <Navigation></Navigation>
     <Layout class="main-content">
       <transition :name="transition" mode="out-in">
         <router-view></router-view>
       </transition>
     </Layout>
     <portal-target name="modal"></portal-target>
   </Layout>
   `});L.users.me({}).then(e=>{d.prototype.$user=e,_o.$mount("#app")});export{i as _,g as n,Et as r};
