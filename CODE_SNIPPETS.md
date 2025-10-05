# 代码片段参考

本文档提供常用的代码片段，可直接复制使用。

---

## 🎨 Tailwind CSS 样式片段

### 按钮样式

#### 主要按钮
```jsx
<button className="bg-fd-primary text-fd-primary-foreground px-4 py-2 rounded-md hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors font-medium">
  主要按钮
</button>
```

#### 次要按钮
```jsx
<button className="bg-fd-secondary text-fd-secondary-foreground px-4 py-2 rounded-md hover:bg-fd-accent transition-colors">
  次要按钮
</button>
```

#### 边框按钮
```jsx
<button className="border-2 border-fd-border text-fd-foreground px-4 py-2 rounded-md hover:bg-fd-muted transition-colors">
  边框按钮
</button>
```

### 卡片样式

#### 基础卡片
```jsx
<div className="bg-fd-card border border-fd-border rounded-lg p-6 shadow-sm">
  <h3 className="text-fd-foreground font-semibold text-lg mb-2">卡片标题</h3>
  <p className="text-fd-muted-foreground">卡片内容描述</p>
</div>
```

#### 悬停效果卡片
```jsx
<div className="bg-fd-card border border-fd-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
  <h3 className="text-fd-foreground font-semibold text-lg mb-2">可点击卡片</h3>
  <p className="text-fd-muted-foreground">鼠标悬停时会有阴影效果</p>
</div>
```

#### 带图标卡片
```jsx
<div className="bg-fd-card border border-fd-border rounded-lg p-6">
  <div className="text-4xl mb-4">🚀</div>
  <h3 className="text-fd-foreground font-semibold text-lg mb-2">特性标题</h3>
  <p className="text-fd-muted-foreground">特性描述文字</p>
</div>
```

### 响应式网格布局

#### 两列网格
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="bg-fd-card border border-fd-border rounded-lg p-6">项目 1</div>
  <div className="bg-fd-card border border-fd-border rounded-lg p-6">项目 2</div>
</div>
```

#### 三列网格
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-fd-card border border-fd-border rounded-lg p-6">项目 1</div>
  <div className="bg-fd-card border border-fd-border rounded-lg p-6">项目 2</div>
  <div className="bg-fd-card border border-fd-border rounded-lg p-6">项目 3</div>
</div>
```

### 提示框样式

#### 信息框
```jsx
<div className="bg-fd-card border-l-4 border-l-fd-info rounded-md p-4 my-4">
  <div className="flex items-center mb-2">
    <span className="text-fd-info font-semibold">💡 信息</span>
  </div>
  <p className="text-fd-muted-foreground">这是一条信息提示</p>
</div>
```

#### 警告框
```jsx
<div className="bg-fd-card border-l-4 border-l-fd-warning rounded-md p-4 my-4">
  <div className="flex items-center mb-2">
    <span className="text-fd-warning font-semibold">⚠️ 警告</span>
  </div>
  <p className="text-fd-muted-foreground">这是一条警告信息</p>
</div>
```

#### 成功框
```jsx
<div className="bg-fd-card border-l-4 border-l-fd-success rounded-md p-4 my-4">
  <div className="flex items-center mb-2">
    <span className="text-fd-success font-semibold">✅ 成功</span>
  </div>
  <p className="text-fd-muted-foreground">操作成功完成</p>
</div>
```

---

## 📝 Markdown 片段

### 文档前置元数据

#### 基础文档
```md
---
sidebar_position: 1
title: 文档标题
description: 文档描述
---

# 文档标题

内容...
```

#### 高级配置
```md
---
sidebar_position: 1
sidebar_label: 侧边栏标签
title: 页面标题
description: 页面描述
keywords: [关键词1, 关键词2]
---

# 页面标题

内容...
```

### 博客前置元数据

```md
---
slug: my-blog-post
title: 博客标题
authors: [admin]
tags: [docusaurus, tutorial]
---

这是博客摘要...

<!--truncate-->

这是完整内容...
```

### Docusaurus 提示框

```md
:::note 注意
这是一个注意提示框
:::

:::tip 提示
这是一个提示框
:::

:::info 信息
这是一个信息框
:::

:::warning 警告
这是一个警告框
:::

:::danger 危险
这是一个危险提示框
:::
```

### 代码块

