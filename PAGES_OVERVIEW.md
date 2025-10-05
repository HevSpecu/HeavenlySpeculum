# 页面概览

本文档概述了网站中所有可用的页面及其功能。

---

## 📄 已创建的页面

### 1. 🏠 主页 (`src/pages/index.js`)
**路由**: `/`

**功能**:
- Hero 区域：展示网站标题和标语
- 特性展示：3 个特性卡片（快速开发、现代设计、深色模式）
- CTA 按钮：引导用户到文档或博客

**使用的组件**:
- `HomepageHeader` - Hero 区域组件
- `FeatureSection` - 特性展示区域

**样式特点**:
- 使用 Fumadocs 颜色系统
- 响应式网格布局
- 悬停动画效果

---

### 2. 📚 文档页面 (`docs/`)
**路由**: `/docs/intro`

**包含的文档**:
- `intro.md` - 文档首页
- `tutorial-basics/create-a-page.md` - 创建页面教程
- `tutorial-basics/create-a-document.md` - 创建文档教程

**功能**:
- 侧边栏导航
- Markdown 支持
- 代码高亮
- 提示框（note, tip, warning, danger）
- 面包屑导航
- 上一页/下一页导航

**样式覆盖**:
- 自定义侧边栏样式
- 自定义内容区域样式
- Prism 代码高亮主题

---

### 3. 🚀 项目页面 (`src/pages/projects.js`)
**路由**: `/projects`

**功能**:
- **Hero 区域**: 项目展示页面介绍
- **项目网格**: 展示 6 个示例项目
  - 项目 Alpha (React, TypeScript, Node.js)
  - 项目 Beta (Vue, Tailwind CSS, Vite)
  - 项目 Gamma (D3.js, Canvas, WebGL)
  - 项目 Delta (REST, GraphQL, Docker)
  - 项目 Epsilon (Redux, Zustand, React)
  - 项目 Zeta (CLI, Node.js, Shell)
- **CTA 区域**: 邀请贡献
- **统计数据**: 展示项目数量、Stars、贡献者等

**每个项目卡片包含**:
- 图标（emoji）
- 标题和描述
- 技术标签
- GitHub 链接
- 演示链接（可选）

**交互特性**:
- 卡片悬停阴影效果
- 响应式网格布局（1/2/3 列）
- 外链在新标签页打开

---

### 4. 📝 博客页面 (`blog/`)
**路由**: `/blog`

**包含的博客**:
- `2024-01-01-welcome.md` - 欢迎博客

**功能**:
- 博客列表页面
- 单篇博客页面
- 作者信息
- 标签分类
- 阅读时间显示
- RSS 订阅支持

**博客前置元数据**:
```yaml
slug: welcome
title: 欢迎使用 Fumadocs 风格
authors: [admin]
tags: [docusaurus, fumadocs, tailwind]
```

**特性**:
- `<!--truncate-->` 标记用于分隔摘要和正文
- 自动生成博客归档页面
- 支持多作者

---

### 5. 👥 关于页面 (`src/pages/about.js`)
**路由**: `/about`

**功能**:
- **Hero 区域**: 关于我们的介绍
- **使命区域**: 展示团队使命和愿景
- **价值观区域**: 4 个核心价值观卡片
  - 专注质量
  - 开放协作
  - 持续创新
  - 用户至上
- **团队区域**: 展示 4 位核心团队成员
  - 姓名、角色、简介
  - 头像（emoji）
  - GitHub 和 Twitter 链接
- **统计数据**: 年经验、项目数、Stars、贡献者
- **CTA 区域**: 邀请加入团队

**组件**:
- `TeamMember` - 团队成员卡片
- `ValueCard` - 价值观卡片

**样式特点**:
- 多列响应式布局
- 社交媒体图标（SVG）
- 卡片悬停效果

---

## 🗺️ 网站导航结构

```
导航栏（Navbar）
├── 文档 → /docs/intro
├── 项目 → /projects
├── 博客 → /blog
├── 关于 → /about
└── GitHub → https://github.com/your-org/your-project

页脚（Footer）
├── 文档
│   └── 教程 → /docs/intro
├── 社区
│   ├── Stack Overflow
│   └── Discord
└── 更多
    ├── 项目 → /projects
    ├── 博客 → /blog
    ├── 关于 → /about
    └── GitHub
```

---

## 🎨 页面样式统一性

所有页面都使用相同的 Fumadocs 设计系统：

### 颜色类
- `bg-fd-background` - 主背景色
- `bg-fd-card` - 卡片背景色
- `bg-fd-muted` - 静音背景色
- `text-fd-foreground` - 主文字颜色
- `text-fd-muted-foreground` - 次要文字颜色
- `border-fd-border` - 边框颜色

### 组件样式
- **卡片**: 圆角、边框、阴影、悬停效果
- **按钮**: 主按钮、次要按钮、边框按钮
- **网格**: 响应式布局（1/2/3 列）
- **Hero 区域**: 大标题、副标题、CTA 按钮

