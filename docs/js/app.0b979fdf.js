(function(t){function e(e){for(var a,r,o=e[0],i=e[1],c=e[2],v=0,p=[];v<o.length;v++)r=o[v],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&p.push(l[r][0]),l[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var i=s[o];0!==l[i]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},l={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="https://luxdamore.github.io/vue-css-doodle/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=i;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"23f5":function(t,e,s){},"2c17":function(t,e,s){"use strict";(function(t){var a=s("f568"),l={VueCssDoodle:a["a"],installed:!1,install(t){l.installed||(l.installed=!0,t.config.ignoredElements=["css-doodle"],t.component(a["a"].name,a["a"]))}},n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(l),e["a"]=l}).call(this,s("c8ba"))},"2d7d":function(t,e,s){},"3f08":function(t,e,s){"use strict";var a=s("d88d"),l=s.n(a);l.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),l=(s("7b04"),s("e4cb"),s("abe2"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app"},[s("div",{staticClass:"grid-container"},[s("aside",{staticClass:"grid-cell left"},[2===t.activeDoodle?s("section",{staticClass:"doodle"},[t._m(0)],1):3===t.activeDoodle?s("section",{staticClass:"doodle"},[t._m(1)],1):s("section",{staticClass:"doodle"},[t._m(2)],1),s("footer",{staticClass:"controls controls--bottom"},[s("label",{attrs:{for:"changeDoodle"}},[t._v(" Try an other Doodle ")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.activeDoodle,expression:"activeDoodle"}],attrs:{id:"changeDoodle"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.activeDoodle=e.target.multiple?s:s[0]}}},t._l(t.doodles,(function(e){return s("option",{key:e.value,domProps:{value:e.value,textContent:t._s(e.text)}})})),0)])]),s("main",{staticClass:"grid-cell right"},[s("article",{staticClass:"readme"},[s("readme",{staticClass:"markdown-body"})],1)])])])}),n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vue-css-doodle",{attrs:{title:"Picasso","mx-auto":"",absolute:"",use:"var(--ruleTwo)","click-to-update":"","demo-two":""}})},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vue-css-doodle",{attrs:{title:"Rain","mx-auto":"","fit-width":"","fill-height":"",absolute:""}},[t._v(" :doodle { @grid: 1x3 / 100vmax; border-radius: 3px; background-color: #2C3E50; } @size: 150% 100%; background: @m(100, (linear-gradient( transparent, @p(#feca57@repeat(2, @p([0-9a-f])), #e74c3c@repeat(2, @p([0-9a-f]))) ) @r(0%, 100%) @r(0%, 100%) / @r(1px) @r(23vmin) no-repeat )); will-change: transform; animation: f 20s linear calc(-20s / @size() * @i()) infinite; @keyframes f { from { transform: translateY(-100%) } to { transform: translateY(100%) } } ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vue-css-doodle",{attrs:{title:"Inception","mx-auto":"",absolute:"",use:"var(--ruleOne)","click-to-update":"","demo-one":""}})}],r=s("a70e"),o=s.n(r),i=s("f0f8"),c=s.n(i),d=s("4dd1"),v=s.n(d),p=(s("2c43"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("h1",[t._v("🎉 Vue Css Doodle")]),a("p",[a("a",{attrs:{href:"https://luxdamore.github.io/vue-css-doodle"}},[t._v("DEMO")])]),a("blockquote",[a("p",[t._v("Porting of css-doodle to VueJs, a web component for drawing patterns with CSS")])]),a("p",[a("a",{attrs:{href:"https://npmjs.com/package/@luxdamore/vue-css-doodle"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/@luxdamore/vue-css-doodle/latest.svg?style=flat-square",alt:"npm version"}})]),a("br"),a("a",{attrs:{href:"https://npmjs.com/package/@luxdamore/vue-css-doodle"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dt/@luxdamore/vue-css-doodle.svg?style=flat-square",alt:"npm downloads"}})]),a("br"),a("a",{attrs:{href:"https://npmjs.com/package/@luxdamore/vue-css-doodle"}},[a("img",{attrs:{src:"https://img.shields.io/npm/l/@luxdamore/vue-css-doodle.svg?style=flat-square",alt:"License"}})])]),a("h2",[t._v("Installation")]),a("p",[t._v("This package is available on npm.")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# Deps")]),t._v("\n    npm install --save @luxdamore/vue-css-doodle\n\n")])]),a("h3",[t._v("Usage")]),a("h4",[t._v("As a component")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Component")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { VueCssDoodle } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@luxdamore/vue-css-doodle'")]),t._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@luxdamore/vue-css-doodle/dist/VueCssDoodle.css'")]),t._v(";\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Install")]),t._v("\n    Vue.component(\n        VueCssDoodle.name,\n        VueCssDoodle\n    );\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Or in a .vue file")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue-css-doodle'")]),t._v(": VueCssDoodle,\n        },\n    };\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Add this line to your main.js")]),t._v("\n    Vue.config.ignoredElements = [ "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'css-doodle'")]),t._v(" ];\n\n")])]),a("h4",[t._v("As a plugin")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Plugin")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" VueCssDoodle "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@luxdamore/vue-css-doodle'")]),t._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@luxdamore/vue-css-doodle/dist/VueCssDoodle.css'")]),t._v(";\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Install")]),t._v("\n    Vue.use(\n        VueCssDoodle\n    );\n\n")])]),a("h4",[t._v("Browser’s way")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v("<!doctype "),a("span",{pre:!0,attrs:{class:"hljs-meta-keyword"}},[t._v("html")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("html")]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("head")]),t._v(">")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- VueCssDoodle style --\x3e")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- Old way --\x3e")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rel")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"stylesheet"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"https://unpkg.com/@luxdamore/vue-css-doodle@latest/dist/VueCssDoodle.css"')]),t._v(" />")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- end old way --\x3e")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- New way --\x3e")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rel")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"preload"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"https://unpkg.com/@luxdamore/vue-css-doodle@latest/dist/VueCssDoodle.css"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("as")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"style"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("onload")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"this.rel='stylesheet'\"")]),t._v(" />")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rel")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"preload"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"https://unpkg.com/@luxdamore/vue-css-doodle@latest/dist/VueCssDoodle.umd.min.js"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("as")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"script"')]),t._v(" />")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- end new way --\x3e")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- end VueCssDoodle style --\x3e")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("head")]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("body")]),t._v(">")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!--\n                Others script (ex. VueJs) and html.\n            --\x3e")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- VueCssDoodle script --\x3e")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"https://unpkg.com/@luxdamore/vue-css-doodle@latest/dist/VueCssDoodle.umd.min.js"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- end VueCssDoodle script --\x3e")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("body")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("html")]),t._v(">")]),t._v("\n\n")])]),a("h4",[t._v("Markup")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vue-css-doodle")]),t._v(">")]),t._v("\n        :doodle {\n            @grid: 50x1 / 80%;\n        }\n\n        @place-cell: center;\n        @size: calc(100% / @size * @i);\n\n        transform: rotate(calc(@i * 5deg));\n\n        border-radius: 30%;\n        border: 1px solid hsla(\n            calc(10 + 4 * @i), 70%, 68%, @r.8\n        );\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vue-css-doodle")]),t._v(">")]),t._v("\n\n")])]),a("h4",[t._v("Integrations")]),a("h4",[t._v("NuxtJS")]),a("ul",[a("li",[t._v("Create a file in the "),a("code",{pre:!0},[t._v("plugins")]),t._v(" folder;")]),a("li",[t._v("Name it "),a("code",{pre:!0},[t._v("vue-css-doodle.client.js")]),t._v(";")]),a("li",[t._v("Install it "),a("em",[t._v("as a plugin")]),t._v(";")]),a("li",[t._v("Import it in the "),a("code",{pre:!0},[t._v("nuxt.config.js")]),t._v(" file as "),a("a",{attrs:{href:"https://nuxtjs.org/guide/plugins/#client-side-only"}},[a("em",[t._v("client side only")])]),t._v(".")])]),a("h3",[t._v("Options")]),a("h4",[t._v("Slots")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# Available")]),t._v("\n    slot="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"default"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v('# Add the content, it expose v-slot="{ generate }" method to refresh the doodle')]),t._v("\n\n")])]),a("h4",[t._v("Props")]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Attribute")]),a("th",[t._v("Type")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),a("th",[t._v("About")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("title")]),a("td",[t._v("String")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",[t._v("The title")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("grid")]),a("td",[t._v("String or Number")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",[t._v("Value of "),a("code",{pre:!0},[t._v("grid-attr")])])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("use")]),a("td",[t._v("String")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",[t._v("Value of "),a("code",{pre:!0},[t._v("use-attr")])])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("height")]),a("td",[t._v("String")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",[t._v("Height of the doodle")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("width")]),a("td",[t._v("String")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",[t._v("Width of the doodle")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("mx-auto")]),a("td",[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",[t._v("Add "),a("code",{pre:!0},[t._v("margin-left|right-auto")]),t._v(" to the doodle")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("fit-width")]),a("td",[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",[t._v("Force the doodle to fit in a "),a("code",{pre:!0},[t._v("max-width")])])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("fit-height")]),a("td",[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",[t._v("Force the doodle to fit in a "),a("code",{pre:!0},[t._v("max-height")])])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("fill-height")]),a("td",[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",[t._v("Expand the doodle to an "),a("code",{pre:!0},[t._v("height of 100%")])])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("click-to-update")]),a("td",[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",[t._v("Refresh on click")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("overflow-hidden")]),a("td",[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",[t._v("Add "),a("code",{pre:!0},[t._v("overflow-hidden")]),t._v(" to the container")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("absolute")]),a("td",[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),a("td",[t._v("Set position to "),a("code",{pre:!0},[t._v("absolute")])])])])]),a("p",[t._v("Check the "),a("a",{attrs:{href:"https://css-doodle.com/#usage"}},[t._v("DOCS for more information")]),t._v(".")]),a("hr"),a("h2",[t._v("🐞 Issues")]),a("p",[t._v("Please make sure to read the "),a("a",{attrs:{href:"/.github/ISSUE_TEMPLATE/bug_report.md"}},[t._v("Issue Reporting Checklist")]),t._v(" before opening an issue. Issues not conforming to the guidelines may be closed immediately.")]),a("h2",[t._v("👥 Contribution")]),a("p",[t._v("Please make sure to read the "),a("a",{attrs:{href:"/.github/ISSUE_TEMPLATE/feature_request.md"}},[t._v("Contributing Guide")]),t._v(" before making a pull request.")]),a("h2",[t._v("📖 Changelog")]),a("p",[t._v("Details changes for each release are documented in the "),a("a",{attrs:{href:"./CHANGELOG.md"}},[a("strong",[t._v("release notes")])]),t._v(".")]),a("h3",[t._v("📃 License")]),a("p",[a("a",{attrs:{href:"./LICENSE"}},[t._v("MIT License")]),t._v(" // Copyright (©) 2019-present "),a("a",{attrs:{href:"https://lucaiaconelli.it"}},[t._v("Luca Iaconelli")])]),a("hr"),a("h4",[t._v("💸 Are you feeling generous today? :)")]),a("p",[t._v("Do you want to share a beer? We can be good friends… "),a("strong",[a("a",{attrs:{href:"https://www.paypal.me/luxdamore"}},[t._v("Paypal")]),t._v(" // "),a("a",{attrs:{href:"https://www.patreon.com/luxdamore"}},[t._v("Patreon")])])]),a("blockquote",[a("p",[a("em",[t._v("It’s always a good day to be magnanimous - cit")])])]),a("h4",[t._v("💼 Hire me")]),a("p",[a("a",{attrs:{href:"https://otechie.com/luxdamore"}},[a("img",{attrs:{src:"https://api.otechie.com/consultancy/luxdamore/badge.svg",alt:"Otechie"}})])]),a("p",[a("a",{attrs:{href:"https://ko-fi.com/luxdamore"}},[a("img",{attrs:{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"}})])]),a("h4",[t._v("💘 Inspired by")]),a("p",[t._v("A web component for drawing patterns with CSS, "),a("a",{attrs:{href:"https://css-doodle.com"}},[t._v("css-doodle")])]),a("blockquote",[a("p",[t._v("Check the "),a("a",{attrs:{href:"https://codepen.io/collection/XyVkpQ"}},[t._v("full list of doodle on Codepen")])])]),a("hr"),a("h5",[t._v("💡 Lighthouse")]),a("p",[a("img",{attrs:{src:s("9007"),alt:"Lighthouse audit score"}})])])}],_=s("2877"),h={},m=Object(_["a"])(h,p,u,!1,null,null,null),g=m.exports;o.a.registerLanguage("bash",c.a),o.a.registerLanguage("javascript",v.a);var f={name:"v-app",components:{readme:g},data:()=>({activeDoodle:null,doodles:[{text:"Inception",value:null},{text:"Picasso",value:2},{text:"Rain",value:3}]}),mounted(){this.$nextTick(()=>{this.initHighlight(),this.initReadmeLinks()})},methods:{initHighlight(){var t=document.querySelectorAll("pre");t.forEach(t=>o.a.highlightBlock(t))},initReadmeLinks(){for(var t=document.querySelectorAll(".readme > article a"),e=0;e<t.length;e++)t[e].setAttribute("target","_blank"),t[e].setAttribute("rel","noopener"),t[e].setAttribute("title",t[e].textContent)}}},y=f,x=(s("3f08"),s("ef1f"),Object(_["a"])(y,l,n,!1,null,"34844f8c",null)),j=x.exports,b=j,S={installed:!1,install(t,e){if(!S.installed){S.installed=!0;var s=e;t.library=s,t.prototype.$library=s}}},w=S,k=s("2c17");a["a"].use(k["a"]),a["a"].use(w,Object({NODE_ENV:"production",VUE_APP_AUTHOR:"Luca Iaconelli",VUE_APP_COLOR:"#333333",VUE_APP_DESCRIPTION:"Porting of css-doodle to VueJs, a web component for drawing patterns with CSS - SSR Compatible",VUE_APP_FACEBOOK:"LuXDamore",VUE_APP_LIBRARY:"vue-css-doodle",VUE_APP_LOCALE:"en",VUE_APP_TITLE:"Vue CSS Doodle",VUE_APP_TWITTER:"@LuXDAmore",BASE_URL:"https://luxdamore.github.io/vue-css-doodle/"}));var C=!1;a["a"].config.silent=!C,a["a"].config.productionTip=C;var E=new a["a"]({render:t=>t(b)});E.$mount("#app")},6015:function(t,e,s){"use strict";var a=s("23f5"),l=s.n(a);l.a},9007:function(t,e,s){t.exports=s.p+"img/lighthouse-audit.a00b636f.jpg"},abe2:function(t,e,s){},d88d:function(t,e,s){},ef1f:function(t,e,s){"use strict";var a=s("2d7d"),l=s.n(a);l.a},f568:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"doodle",staticClass:"vue-css-doodle",class:t.classes,style:t.style},[t._m(0)],1)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("css-doodle",t._g(t._b({attrs:{grid:t.grid,title:t.title,use:t.use,"click-to-update":t.clickToUpdateToString}},"css-doodle",t.$attrs,!1),t.$listeners),[t._t("default",null,{generate:t.generate})],2)}];function n(t,e,s,a,l,n,r){try{var o=t[n](r),i=o.value}catch(c){return void s(c)}o.done?e(i):Promise.resolve(i).then(a,l)}function r(t){return function(){var e=this,s=arguments;return new Promise((function(a,l){var r=t.apply(e,s);function o(t){n(r,a,l,o,i,"next",t)}function i(t){n(r,a,l,o,i,"throw",t)}o(void 0)}))}}var o=()=>Promise.resolve().then(s.t.bind(null,"1054",7)),i={name:"vue-css-doodle",inheritAttrs:!1,props:{grid:{type:[String,Number],default:null},title:{type:String,default:null},use:{type:String,default:null},height:{type:String,default:null},width:{type:String,default:null},mxAuto:{type:Boolean,default:!1},fitWidth:{type:Boolean,default:!1},fitHeight:{type:Boolean,default:!1},fillHeight:{type:Boolean,default:!1},clickToUpdate:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},overflowHidden:{type:Boolean,default:!1}},data:()=>({doodle:null}),computed:{classes(){return{"vue-css-doodle--mx-auto":this.mxAuto,"vue-css-doodle--fit-width":this.fitWidth,"vue-css-doodle--fit-height":this.fitHeight,"vue-css-doodle--fill-height":this.fillHeight,"vue-css-doodle--absolute":this.absolute,"vue-css-doodle--overflow-hidden":this.overflowHidden}},style(){return{width:this.width,height:this.height}},clickToUpdateToString(){return this.clickToUpdate?"true":null}},mounted(){var t=this;return r((function*(){try{yield o(),t.$nextTick(t.init)}catch(e){0}}))()},methods:{init(){this.doodle=this.$refs.doodle.firstElementChild,this.generate()},generate(){this.doodle.update()}}},c=i,d=(s("6015"),s("2877")),v=Object(d["a"])(c,a,l,!1,null,"5c11e18e",null);e["a"]=v.exports}});