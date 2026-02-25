# 发布部署

发布构建后的文件到指定环境的服务器，目前仅支持发布到开发环境。

```bash

Usage: deploy [options]

deploy one or more modules in production mode to the target server

Options:
  -e, --env [env-type]  Add the specified env-type which you want to deploying [dev] (default: "dev")
  -h, --help            output usage information

```

参数 | 说明 | 是否必须 | 可选值| 默认值
:-- | :-- | :-- | :-- | :--
module | 模块名称 | 是 | - | -
-e, --env [env-type] | 接口环境类型 | 否 | dev | dev
