# Docusaurus with Fumadocs Style

这是一个使用 Fumadocs 设计风格的 Docusaurus v3 项目。它将 Docusaurus 的强大功能与 Fumadocs 的现代、精美设计相结合。

## ✨ 特性

- 🎨 **Fumadocs 设计系统** - 采用 Fumadocs 的精美 UI 设计
- ⚡ **Tailwind CSS** - 使用 Tailwind CSS 进行快速样式开发
- 🌙 **深色模式** - 完美的深色主题支持
- 📱 **响应式设计** - 在所有设备上都能完美显示
- 🎯 **TypeScript 支持** - 完整的 TypeScript 类型支持
- 🔍 **SEO 友好** - 优化的搜索引擎优化

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器

```bash
npm start
```

网站将在 `http://localhost:3000` 打开。

### 构建生产版本

```bash
npm run build
```

这将在 `build` 目录中生成静态内容。

### 本地预览生产构建

```bash
npm run serve
```

## 📁 项目结构

```
.
├── blog/                  # 博客文章
├── docs/                  # 文档文件
├── src/
│   ├── components/        # React 组件
│   ├── css/
│   │   └── custom.css    # Fumadocs 风格的自定义样式
│   └── pages/            # 自定义页面
├── static/               # 静态资源
├── docusaurus.config.js  # Docusaurus 配置
├── sidebars.js          # 侧边栏配置
├── tailwind.config.js   # Tailwind CSS 配置
└── postcss.config.js    # PostCSS 配置
```

## 🎨 自定义样式

### CSS 变量

所有颜色和主题变量都在 `src/css/custom.css` 中定义。您可以修改这些变量来自定义外观：

```css
:root {
  --color-fd-background: hsl(0, 0%, 96%);
  --color-fd-foreground: hsl(0, 0%, 3.9%);
  --color-fd-primary: hsl(0, 0%, 9%);
  /* ... 更多变量 */
}
```

### Tailwind CSS 类

您可以在 Markdown 和 React 组件中使用 Tailwind CSS 和 Fumadocs 的设计系统类：

```jsx
<div className="bg-fd-card border border-fd-border rounded-lg p-6">
  这是一个卡片
</div>
```

## 📝 编写文档

文档文件存储在 `docs/` 目录中。每个文件都是一个 Markdown 或 MDX 文件，带有前置元数据：

```md
---
sidebar_position: 1
title: 我的文档
---

# 文档内容

这里是文档内容...
```

## 🔧 配置

主要配置在以下文件中：

- **docusaurus.config.js** - Docusaurus 主配置
- **sidebars.js** - 侧边栏配置
- **tailwind.config.js** - Tailwind CSS 配置
- **src/css/custom.css** - 全局样式和 Fumadocs 主题

## 📚 资源

- [Docusaurus 文档](https://docusaurus.io/)
- [Fumadocs 文档](https://fumadocs.vercel.app/)
- [Tailwind CSS 文档](https://tailwindcss.com/)

## 📄 许可证

MIT

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。

## 💡 提示

### Swizzling 组件

如果您需要完全自定义某些 Docusaurus 组件，可以使用 swizzling：

```bash
npm run swizzle @docusaurus/theme-classic ComponentName
```

例如，要自定义导航栏：

```bash
npm run swizzle @docusaurus/theme-classic Navbar
```

### 深色模式

深色模式通过 `[data-theme='dark']` 属性自动工作。所有颜色都在 CSS 变量中定义，并在主题切换时自动更新。

### 代码块样式

代码块使用 Prism.js 进行语法高亮。您可以在 `src/css/custom.css` 中自定义代码块的颜色。

---

使用 ❤️ 构建，基于 Docusaurus 和 Fumadocs 设计系统。