#### 带标题的代码块
````md
```javascript title="src/components/HelloWorld.js"
export default function HelloWorld() {
  return <h1>Hello, World!</h1>;
}
```
````

#### 带行号高亮的代码块
````md
```javascript {1,3-5}
function example() {
  const a = 1;
  const b = 2;
  const c = 3;
  return a + b + c;
}
```
````

---

## ⚛️ React 组件片段

### 可重用卡片组件

```jsx
// src/components/Card.js
import React from 'react';

export default function Card({ title, children, icon }) {
  return (
    <div className="bg-fd-card border border-fd-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      {icon && <div className="text-4xl mb-4">{icon}</div>}
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

使用：
```jsx
import Card from '@site/src/components/Card';

<Card title="我的卡片" icon="🚀">
  这是卡片内容
</Card>
```

### 按钮组件

```jsx
// src/components/Button.js
import React from 'react';
import clsx from 'clsx';

export default function Button({ 
  children, 
  variant = 'primary',
  onClick,
  className 
}) {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
  
  const variants = {
    primary: 'bg-fd-primary text-fd-primary-foreground hover:bg-fd-accent',
    secondary: 'bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent',
    outline: 'border-2 border-fd-border text-fd-foreground hover:bg-fd-muted',
  };
  
  return (
    <button 
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}
```

使用：
```jsx
import Button from '@site/src/components/Button';

<Button variant="primary" onClick={() => alert('Clicked!')}>
  点击我
</Button>
```

### 特性网格组件

```jsx
// src/components/FeatureGrid.js
import React from 'react';

export default function FeatureGrid({ features }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, idx) => (
        <div 
          key={idx}
          className="bg-fd-card border border-fd-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-fd-foreground font-semibold text-lg mb-2">
            {feature.title}
          </h3>
          <p className="text-fd-muted-foreground">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
```

使用：
```jsx
import FeatureGrid from '@site/src/components/FeatureGrid';

<FeatureGrid features={[
  {
    icon: '⚡',
    title: '快速',
    description: '性能优化的文档站点'
  },
  {
    icon: '🎨',
    title: '美观',
    description: '现代化的设计系统'
  },
  {
    icon: '🌙',
    title: '深色模式',
    description: '完美的深色主题支持'
  }
]} />
```

---

## 📄 自定义页面片段

### 基础页面

```jsx
// src/pages/about.js
import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="关于" description="关于页面">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-fd-foreground mb-4">
          关于我们
        </h1>
        <p className="text-fd-muted-foreground leading-7">
          这是关于页面的内容...
        </p>
      </div>
    </Layout>
  );
}
```

### 带 Hero 区域的页面

```jsx
// src/pages/product.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Product() {
  return (
    <Layout title="产品" description="产品页面">
      {/* Hero 区域 */}
      <header className="bg-fd-background py-24 text-center border-b border-fd-border">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-fd-foreground mb-4">
            我们的产品
          </h1>
          <p className="text-xl text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
            这是产品的简短描述
          </p>
          <Link
            className="bg-fd-primary text-fd-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-accent transition-colors no-underline"
            to="/docs/intro">
            开始使用 →
          </Link>
        </div>
      </header>
      
      {/* 内容区域 */}
      <section className="py-20 bg-fd-muted">
        <div className="container mx-auto px-4">
          {/* 内容... */}
        </div>
      </section>
    </Layout>
  );
}
```

---

## 🎯 MDX 片段

### 在 MDX 中使用 React 组件

```mdx
---
title: 我的 MDX 文档
---

import Card from '@site/src/components/Card';
import Button from '@site/src/components/Button';

# 我的文档

这是普通的 Markdown 内容。

<Card title="特别提示" icon="💡">
  这是在 MDX 中使用的 React 组件！
</Card>

<Button variant="primary">
  点击按钮
</Button>

继续 Markdown 内容...
```

### 在 MDX 中使用变量

```mdx
export const name = '张三';
export const version = '1.0.0';

# 欢迎，{name}!

当前版本：**{version}**
```

### 在 MDX 中使用条件渲染

```mdx
export const isDevelopment = true;

