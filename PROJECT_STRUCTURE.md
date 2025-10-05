# 项目结构

```
HevSpecu/
├── 📋 配置文件
│   ├── package.json                 # 项目依赖和脚本
│   ├── tsconfig.json               # TypeScript 配置
│   ├── docusaurus.config.js        # Docusaurus 主配置 ⚠️ 包含 PostCSS 插件
│   ├── sidebars.js                 # 侧边栏结构
│   ├── tailwind.config.js          # Tailwind CSS 配置
│   ├── postcss.config.js           # PostCSS 配置
│   └── .gitignore                  # Git 忽略文件
│
├── 📚 文档说明
│   ├── README.md                   # 项目简介
│   ├── SETUP_GUIDE.md              # 详细设置指南 📘
│   ├── FILES_REFERENCE.md          # 文件参考
│   └── PROJECT_STRUCTURE.md        # 项目结构（本文件）
│
├── 📖 docs/                        # 文档内容
│   ├── intro.md                    # 文档首页
│   └── tutorial-basics/
│       ├── create-a-page.md        # 创建页面教程
│       └── create-a-document.md    # 创建文档教程
│
├── 📝 blog/                        # 博客文章
│   └── 2024-01-01-welcome.md       # 欢迎博客
│
├── 🎨 src/
│   ├── css/
│   │   └── custom.css              # ⭐ Fumadocs 样式核心文件
│   │
│   ├── components/                 # React 组件
│   │   └── .gitkeep
│   │
│   └── pages/                      # 自定义页面
│       └── index.js                # 网站首页
│
└── 📦 static/                      # 静态资源
    └── .gitkeep
```

---

## 📂 目录说明

### 根目录配置文件

#### 必须文件 ⚠️
这些文件对项目运行至关重要：

| 文件 | 用途 | 可以修改？ |
|------|------|-----------|
| `package.json` | 依赖管理 | ✅ 修改元数据 |
| `docusaurus.config.js` | Docusaurus 配置 | ✅ 建议修改 |
| `tailwind.config.js` | Tailwind 配置 | ⚠️ 谨慎修改 |
| `postcss.config.js` | PostCSS 配置 | ❌ 通常不需要 |

#### 可选文件
这些文件提供辅助功能：

| 文件 | 用途 | 可以删除？ |
|------|------|-----------|
| `tsconfig.json` | TypeScript 配置 | ⚠️ 如果不用 TS |
| `sidebars.js` | 侧边栏配置 | ⚠️ 可用自动生成 |
| `.gitignore` | Git 忽略 | ❌ 建议保留 |

### 文档目录 (`docs/`)

```
docs/
├── intro.md                 # 首页 (sidebar_position: 1)
└── tutorial-basics/         # 教程分类
    ├── create-a-page.md     # 子页面 1
    └── create-a-document.md # 子页面 2
```

#### 如何组织文档

**方式 1：自动侧边栏**（推荐）
- 只需在 `docs/` 下创建文件和文件夹
- Docusaurus 会自动生成侧边栏
- 使用 `sidebar_position` 控制顺序

**方式 2：手动侧边栏**
- 在 `sidebars.js` 中明确定义结构
- 更多控制权，但需要手动维护

#### 文档文件结构

每个文档文件应包含：

```md
---
sidebar_position: 1
title: 页面标题
description: 页面描述
---

# 页面标题

内容...
```

### 博客目录 (`blog/`)

```
blog/
└── 2024-01-01-welcome.md   # 文件名格式：YYYY-MM-DD-标题.md
```

#### 博客文件命名规则

- **格式**：`YYYY-MM-DD-slug.md`
- **示例**：`2024-01-15-my-post.md`
- **URL**：`/blog/my-post`

#### 博客前置元数据

```md
---
slug: welcome              # URL slug
title: 文章标题           # 显示标题
authors: [admin]          # 作者（需在 blog/authors.yml 定义）
tags: [tag1, tag2]        # 标签
---

摘要在这里...

<!--truncate-->

完整内容在这里...
```

### 源码目录 (`src/`)

```
src/
├── css/
│   └── custom.css         # 全局样式
├── components/            # React 组件
│   └── YourComponent.js
└── pages/                # 自定义页面
    ├── index.js          # 首页 (/)
    └── about.js          # 关于页面 (/about)
```

#### `src/css/custom.css` 结构

```css
/* 1. Tailwind 指令 */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 2. CSS 变量定义 */
:root { /* 亮色模式 */ }
[data-theme='dark'] { /* 暗色模式 */ }

/* 3. 全局基础样式 */
body { ... }

/* 4. Docusaurus 组件覆盖 */
.navbar { ... }
.sidebar { ... }
.markdown { ... }
/* ... 更多组件 */

/* 5. 自定义工具类 */
@layer utilities { ... }
```

#### `src/components/` 使用

创建可重用组件：

```jsx
// src/components/Card.js
export default function Card({ title, children }) {
  return (
    <div className="bg-fd-card border border-fd-border rounded-lg p-6">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
```

在 Markdown 中使用：

