export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/project/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/installation.html", { loader: () => import(/* webpackChunkName: "guide_installation.html" */"D:/project/vuepress-starter/docs/.vuepress/.temp/pages/guide/installation.html.js"), meta: {"title":"安装"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/project/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"介绍"} }],
  ["/more/", { loader: () => import(/* webpackChunkName: "more_index.html" */"D:/project/vuepress-starter/docs/.vuepress/.temp/pages/more/index.html.js"), meta: {"title":""} }],
  ["/guide/basic/build.html", { loader: () => import(/* webpackChunkName: "guide_basic_build.html" */"D:/project/vuepress-starter/docs/.vuepress/.temp/pages/guide/basic/build.html.js"), meta: {"title":"编译构建"} }],
  ["/guide/basic/create.html", { loader: () => import(/* webpackChunkName: "guide_basic_create.html" */"D:/project/vuepress-starter/docs/.vuepress/.temp/pages/guide/basic/create.html.js"), meta: {"title":"新建模块"} }],
  ["/guide/basic/deploy.html", { loader: () => import(/* webpackChunkName: "guide_basic_deploy.html" */"D:/project/vuepress-starter/docs/.vuepress/.temp/pages/guide/basic/deploy.html.js"), meta: {"title":"发布部署"} }],
  ["/guide/basic/doc.html", { loader: () => import(/* webpackChunkName: "guide_basic_doc.html" */"D:/project/vuepress-starter/docs/.vuepress/.temp/pages/guide/basic/doc.html.js"), meta: {"title":"查看本地 CLI 文档"} }],
  ["/guide/basic/init.html", { loader: () => import(/* webpackChunkName: "guide_basic_init.html" */"D:/project/vuepress-starter/docs/.vuepress/.temp/pages/guide/basic/init.html.js"), meta: {"title":"创建一个项目"} }],
  ["/guide/basic/start.html", { loader: () => import(/* webpackChunkName: "guide_basic_start.html" */"D:/project/vuepress-starter/docs/.vuepress/.temp/pages/guide/basic/start.html.js"), meta: {"title":"启动开发调试"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/project/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