{isDevelopment ? (
  <div className="bg-fd-warning p-4 rounded-md">
    ⚠️ 开发环境
  </div>
) : (
  <div className="bg-fd-success p-4 rounded-md">
    ✅ 生产环境
  </div>
)}
```

---

## 🔧 配置片段

### 添加自定义 Tailwind 颜色

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        fd: {
          // 现有颜色...
          // 添加自定义颜色
          'custom-blue': 'hsl(220, 90%, 50%)',
          'custom-green': 'hsl(140, 80%, 50%)',
        },
      },
    },
  },
};
```

使用：
```jsx
<div className="bg-fd-custom-blue text-white">自定义蓝色</div>
```

### 添加自定义 CSS 变量

```css
/* src/css/custom.css */
:root {
  /* 现有变量... */
  
  /* 添加自定义变量 */
  --color-fd-custom: hsl(280, 70%, 60%);
  --spacing-custom: 2.5rem;
}

[data-theme='dark'] {
  /* 暗色模式下的自定义变量 */
  --color-fd-custom: hsl(280, 60%, 70%);
}
```

使用：
```css
.my-element {
  color: var(--color-fd-custom);
  padding: var(--spacing-custom);
}
```

### 添加自定义字体

```css
/* src/css/custom.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

---

## 🎨 高级样式片段

### 渐变背景

```jsx
<div className="bg-gradient-to-r from-fd-primary to-fd-accent text-white p-8 rounded-lg">
  渐变背景内容
</div>
```

### 带动画的卡片

```jsx
<div className="bg-fd-card border border-fd-border rounded-lg p-6 transform hover:scale-105 transition-transform duration-200 cursor-pointer">
  悬停时会放大的卡片
</div>
```

### 响应式容器

```jsx
<div className="container mx-auto px-4 py-8 max-w-7xl">
  <div className="space-y-8">
    {/* 内容 */}
  </div>
</div>
```

### 固定宽度的内容容器

```jsx
<div className="max-w-3xl mx-auto px-4 py-8">
  <article className="prose prose-lg">
    {/* 文章内容 */}
  </article>
</div>
```

---

## 📊 数据展示片段

### 统计卡片

```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="bg-fd-card border border-fd-border rounded-lg p-6 text-center">
    <div className="text-4xl font-bold text-fd-primary mb-2">1000+</div>
    <div className="text-fd-muted-foreground">用户</div>
  </div>
  <div className="bg-fd-card border border-fd-border rounded-lg p-6 text-center">
    <div className="text-4xl font-bold text-fd-primary mb-2">50+</div>
    <div className="text-fd-muted-foreground">项目</div>
  </div>
  <div className="bg-fd-card border border-fd-border rounded-lg p-6 text-center">
    <div className="text-4xl font-bold text-fd-primary mb-2">99%</div>
    <div className="text-fd-muted-foreground">满意度</div>
  </div>
</div>
```

### 时间线

```jsx
<div className="space-y-8">
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-2 bg-fd-primary rounded-full"></div>
    <div className="flex-1">
      <div className="bg-fd-card border border-fd-border rounded-lg p-4">
        <div className="font-semibold text-fd-foreground mb-1">2024年1月</div>
        <div className="text-fd-muted-foreground">项目启动</div>
      </div>
    </div>
  </div>
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-2 bg-fd-primary rounded-full"></div>
    <div className="flex-1">
      <div className="bg-fd-card border border-fd-border rounded-lg p-4">
        <div className="font-semibold text-fd-foreground mb-1">2024年3月</div>
        <div className="text-fd-muted-foreground">首次发布</div>
      </div>
    </div>
  </div>
</div>
```

---

## 💡 使用提示

1. **复制代码时**：确保保持完整的类名，不要截断
2. **自定义颜色**：修改 `src/css/custom.css` 中的 CSS 变量
3. **响应式设计**：使用 `md:`、`lg:` 等前缀
4. **深色模式**：所有 `fd-*` 颜色自动支持深色模式
5. **组件导入**：使用 `@site/` 别名引用本地文件

---

## 🎉 快速测试

想测试某个样式？在任何 `.mdx` 文件中粘贴代码：

```mdx
---
title: 测试页面
---

# 样式测试

<div className="bg-fd-card border border-fd-border rounded-lg p-6">
  测试内容
</div>
```

保存后立即可以在浏览器中看到效果！

---

**代码片段参考完成** 🎨

需要更多示例？查看 `docs/intro.md` 和 `src/pages/index.js` 中的实际使用案例。
