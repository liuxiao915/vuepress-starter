# 新建模块

用法：

```bash
Usage: create <module> [options]

create a new module template powered by liux cli

Options:
  -t, --type [feature-type-name]  Add the specified feature-type-name for creating the type of project page (default: "feature")
  -h, --help                      output usage information
```

参数 | 说明 | 是否必须 | 可选值| 默认值
:-- | :-- | :-- | :-- | :--
module | 模块名称 | 是 | - | -
-t, --type [feature-type-name] | 模块类型 | 否 | activity，feature | feature

```bash
Example：

// 创建 h5 项目下 feature 特性 template 模块
liux create template
# or
liux create -t feature template
```
