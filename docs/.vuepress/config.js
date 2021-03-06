const utils = require("./utils");

module.exports = {
  theme: "yuu",
  title: "NewBee Doc",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/egg.png",
      },
    ],
  ],
  plugins: [
    [
      "one-click-copy",
      {
        // 代码块复制按钮
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ],
        copyMessage: "复制成功",
        duration: 1000,
        showInMobile: false,
      },
    ],
  ],
  themeConfig: {
    logo: "/egg.png", // 导航栏logo
    lastUpdated: "lastUpdate", // string | boolean
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "API",
        link: "/api/",
      },
      {
        text: "Store",
        items: [
          { text: "推荐库", link: "/repository/" },
          { text: "网站", link: "/website/" },
        ],
      },
      {
        text: "Read",
        link: "/diary/read",
      },
      {
        text: "Article",
        link: "/article/",
      },
      {
        text: "InterView",
        link: "/interview/",
      },
      {
        text: "Blogs",
        link: "/blog/",
      },
    ],
    sidebar: utils.inferSiderbars(),
  },
};
