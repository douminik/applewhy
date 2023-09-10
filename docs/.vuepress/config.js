module.exports = {
    base:'/',
    lang: 'zh-CN',
    title: 'Apple Why',
    description: 'Apple为什么是一个收集了在Apple设备（主要是iPhone iPad Mac）上在使用过程中会遇到的一些很奇怪的问题 并给出面向用户的解决方案 ',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    themeConfig: {
        logo: '/images/logo.png',
        nav:[
            { text: "首页", link: "/" },
            {
                text: "相关链接",
                items: [
                    {
                    text: "GitHub",
                    link: "https://github.com/douminik/applewhy",
                    },
                ],
            },
        ],
        displayAllHeaders: true,
        sidebar: [
            {
                title: "Apple Why",
                path: "/guide/general/",
            },
            {
                title: "iPhone",
                path: "/guide/iPhone/",
            },
            {
                title: "iPad",
                path: "/guide/iPad/",
            },
            {
                title: "Mac",
                path: "/guide/Mac/",
            }
        ]
      }
  }