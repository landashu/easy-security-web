// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: '首页', link: '/' },
  {
    text: '指南',
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {text: '快速使用', link: '/guide/11/',},
      {text: '架构介绍', link: '/architecture/20/',},
    ],
  },
  {
    text: '版本说明',
    link: '/version/',
  },
];
