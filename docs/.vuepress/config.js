const sidebarArray = [
  { title: "Node.js", children: ["/articles/node.js/"] },
  {
    title: "Ruby",
    children: ["/articles/ruby/"]
  },
  {
    title: "C",
    children: ["/articles/c/", "/articles/c/01.md", "/articles/c/02.md"]
  },
  {
    title: "计算机基础",
    children: ["/articles/cs/"]
  }
];

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
