import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'liux CLI',
  description: '前端统一开发工具平台',
  // GitHub Pages 项目地址： https://liuxiao915.github.io/vuepress-starter/
  // 因此 base 必须设置为仓库名对应的路径
  base: '/vuepress-starter/',

  // 指定打包器（必须配置其一：vite 或 webpack）
  bundler: viteBundler(),

  // 主题 & 导航 / 侧边栏
  theme: defaultTheme({
    // 顶部导航栏（Header）
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '了解更多', link: '/more/' },
    ],

    sidebarDepth: 4,
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          collapsible: false,
          children: [
            '/guide/README.md',
            '/guide/installation.md',
            {
              text: '基础',
              collapsible: false,
              children: [
                '/guide/basic/init.md',
                '/guide/basic/create.md',
                '/guide/basic/start.md',
                '/guide/basic/build.md',
                '/guide/basic/deploy.md',
                '/guide/basic/doc.md',
              ],
            },
          ],
        },
      ],
      '/more/': [
        {
          text: '更多内容',
          collapsible: false,
          children: ['/more/README.md'],
        },
      ],
      // 默认侧边栏（首页等）
      '/': [
        {
          text: '开始',
          collapsible: false,
          children: ['/README.md'],
        },
      ],
    },
  }),
});
