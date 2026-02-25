# 创建一个项目

用法：

```bash
Usage: init <name> [options]

generate a project from template quickly

Options:
  -t, --type [type-name]  Add the specified type of template (default: ["h5"])
  -h, --help              output usage information
```

参数 | 说明 | 是否必须 | 可选值| 默认值
:-- | :-- | :-- | :-- | :--
name | 项目名称 | 是 | - | -
-t, --type [type-name] | 模版类型 | 否 | h5,admin | h5

模版类型 | 说明 |
:-- | :-- |
h5 | H5模板
admin | 运营后台（待支持）

当然你可以使用`--type`属性，指定需要创建的项目类型。

```bash
Example：

// 默认创建 h5 项目
liux init first

// 指定生成 h5 的项目
liux init -t h5 first

// 指定生成 admin 的项目
liux init -t admin first
```

你会被提示是否立即安装新项目的依赖包，你可以立即安装，也可以后续自己再手动安装。

安装依赖包完成后，可以根据提示快速运行该模版。