### 响应式断点
- 移动端: `< 768px` (1 列)
- 平板: `≥ 768px` (2 列)
- 桌面: `≥ 1024px` (3 列)

---

## 📊 页面对比

| 页面 | 路由 | 文件类型 | 主要内容 | 交互元素 |
|------|------|----------|----------|----------|
| 主页 | `/` | React (`.js`) | Hero + 特性展示 | CTA 按钮 |
| 文档 | `/docs/*` | Markdown (`.md/.mdx`) | 教程和指南 | 侧边栏、代码块 |
| 项目 | `/projects` | React (`.js`) | 项目展示网格 | 外链、标签 |
| 博客 | `/blog` | Markdown (`.md`) | 博客文章 | 标签、作者 |
| 关于 | `/about` | React (`.js`) | 团队和价值观 | 社交链接 |

---

## 🔧 如何添加新页面

### 添加静态页面

1. 在 `src/pages/` 创建新文件（如 `contact.js`）:

```jsx
import React from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout title="联系我们">
      <div className="container mx-auto px-4 py-8">
        <h1>联系我们</h1>
        {/* 内容 */}
      </div>
    </Layout>
  );
}
```

2. 在 `docusaurus.config.js` 添加导航项:

```javascript
items: [
  // 现有项...
  {to: '/contact', label: '联系', position: 'left'},
],
```

### 添加文档页面

1. 在 `docs/` 创建新文件（如 `guide.md`）:

```md
---
sidebar_position: 2
title: 新指南
---

# 新指南

内容...
```

2. 页面会自动出现在侧边栏（使用自动侧边栏时）

### 添加博客文章

1. 在 `blog/` 创建新文件（如 `2024-01-15-my-post.md`）:

```md
---
slug: my-post
title: 我的文章
authors: [admin]
tags: [tag1, tag2]
---

摘要...

<!--truncate-->

完整内容...
```

2. 文章会自动出现在博客列表

---

## 🎯 页面优化建议

### 性能优化
- ✅ 使用 React.lazy() 进行代码分割
- ✅ 优化图片（使用 WebP 格式）
- ✅ 最小化 JavaScript 包大小
- ✅ 启用 Gzip 压缩

### SEO 优化
- ✅ 为每个页面添加 `title` 和 `description`
- ✅ 使用语义化 HTML 标签
- ✅ 添加 Open Graph 元标签
- ✅ 生成 sitemap.xml

### 可访问性
- ✅ 使用适当的 ARIA 标签
- ✅ 确保键盘导航可用
- ✅ 提供足够的颜色对比度
- ✅ 为图片添加 alt 属性

---

## 📝 自定义页面内容

### 修改主页

编辑 `src/pages/index.js`：

```jsx
// 修改 Hero 标题
<h1 className="text-5xl font-bold text-fd-foreground mb-4">
  您的网站标题
</h1>

// 修改特性
const features = [
  {
    emoji: '⚡',
    title: '您的特性 1',
    description: '描述...'
  },
  // 更多特性...
];
```

### 修改项目页面

编辑 `src/pages/projects.js`：

```jsx
// 修改项目列表
const projects = [
  {
    title: '您的项目',
    description: '项目描述',
    tags: ['技术1', '技术2'],
    github: 'https://github.com/...',
    demo: 'https://demo.com',
    image: '🚀',
  },
  // 更多项目...
];
```

### 修改关于页面

编辑 `src/pages/about.js`：

```jsx
// 修改团队成员
const team = [
  {
    name: '成员姓名',
    role: '职位',
    bio: '简介',
    avatar: '👨‍💻',
    github: 'https://github.com/...',
    twitter: 'https://twitter.com/...',
  },
  // 更多成员...
];
```

---

## 🌐 多语言支持

当前配置支持中文（zh-Hans）和英文（en）。

要添加其他语言的页面：

1. 在 `i18n/` 目录创建对应的翻译文件
2. 在 `docusaurus.config.js` 添加语言配置
3. 使用 `<Translate>` 组件包裹需要翻译的文本

---

## ✅ 页面检查清单

开发新页面时使用此清单：

- [ ] 页面使用 `Layout` 组件包裹
- [ ] 设置正确的 `title` 和 `description`
- [ ] 使用 Fumadocs 颜色类（`fd-*`）
- [ ] 实现响应式布局
- [ ] 支持深色模式
- [ ] 添加适当的导航链接
- [ ] 测试所有交互元素
- [ ] 优化图片和资源
- [ ] 检查可访问性
- [ ] 验证在不同浏览器中的表现

---

## 🎉 总结

您现在拥有一个完整的网站结构：

- ✅ **5 个核心页面**（主页、文档、项目、博客、关于）
- ✅ **统一的设计系统**（Fumadocs 风格）
- ✅ **完整的导航**（顶部导航栏 + 页脚）
- ✅ **响应式布局**（移动端到桌面端）
- ✅ **深色模式支持**（所有页面）

开始自定义这些页面，添加您自己的内容吧！ 🚀
