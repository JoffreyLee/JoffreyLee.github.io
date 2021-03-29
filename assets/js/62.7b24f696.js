(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{437:function(e,a,t){"use strict";t.r(a);var l=t(46),r=Object(l.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[e._v("#")]),e._v(" Webpack")]),e._v(" "),t("h2",{attrs:{id:"手摸手教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手摸手教程"}},[e._v("#")]),e._v(" 手摸手教程")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/blog/webpack/webpack4-a.html"}},[e._v("手摸手，带你用合理的姿势使用 webpack4（上）")])],1),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/blog/webpack/webpack4-b.html"}},[e._v("手摸手，带你用合理的姿势使用 webpack4（下）")])],1),e._v(" "),t("h2",{attrs:{id:"url-loader-vs-file-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-loader-vs-file-loader"}},[e._v("#")]),e._v(" url-loader vs file-loader")]),e._v(" "),t("blockquote",[t("p",[e._v("2018-08-13")])]),e._v(" "),t("p",[e._v("很多人搞不清楚这两个 loader 是干嘛的？")]),e._v(" "),t("p",[e._v("其实 "),t("code",[e._v("url-loader")]),e._v(" 就是对 "),t("code",[e._v("file-loader")]),e._v(" 的一个拓展。照你设置的文件大小 limit, 将其内联为 base64 或者单独作为文件引入。")]),e._v(" "),t("blockquote",[t("p",[e._v("将图片文件转换为 base64 编码并载入浏览器能够减少 http 请求数，但是增大了 js 或 html 文件的体积，如果图片在项目中的重用度较高，那么每处引用都会生成 base64 编码，造成了代码的冗余。所以是否需要内联自己需要权衡一下。")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("file-loader： 可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存。此外，这意味着 你可以就近管理图片文件，可以使用相对路径而不用担心部署时 URL 的问题。使用正确的配置，webpack 将会在打包输出中自动重写文件路径为正确的 URL。")])]),e._v(" "),t("li",[t("p",[e._v("url-loader： 允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 file-loader 处理。")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);