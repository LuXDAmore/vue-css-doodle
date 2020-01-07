(function(t){function e(e){for(var a,l,o=e[0],i=e[1],c=e[2],d=0,v=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&v.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);p&&p(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,l=1;l<s.length;l++){var i=s[l];0!==r[i]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},r={index:0},n=[];function l(t){return o.p+"js/"+({"css-doodle":"css-doodle"}[t]||t)+"."+{"css-doodle":"cb31829d"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=r[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=a);var n,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=l(t);var c=new Error;n=function(e){i.onerror=i.onload=null,clearTimeout(d);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,s[1](c)}r[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:i})}),12e4);i.onerror=i.onload=n,document.head.appendChild(i)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="https://luxdamore.github.io/vue-css-doodle/",o.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var p=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"15a9":function(t,e,s){},"2c17":function(t,e,s){"use strict";(function(t){var a=s("f568"),r={VueCssDoodle:a["a"],installed:!1,install(t){r.installed||(r.installed=!0,t.config.ignoredElements=["css-doodle"],t.component(a["a"].name,a["a"]))}},n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(r),e["a"]=r}).call(this,s("c8ba"))},"2d7d":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),r=(s("7b04"),s("e4cb"),s("abe2"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"app"},[s("div",{staticClass:"grid-container"},[s("div",{staticClass:"grid-cell left"},[s("aside",[s("section",[s("vue-css-doodle",{attrs:{absolute:"",use:"var(--ruleOne)","click-to-update":""}})],1)])]),s("div",{staticClass:"grid-cell right"},[s("section",{staticClass:"readme"},[s("readme",{staticClass:"markdown-body"})],1)])])])}),n=[],l=s("a70e"),o=s.n(l),i=s("f0f8"),c=s.n(i),d=s("4dd1"),p=s.n(d),v=(s("2c43"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("h1",[t._v("🎉 Vue Css Doodle")]),s("p",[s("a",{attrs:{href:"https://luxdamore.github.io/vue-css-doodle"}},[t._v("DEMO")])]),s("blockquote",[s("p",[t._v("Porting of css-doodle to VueJs")])]),s("p",[s("a",{attrs:{href:"https://npmjs.com/package/@luxdamore/vue-css-doodle"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/@luxdamore/vue-css-doodle/latest.svg?style=flat-square",alt:"npm version"}})]),s("br"),s("a",{attrs:{href:"https://npmjs.com/package/@luxdamore/vue-css-doodle"}},[s("img",{attrs:{src:"https://img.shields.io/npm/dt/@luxdamore/vue-css-doodle.svg?style=flat-square",alt:"npm downloads"}})]),s("br"),s("a",{attrs:{href:"https://npmjs.com/package/@luxdamore/vue-css-doodle"}},[s("img",{attrs:{src:"https://img.shields.io/npm/l/@luxdamore/vue-css-doodle.svg?style=flat-square",alt:"License"}})])]),s("h2",[t._v("Installation")]),s("p",[t._v("This package is available on npm.")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# Deps")]),t._v("\n    npm install --save @luxdamore/vue-css-doodle\n\n")])]),s("h3",[t._v("Usage")]),s("h4",[t._v("As a component")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Component")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { VueCssDoodle } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@luxdamore/vue-css-doodle'")]),t._v(";\n    "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@luxdamore/vue-css-doodle/dist/VueCssDoodle.css'")]),t._v(";\n\n    "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Install")]),t._v("\n    Vue.component(\n        VueCssDoodle.name,\n        VueCssDoodle\n    );\n\n    "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Or in a .vue file")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(": {\n            "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue-css-doodle'")]),t._v(": VueCssDoodle,\n        },\n    };\n\n    "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Add this line to your main.js")]),t._v("\n    Vue.config.ignoredElements = [ "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'css-doodle'")]),t._v(" ];\n\n")])]),s("h4",[t._v("As a plugin")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Plugin")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" VueCssDoodle "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@luxdamore/vue-css-doodle'")]),t._v(";\n    "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@luxdamore/vue-css-doodle/dist/VueCssDoodle.css'")]),t._v(";\n\n    "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Install")]),t._v("\n    Vue.use(\n        VueCssDoodle\n    );\n\n")])]),s("h4",[t._v("Browser’s way")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v("<!doctype "),s("span",{pre:!0,attrs:{class:"hljs-meta-keyword"}},[t._v("html")]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("html")]),t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("head")]),t._v(">")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- VueCssDoodle style --\x3e")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- Old way --\x3e")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rel")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"stylesheet"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"https://unpkg.com/@luxdamore/vue-css-doodle@latest/dist/VueCssDoodle.css"')]),t._v(" />")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- end old way --\x3e")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- New way --\x3e")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rel")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"preload"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"https://unpkg.com/@luxdamore/vue-css-doodle@latest/dist/VueCssDoodle.css"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("as")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"style"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("onload")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"this.rel='stylesheet'\"")]),t._v(" />")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rel")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"preload"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"https://unpkg.com/@luxdamore/vue-css-doodle@latest/dist/VueCssDoodle.umd.min.js"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("as")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"script"')]),t._v(" />")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- end new way --\x3e")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- end VueCssDoodle style --\x3e")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("head")]),t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("body")]),t._v(">")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!--\n                Others script (ex. VueJs) and html.\n            --\x3e")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- VueCssDoodle script --\x3e")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"https://unpkg.com/@luxdamore/vue-css-doodle@latest/dist/VueCssDoodle.umd.min.js"')]),t._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- end VueCssDoodle script --\x3e")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("body")]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("html")]),t._v(">")]),t._v("\n\n")])]),s("h4",[t._v("Markup")]),s("p",[s("em",[t._v("Use it just one time in the main file of your project or in every views where you want it.")])]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vue-css-doodle")]),t._v(" />")]),t._v("\n\n")])]),s("h4",[t._v("Integrations")]),s("h4",[t._v("NuxtJS")]),s("ul",[s("li",[t._v("Create a file in the "),s("code",{pre:!0},[t._v("plugins")]),t._v(" folder;")]),s("li",[t._v("Name it "),s("code",{pre:!0},[t._v("vue-css-doodle.client.js")]),t._v(";")]),s("li",[t._v("Install it "),s("em",[t._v("as a plugin")]),t._v(";")]),s("li",[t._v("Import it in the "),s("code",{pre:!0},[t._v("nuxt.config.js")]),t._v(" file as "),s("a",{attrs:{href:"https://nuxtjs.org/guide/plugins/#client-side-only"}},[s("em",[t._v("client side only")])]),t._v(".")])]),s("h3",[t._v("Options")]),s("h4",[t._v("Slots")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# Available")]),t._v("\n    slot="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"default"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v('# Add the content, it expose v-slot="{ generate }" method to refresh the doodle')]),t._v("\n\n")])]),s("h3",[t._v("Options")]),s("h4",[t._v("Props")]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Attribute")]),s("th",[t._v("Type")]),s("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),s("th",[t._v("About")])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("title")]),s("td",[t._v("String")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),s("td",[t._v("The title")])]),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("grid")]),s("td",[t._v("String or Number")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),s("td",[t._v("Check the "),s("a",{attrs:{href:"https://css-doodle.com/#usage"}},[t._v("DOCS")])])]),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("use")]),s("td",[t._v("String")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),s("td",[t._v("Check the "),s("a",{attrs:{href:"https://css-doodle.com/#usage"}},[t._v("DOCS")])])]),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("height")]),s("td",[t._v("String")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),s("td",[t._v("Height of the doodle")])]),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("width")]),s("td",[t._v("String")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),s("td",[t._v("Width of the doodle")])]),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("clickToUpdate")]),s("td",[t._v("Boolean")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),s("td",[t._v("Refresh on click")])]),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("overflowHidden")]),s("td",[t._v("Boolean")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),s("td",[t._v("Hide the overflow")])]),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("absolute")]),s("td",[t._v("Boolean")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),s("td",[t._v("Set position: absolute")])])])]),s("hr"),s("h2",[t._v("🐞 Issues")]),s("p",[t._v("Please make sure to read the "),s("a",{attrs:{href:"/.github/ISSUE_TEMPLATE/bug_report.md"}},[t._v("Issue Reporting Checklist")]),t._v(" before opening an issue. Issues not conforming to the guidelines may be closed immediately.")]),s("h2",[t._v("👥 Contribution")]),s("p",[t._v("Please make sure to read the "),s("a",{attrs:{href:"/.github/ISSUE_TEMPLATE/feature_request.md"}},[t._v("Contributing Guide")]),t._v(" before making a pull request.")]),s("h2",[t._v("📖 Changelog")]),s("p",[t._v("Details changes for each release are documented in the "),s("a",{attrs:{href:"./CHANGELOG.md"}},[s("strong",[t._v("release notes")])]),t._v(".")]),s("h3",[t._v("📃 License")]),s("p",[s("a",{attrs:{href:"./LICENSE"}},[t._v("MIT License")]),t._v(" // Copyright (©) 2019-present "),s("a",{attrs:{href:"https://lucaiaconelli.it"}},[t._v("Luca Iaconelli")])]),s("h4",[t._v("💸 Are you feeling generous today? :)")]),s("p",[t._v("Do you want to share a beer? We can be good friends… "),s("strong",[s("a",{attrs:{href:"https://www.paypal.me/luxdamore"}},[t._v("Paypal")]),t._v(" // "),s("a",{attrs:{href:"https://www.patreon.com/luxdamore"}},[t._v("Patreon")])])]),s("blockquote",[s("p",[s("em",[t._v("It’s always a good day to be magnanimous - cit")])])]),s("h4",[t._v("💼 Hire me")]),s("p",[s("a",{attrs:{href:"https://otechie.com/luxdamore"}},[s("img",{attrs:{src:"https://api.otechie.com/consultancy/luxdamore/badge.svg",alt:"Otechie"}})])]),s("p",[s("a",{attrs:{href:"https://ko-fi.com/luxdamore"}},[s("img",{attrs:{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"}})])]),s("h4",[t._v("💘 Inspired by")]),s("p",[s("a",{attrs:{href:"https://css-doodle.com"}},[t._v("Css-Doodle")])])])}],_=s("2877"),h={},m=Object(_["a"])(h,v,u,!1,null,null,null),g=m.exports;o.a.registerLanguage("bash",c.a),o.a.registerLanguage("javascript",p.a);var f={name:"v-app",components:{readme:g},mounted(){this.$nextTick(()=>{this.initHighlight(),this.initReadmeLinks()})},methods:{initHighlight(){var t=document.querySelectorAll("pre");t.forEach(t=>o.a.highlightBlock(t))},initReadmeLinks(){for(var t=document.querySelectorAll(".readme > article a"),e=0;e<t.length;e++)t[e].setAttribute("target","_blank")}}},y=f,j=(s("91cb"),s("ef1f"),Object(_["a"])(y,r,n,!1,null,"bde3803c",null)),x=j.exports,b=x,w={installed:!1,install(t,e){if(!w.installed){w.installed=!0;var s=e;t.library=s,t.prototype.$library=s}}},S=w,k=s("2c17");a["a"].use(k["a"]),a["a"].use(S,Object({NODE_ENV:"production",VUE_APP_AUTHOR:"Luca Iaconelli",VUE_APP_COLOR:"#333333",VUE_APP_DESCRIPTION:"Porting of css-doodle to VueJs - SSR Compatible",VUE_APP_FACEBOOK:"LuXDamore",VUE_APP_LIBRARY:"vue-css-doodle",VUE_APP_LOCALE:"en",VUE_APP_TITLE:"Vue CSS Doodle",VUE_APP_TWITTER:"@LuXDAmore",BASE_URL:"https://luxdamore.github.io/vue-css-doodle/"}));var C=!1;a["a"].config.silent=!C,a["a"].config.productionTip=C;var E=new a["a"]({render:t=>t(b)});E.$mount("#app")},"7ad1":function(t,e,s){},"91cb":function(t,e,s){"use strict";var a=s("15a9"),r=s.n(a);r.a},a37d:function(t,e,s){"use strict";var a=s("7ad1"),r=s.n(a);r.a},abe2:function(t,e,s){},ef1f:function(t,e,s){"use strict";var a=s("2d7d"),r=s.n(a);r.a},f568:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"doodle",staticClass:"vue-css-doodle",class:t.classes,style:t.style},[t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("css-doodle",t._g(t._b({attrs:{grid:t.grid,title:t.title,use:t.use,"click-to-update":t.clickToUpdateToString}},"css-doodle",t.$attrs,!1),t.$listeners),[t._t("default",null,{generate:t.generate})],2)}];function n(t,e,s,a,r,n,l){try{var o=t[n](l),i=o.value}catch(c){return void s(c)}o.done?e(i):Promise.resolve(i).then(a,r)}function l(t){return function(){var e=this,s=arguments;return new Promise((function(a,r){var l=t.apply(e,s);function o(t){n(l,a,r,o,i,"next",t)}function i(t){n(l,a,r,o,i,"throw",t)}o(void 0)}))}}var o=()=>s.e("css-doodle").then(s.t.bind(null,"1054",7)),i={name:"vue-css-doodle",inheritAttrs:!1,props:{grid:{type:[String,Number],default:null},title:{type:String,default:null},use:{type:String,default:null},height:{type:String,default:null},width:{type:String,default:null},clickToUpdate:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},overflowHidden:{type:Boolean,default:!1}},data:()=>({doodle:null}),computed:{classes(){return{"vue-css-doodle--overflow-hidden":this.overflowHidden,"vue-css-doodle--absolute":this.absolute}},style(){return{width:this.width,height:this.height}},clickToUpdateToString(){return this.clickToUpdate?"true":null}},mounted(){var t=this;return l((function*(){yield o(),t.$nextTick(t.init)}))()},methods:{updated(){this.$emit("input",this.doodle)},init(){this.doodle=this.$refs.doodle.firstElementChild,this.updated()},generate(){this.doodle.update(),this.updated()}}},c=i,d=(s("a37d"),s("2877")),p=Object(d["a"])(c,a,r,!1,null,"52326f86",null);e["a"]=p.exports}});