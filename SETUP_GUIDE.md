# Docusaurus + Fumadocs 风格配置指南

## 📋 项目概述

本项目已成功创建，包含以下核心配置：

### ✅ 已完成的配置

1. **Tailwind CSS 集成** - 完整的 Tailwind CSS v3 配置
2. **Fumadocs 设计系统** - 所有 CSS 变量和样式
3. **深色模式支持** - 通过 `[data-theme="dark"]` 实现
4. **响应式布局** - 移动端和桌面端优化
5. **示例文档** - 完整的文档和博客示例

---

## 🚀 快速启动

### 第 1 步：安装依赖

在项目根目录运行：

```bash
npm install
```

或使用其他包管理器：

```bash
# 使用 Yarn
yarn install

# 使用 pnpm
pnpm install
```

### 第 2 步：启动开发服务器

```bash
npm start
```

网站将在 `http://localhost:3000` 自动打开。

### 第 3 步：测试功能

1. 尝试切换深色/亮色模式（右上角）
2. 浏览不同的文档页面
3. 查看代码高亮效果
4. 测试响应式布局（调整浏览器窗口大小）

---

## 📁 关键文件说明

### 1. `tailwind.config.js`

Tailwind CSS 的配置文件，包含：
- 内容路径配置（扫描哪些文件）
- 深色模式配置
- Fumadocs 颜色主题扩展
- 自定义动画

```javascript
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  // ... 更多配置
};
```

### 2. `postcss.config.js`

PostCSS 配置，集成 Tailwind CSS：

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 3. `src/css/custom.css`

**最重要的文件！** 包含：

#### a) Tailwind CSS 指令
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### b) CSS 变量（亮色模式）
```css
:root {
  --color-fd-background: hsl(0, 0%, 96%);
  --color-fd-foreground: hsl(0, 0%, 3.9%);
  --color-fd-primary: hsl(0, 0%, 9%);
  /* ... 更多变量 */
}
```

#### c) CSS 变量（暗色模式）
```css
[data-theme='dark'] {
  --color-fd-background: hsl(0, 0%, 7.04%);
  --color-fd-foreground: hsl(0, 0%, 92%);
  /* ... 更多变量 */
}
```

#### d) 组件样式覆盖
- 导航栏 (`.navbar`)
- 侧边栏 (`.sidebar`, `.menu`)
- 文档内容 (`.markdown`)
- 代码块 (`.prism-code`)
- 提示框 (`.admonition`)
- 页脚 (`.footer`)

### 4. `docusaurus.config.js`

Docusaurus 主配置文件，包含：

#### 关键配置：PostCSS 插件

```javascript
plugins: [
  async function myPlugin(context, options) {
    return {
      name: 'docusaurus-tailwindcss',
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.push(require('tailwindcss'));
        postcssOptions.plugins.push(require('autoprefixer'));
        return postcssOptions;
      },
    };
  },
],
```

这段代码将 Tailwind CSS 集成到 Docusaurus 的构建流程中。

---

## 🎨 自定义指南

### 修改颜色主题

编辑 `src/css/custom.css` 中的 CSS 变量：

```css
:root {
  /* 修改背景色 */
  --color-fd-background: hsl(0, 0%, 98%);
  
  /* 修改主色调 */
  --color-fd-primary: hsl(220, 90%, 50%);
  
  /* 修改圆角大小 */
  --radius: 0.75rem;
}
```

### 添加自定义组件

创建 `src/components/YourComponent.js`：

```jsx
import React from 'react';

export default function YourComponent() {
  return (
    <div className="bg-fd-card border border-fd-border rounded-lg p-6">
      <h3 className="text-fd-foreground font-semibold">标题</h3>
      <p className="text-fd-muted-foreground">内容</p>
    </div>
  );
}
```

### 覆盖 Docusaurus 组件

如果需要完全控制某个组件的结构，使用 Swizzling：

```bash
# 列出可以 swizzle 的组件
npm run swizzle @docusaurus/theme-classic -- --list

# Swizzle 特定组件（例如导航栏）
npm run swizzle @docusaurus/theme-classic Navbar -- --wrap
```

---

## 🎯 使用 Fumadocs 设计系统

### 可用的 Tailwind 类

#### 颜色类
```jsx
// 背景色
<div className="bg-fd-background" />
<div className="bg-fd-card" />
<div className="bg-fd-muted" />

// 文字颜色
<p className="text-fd-foreground" />
<p className="text-fd-muted-foreground" />
<p className="text-fd-primary" />

// 边框色
<div className="border border-fd-border" />
```

#### 按钮样式
```jsx
<button className="bg-fd-primary text-fd-primary-foreground px-4 py-2 rounded-md hover:bg-fd-accent transition-colors">
  点击我
</button>
```

#### 卡片样式
```jsx
<div className="bg-fd-card border border-fd-border rounded-lg p-6 shadow-sm">
  <h3 className="text-fd-foreground font-semibold">卡片标题</h3>
  <p className="text-fd-muted-foreground">卡片内容</p>
</div>
```

### 在 Markdown 中使用

