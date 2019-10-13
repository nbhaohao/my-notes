const sidebarArray = [{ title: "Node.js", children: ["/articles/node.js/"] }];

module.exports = {
  title: "Zzh 的笔记本",
  description: "个人笔记",
  themeConfig: {
    nav: [
      { text: "笔记", link: sidebarArray[0].children[0] },
      { text: "我的 Github", link: "https://github.com/nbhaohao" }
    ],
    smoothScroll: true,
    sidebar: sidebarArray.map(item => ({
      ...item,
      collapsable: false,
      sidebarDepth: 1
    }))
  },
  plugins: ["@vuepress/active-header-links", "@vuepress/back-to-top"]
};
