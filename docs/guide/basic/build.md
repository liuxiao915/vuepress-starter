# 编译构建

项目的打包编译构建，`build` 过程中有强制代码扫描，若校验不通过，则无法编译，不能构建成功。

用法：

```bash
Usage: build [options]

build one or more modules in production mode with zero config

Options:
  -e, --env <env-type>             Add the specified env-type for building the project (default: "dev")
  -h, --help                       output usage information
```

参数 | 说明 | 是否必须 | 可选值| 默认值
:-- | :-- | :-- | :-- | :--
module | 模块名称 | 是 | - | -
-e, --env [env-type]  | 接口环境类型 | 否 | dev, pre, prod | dev

```bash
Example：
// 构建 h5 项目所有模块
liux build

// 构建 dev 环境下 feature/first 模块
liux build feature/first
# or
liux build feature/first -e dev
```