在 `.mdx` 文件中，您可以直接使用 HTML 和 Tailwind 类：

```mdx
---
title: 我的文档
---

# 标题

<div className="bg-fd-card border border-fd-border rounded-lg p-6 my-4">
  <h3 className="text-fd-foreground font-semibold mb-2">提示</h3>
  <p className="text-fd-muted-foreground">
    这是一个自定义的提示框
  </p>
</div>

普通的 Markdown 内容继续...
```

---

## 🔧 高级自定义

### 1. 修改侧边栏样式

在 `src/css/custom.css` 中找到侧边栏部分：

```css
.sidebar {
  @apply bg-fd-background border-r border-fd-border;
  width: var(--fd-sidebar-width); /* 修改宽度 */
}

.menu__link {
  /* 修改菜单项样式 */
}
```

### 2. 自定义代码块样式

修改 Prism 语法高亮：

```css
.prism-code {
  @apply bg-fd-card text-fd-foreground p-4;
  /* 添加自定义样式 */
}

/* 修改特定语法元素的颜色 */
.token.keyword {
  color: #your-color;
}
```

### 3. 添加新的提示框类型

```css
.admonition-custom {
  @apply border-l-[#your-color];
}

.admonition-custom .admonition-heading {
  @apply text-[#your-color];
}
```

然后在 Markdown 中使用：

```md
:::custom 自定义标题
这是自定义提示框的内容
:::
```

---

## 📊 样式优先级说明

样式应用顺序（从高到低）：

1. **内联样式** - `style={{ ... }}`
2. **Tailwind 类** - `className="bg-fd-card"`
3. **自定义 CSS** - `src/css/custom.css`
4. **Docusaurus 默认样式**

如果发现某些样式未生效，检查是否被更高优先级的样式覆盖。

---

## 🐛 常见问题

### 1. Tailwind 类不生效

**原因**：文件路径未包含在 `tailwind.config.js` 的 `content` 中。

**解决**：确保您的文件路径在配置中：

```javascript
content: [
  './src/**/*.{js,jsx,ts,tsx}',
  './docs/**/*.{md,mdx}',
  './your-new-folder/**/*.{js,jsx}', // 添加新路径
],
```

### 2. 深色模式不工作

**检查**：
- 确保 `darkMode: ['class', '[data-theme="dark"]']` 在 `tailwind.config.js` 中
- 确保 CSS 变量在 `[data-theme='dark']` 下正确定义

### 3. 样式在生产构建中丢失

**原因**：Tailwind CSS 的 PurgeCSS 移除了"未使用"的样式。

**解决**：使用 `safelist` 选项：

```javascript
// tailwind.config.js
module.exports = {
  safelist: [
    'bg-fd-card',
    'text-fd-foreground',
    // 添加需要保留的类
  ],
  // ...
};
```

### 4. 代码块样式不对

**检查**：
- 确保 `prism-react-renderer` 已安装
- 检查 `docusaurus.config.js` 中的 `prism` 配置
- 验证 `src/css/custom.css` 中的 Prism 样式

---

## 🎓 进阶学习

### Swizzling 组件示例

#### 完全自定义导航栏

```bash
npm run swizzle @docusaurus/theme-classic Navbar -- --eject
```

这将创建 `src/theme/Navbar/index.js`，您可以完全重写。

#### 包装组件（推荐）

```bash
npm run swizzle @docusaurus/theme-classic Navbar -- --wrap
```

这将创建一个包装器，允许您添加额外功能而不破坏原有功能。

### 创建自定义布局

创建 `src/theme/Layout/index.js`：

```jsx
import React from 'react';
import OriginalLayout from '@theme-original/Layout';

export default function Layout(props) {
  return (
    <>
      <OriginalLayout {...props}>
        {props.children}
      </OriginalLayout>
    </>
  );
}
```

---

## 📚 相关资源

- **Docusaurus 文档**: https://docusaurus.io/
- **Fumadocs 官网**: https://fumadocs.vercel.app/
- **Tailwind CSS 文档**: https://tailwindcss.com/
- **MDX 文档**: https://mdxjs.com/

---

## 🎉 总结

您现在拥有一个功能完整的 Docusaurus 站点，具有 Fumadocs 的精美设计！

### 已实现的功能：

✅ Tailwind CSS 完全集成  
✅ Fumadocs 设计系统（CSS 变量）  
✅ 深色/亮色模式切换  
✅ 响应式布局  
✅ 自定义导航栏样式  
✅ 自定义侧边栏样式  
✅ 美化的代码块  
✅ 样式化的提示框  
✅ 示例文档和博客  

### 下一步建议：

1. **添加您的内容** - 开始编写文档
2. **自定义颜色** - 调整 CSS 变量以匹配品牌
3. **添加 Logo** - 在 `static/img/` 中添加 logo
4. **配置部署** - 设置 GitHub Pages 或 Vercel
5. **Swizzle 组件** - 如需完全自定义某些组件

---

**祝您使用愉快！** 🚀

如果遇到问题，请参考上面的"常见问题"部分或查阅官方文档。
