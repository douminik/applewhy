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
                collapsable: false,
                children: [
                    {title: "选项卡TabBar出现了带颜色方块",path: "/guide/iPhone/aw10001"},
                    {title: "设置了applepay锁屏密码被更改",path: "/guide/iPhone/aw10002"},
                ]
            },
            {
                title: "iPad",
                path: "/guide/iPad/",
                collapsable: false,
                children: [
                    {title: "蓝牙键盘部分按键点了没反应",path: "/guide/iPad/aw30001"},
                ]
            },
            {
                title: "Mac",
                path: "/guide/Mac/",
                collapsable: false,
                children: [
                    {title: "安装软件提示已损坏无法打开",path: "/guide/Mac/aw60001"},
                    {title: "关了vpn之后网络没办法访问了",path: "/guide/Mac/aw60002"},
                ]
            }
        ]
      }
  }