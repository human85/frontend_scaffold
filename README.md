# 说明文档

## 环境配置

- 安装editconfig vscode扩展
- 安装eslint vscode扩展, enable eslint as formatter
- 开启vscode配置 format on save

## 命名约定

- 组件命名用大写的驼峰形式: for example: AddressUploader.tsx
- 其余文件包括文件夹一律小写，遇到多单词用_分割: for example: list_detail.tsx
- 模块import 支持@别名, @/components/... , 不要使用相对路径
- 所有的interface 定义以 I 开头, 多个单词使用驼峰形式, for example: IUser

## 第三方包

- localstorage操作使用 <https://www.npmjs.com/package/store>
  - 不用再自己手动操作 JSON.stringfy() JSON.parse()
