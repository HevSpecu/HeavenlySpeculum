---
sidebar_position: 1
---

# 创建页面

在这个教程中，您将学习如何创建一个新页面。

## 添加新页面

Docusaurus 会自动为 `src/pages` 目录下的每个文件创建一个页面。

创建一个新文件 `src/pages/my-react-page.js`：

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-fd-foreground mb-4">
          我的 React 页面
        </h1>
        <p className="text-fd-muted-foreground">
          这是一个使用 React 和 Tailwind CSS 创建的页面。
        </p>
      </div>
    </Layout>
  );
}
```

新页面现在可以通过 [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page) 访问。

## 使用 Tailwind CSS

由于我们已经集成了 Tailwind CSS 和 Fumadocs 设计系统，您可以直接使用这些工具类：

### 颜色类

```jsx
<div className="bg-fd-card text-fd-card-foreground p-4 rounded-lg">
  这是一个卡片
</div>
```

### 响应式设计

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-fd-muted p-4 rounded-md">项目 1</div>
  <div className="bg-fd-muted p-4 rounded-md">项目 2</div>
  <div className="bg-fd-muted p-4 rounded-md">项目 3</div>
</div>
```

### 悬停效果

```jsx
<button className="bg-fd-primary text-fd-primary-foreground px-4 py-2 rounded-md hover:bg-fd-accent transition-colors">
  点击我
</button>
```

## 创建可重用组件

您可以在 `src/components` 目录中创建可重用的 React 组件：

```jsx title="src/components/Card.js"
import React from 'react';

export default function Card({ title, children }) {
  return (
    <div className="bg-fd-card border border-fd-border rounded-lg p-6 shadow-sm">
      <h3 className="text-fd-foreground font-semibold text-lg mb-2">
        {title}
      </h3>
      <div className="text-fd-muted-foreground">
        {children}
      </div>
    </div>
  );
}
```

然后在您的页面中使用它：

```jsx
import Card from '@site/src/components/Card';

<Card title="我的卡片">
  这是卡片内容
</Card>
```

:::tip 专业提示

使用 `@site/` 别名来导入本地模块，这样您就不需要担心相对路径了。

:::