```mdx
import Card from '@site/src/components/Card';

<Card title="标题">内容</Card>
```

#### `src/pages/` 使用

- 每个文件自动成为一个路由
- `index.js` → `/`
- `about.js` → `/about`
- `team/index.js` → `/team`

### 静态资源目录 (`static/`)

```
static/
├── img/                   # 图片
│   ├── logo.svg
│   └── favicon.ico
├── fonts/                 # 字体
└── files/                 # 其他文件
```

#### 使用静态资源

在 Markdown 中：
```md
![Logo](/img/logo.svg)
```

在 React 中：
```jsx
<img src="/img/logo.svg" alt="Logo" />
```

在 CSS 中：
```css
background-image: url('/img/bg.png');
```

---

## 🔍 关键文件深入解析

### 1️⃣ `docusaurus.config.js`

```javascript
module.exports = {
  // ========== 站点元数据 ==========
  title: 'Docusaurus with Fumadocs Style',
  tagline: 'Beautiful documentation...',
  url: 'https://your-site.com',
  baseUrl: '/',
  
  // ========== 国际化 ==========
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },
  
  // ========== 预设 ==========
  presets: [
    [
      'classic',
      {
        docs: { /* 文档配置 */ },
        blog: { /* 博客配置 */ },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
  // ========== 插件 ⚠️ 重要！ ==========
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // 这里集成 Tailwind CSS
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
  
  // ========== 主题配置 ==========
  themeConfig: {
    navbar: { /* 导航栏 */ },
    footer: { /* 页脚 */ },
    prism: { /* 代码高亮 */ },
  },
};
```

### 2️⃣ `tailwind.config.js`

```javascript
module.exports = {
  // ========== 内容扫描 ==========
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
    // 如果添加新目录，在这里添加
  ],
  
  // ========== 深色模式 ==========
  darkMode: ['class', '[data-theme="dark"]'],
  
  // ========== 主题扩展 ==========
  theme: {
    extend: {
      colors: {
        fd: { /* Fumadocs 颜色 */ }
      },
      borderRadius: { /* 圆角 */ },
      animation: { /* 动画 */ },
    },
  },
};
```

### 3️⃣ `src/css/custom.css`

这是整个样式系统的核心！包含：

1. **Tailwind 指令** - 启用 Tailwind CSS
2. **CSS 变量** - 定义所有颜色和尺寸
3. **组件覆盖** - 重写 Docusaurus 默认样式
4. **响应式样式** - 移动端适配

---

## 🎯 工作流程

### 添加新文档

1. 在 `docs/` 中创建 `.md` 或 `.mdx` 文件
2. 添加前置元数据
3. 编写内容
4. ✅ 自动出现在侧边栏

### 添加新博客

1. 在 `blog/` 中创建 `YYYY-MM-DD-slug.md`
2. 添加前置元数据
3. 编写内容
4. ✅ 自动出现在博客列表

### 创建自定义页面

1. 在 `src/pages/` 中创建 `.js` 或 `.tsx` 文件
2. 导出 React 组件
3. ✅ 自动创建路由

### 添加组件

1. 在 `src/components/` 中创建组件
2. 在 `.mdx` 文件中导入使用
3. ✅ 可在文档中使用

### 修改样式

1. 编辑 `src/css/custom.css`
2. 修改 CSS 变量或添加新样式
3. ✅ 保存后自动热更新

---

## 📊 文件依赖关系

```
docusaurus.config.js
├── 引用 src/css/custom.css
├── 配置 docs/
├── 配置 blog/
└── 注入 Tailwind CSS 插件
    └── 读取 tailwind.config.js
        └── 扫描 src/**, docs/**, blog/**

src/css/custom.css
├── @tailwind 指令
├── CSS 变量定义
└── 组件样式覆盖

src/pages/index.js
├── 使用 Layout 组件
└── 使用 Tailwind 类

docs/**/*.md
├── 读取 sidebars.js
└── 可以使用 Tailwind 类（在 HTML 中）

docs/**/*.mdx
├── 读取 sidebars.js
├── 可导入 React 组件
└── 可以使用 Tailwind 类
```

---

## ✅ 快速检查清单

### 必须存在的文件
- [ ] `package.json`
- [ ] `docusaurus.config.js`
- [ ] `src/css/custom.css`
- [ ] `tailwind.config.js`
- [ ] `postcss.config.js`

### 必须存在的目录
- [ ] `docs/`
- [ ] `src/`
- [ ] `static/`

### 可选但推荐的文件
- [ ] `README.md`
- [ ] `sidebars.js`
- [ ] `.gitignore`
- [ ] `blog/`

---

## 🚀 下一步

1. **运行** `npm install`
2. **启动** `npm start`
3. **浏览** http://localhost:3000
4. **编辑** `docs/intro.md` 看看热更新
5. **自定义** `src/css/custom.css` 改变颜色
6. **添加** 您自己的文档内容

---

**项目结构说明完毕** 🎉

查看 `SETUP_GUIDE.md` 了解详细的使用指南！
