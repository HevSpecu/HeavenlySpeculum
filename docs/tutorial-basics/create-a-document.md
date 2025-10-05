---
sidebar_position: 2
---

# 创建文档

文档是 **页面组**，通过以下方式连接：

- **侧边栏**
- **上一页/下一页导航**
- **版本控制**

## 创建您的第一个文档

在 `docs` 目录下创建一个 Markdown 文件：

```bash
docs/hello.md
```

```md title="docs/hello.md"
# Hello

这是我的 **第一个 Docusaurus 文档**！
```

新文档现在可以通过 [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello) 访问。

## 配置侧边栏

Docusaurus 会自动从 `docs` 目录创建一个 **侧边栏**。

您也可以在 `sidebars.js` 中手动定义侧边栏：

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '教程',
      items: ['hello'],
    },
  ],
};
```

## Markdown 功能

Docusaurus 支持 **[Markdown](https://daringfireball.net/projects/markdown/syntax)** 和一些 **额外功能**。

### 前置元数据

Markdown 文档在顶部有元数据，称为 [前置元数据](https://jekyllrb.com/docs/front-matter/)：

```md
---
id: my-doc-id
title: 我的文档标题
description: 我的文档描述
sidebar_label: 侧边栏标签
sidebar_position: 3
---
```

### 链接

常规 Markdown 链接受支持，使用 URL 路径或相对文件路径：

```md
[链接到另一个文档](./hello.md)
```

### 图片

常规 Markdown 图片受支持：

```md
![Docusaurus logo](/img/docusaurus.png)
```

### 代码块

支持 Markdown 代码块，带有语法高亮：

````md
```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
    return (
        <h1>Hello, Docusaurus!</h1>
    )
}
```
````

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return (
    <h1>Hello, Docusaurus!</h1>
  )
}
```

### 提示框

Docusaurus 有一种特殊的语法来创建提示框和标注：

```md
:::tip 我的提示

使用此功能创建漂亮的内容框

:::
```

:::tip 我的提示

使用此功能创建漂亮的内容框

:::

### MDX 和 React 组件

[MDX](https://mdxjs.com/) 可以使您的文档更加 **交互式**，并在 Markdown 中使用任何 **React 组件**：

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus 绿色</Highlight> 和 <Highlight color="#1877F2">Facebook 蓝色</Highlight> 是我最喜欢的颜色。

我可以将我的 _JSX_ 和 **Markdown** 写在一起！
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus 绿色</Highlight> 和 <Highlight color="#1877F2">Facebook 蓝色</Highlight> 是我最喜欢的颜色。

我可以将我的 _JSX_ 和 **Markdown** 写在一起！
