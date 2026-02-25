[[toc]]
<!-- 把当前页面的目录添加到 Markdown 内容中，你可以使用 [[toc]] 语法。 -->
# 查看本地 CLI 文档

可离线查看 CLI 文档。

## 查看本地 CLI 文档1

可离线查看 CLI 文档。

### 查看本地 CLI 文档2

可离线查看 CLI 文档。
<!-- 相对路径 -->

[首页](../../README.md)  
[更多](../../more/README.md)

<!-- 绝对路径 -->

[指南 > 介绍](/guide/installation.md)  

<!-- URL -->

[GitHub](https://github.com)

<!-- {1,7-9}用来高亮1,7-9这几行代码 -->
```ts{1,7-9} title=".vuepress/config.ts"
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: info
这是一个信息
:::

::: important
这是一个重要信息
:::

::: note
这是一个备注
:::

::: details
这是一个 details 标签
:::

```sh
liux doc
```
