# demo

一个使用 qiankun 支持的微前端应用 demo

- 主应用 vue2
- 子应用 angularjs + vue2

## 启动整个项目

- monorepo，使用 pnpm workspace 管理
- 使用 pnpm 安装依赖
- 执行 pnpm start 启动整个项目

### 端口

| 主应用 | 子应用 | 端口       |
| ------ | --------- | ------------ |
| vue2   |           | 8080（默认） |
|        | angularjs | 7101         |
|        | vue2      | 7102         |