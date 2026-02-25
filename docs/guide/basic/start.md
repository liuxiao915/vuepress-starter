# 启动开发调试

启动某个模块的服务进行开发调试。

用法：
```bash
Usage: start <module> [options]

serve a module in development mode

Options:
  -e, --env [env-type]             Add the specified env-type for starting the project (default: "dev")
  -h, --help                       output usage information
```

参数 | 说明 | 是否必须 | 可选值| 默认值
:-- | :-- | :-- | :-- | :--
module | 模块名称 | 是 | - | -
-e, --env [env-type] | 接口环境类型 | 否 | dev, pre, prod | dev

`env-type`可选值说明：

可选值 | 说明
:-- | :--
dev | 测试环境 dev
pre| 预发布环境
prod| 正式环境

```bash
Example：

// 启动 dev 环境下的 feature/first 模块
liux start feature/first
# or
liux start feature/first -e dev
```
