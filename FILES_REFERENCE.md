# 文件清单与参考

本文档提供项目中所有生成文件的快速参考。

## 📦 核心配置文件

### 1. `package.json`
- **用途**：项目依赖和脚本配置
- **关键依赖**：
  - `@docusaurus/core` - Docusaurus 核心
  - `tailwindcss` - Tailwind CSS
  - `autoprefixer` - CSS 自动前缀
  - `postcss` - CSS 处理器

### 2. `tsconfig.json`
- **用途**：TypeScript 配置
- **扩展**：`@docusaurus/tsconfig`
- **路径别名**：`@site/*` → `./src/*`

### 3. `docusaurus.config.js`
- **用途**：Docusaurus 主配置
- **关键配置**：
  - 站点元数据（title, tagline, url）
  - 国际化（i18n）配置
  - 主题配置（navbar, footer, prism）
  - **PostCSS 插件集成** ⚠️ 重要！

### 4. `sidebars.js`
- **用途**：文档侧边栏结构
- **定义**：文档分类和层级

---

## 🎨 样式配置文件

### 5. `tailwind.config.js`
- **用途**：Tailwind CSS 配置
- **内容扫描路径**：
  - `./src/**/*.{js,jsx,ts,tsx}`
  - `./docs/**/*.{md,mdx}`
  - `./blog/**/*.{md,mdx}`
- **深色模式**：`['class', '[data-theme="dark"]']`
- **主题扩展**：
  - Fumadocs 颜色系统
  - 自定义圆角
  - 自定义动画

### 6. `postcss.config.js`
- **用途**：PostCSS 配置
- **插件**：
  - `tailwindcss` - 处理 Tailwind 指令
  - `autoprefixer` - 添加浏览器前缀

### 7. `src/css/custom.css` ⭐ 核心文件
- **用途**：全局样式和 Fumadocs 主题
- **包含内容**：
  1. Tailwind 指令（`@tailwind base/components/utilities`）
  2. CSS 变量定义（亮色和暗色模式）
  3. 全局基础样式
  4. Docusaurus 组件样式覆盖：
     - 导航栏 (`.navbar`)
     - 侧边栏 (`.sidebar`, `.menu`)
     - 文档内容 (`.markdown`)
     - 代码块 (`.theme-code-block`, `.prism-code`)
     - 提示框 (`.admonition`)
     - 目录 (`.table-of-contents`)
     - 页脚 (`.footer`)
     - 分页导航 (`.pagination-nav`)
  5. Prism 语法高亮主题
  6. 自定义工具类

---

## 📄 文档文件

### 8. `docs/intro.md`
- **用途**：文档首页
- **内容**：
  - 项目介绍
  - 快速开始指南
  - 示例代码块
  - 所有类型的提示框示例

### 9. `docs/tutorial-basics/create-a-page.md`
- **用途**：创建页面教程
- **内容**：
  - 如何创建 React 页面
  - Tailwind CSS 使用示例
  - 组件创建指南

### 10. `docs/tutorial-basics/create-a-document.md`
- **用途**：创建文档教程
- **内容**：
  - Markdown 功能介绍
  - 前置元数据使用
  - MDX 和 React 组件集成

---

## 🌐 页面和博客

### 11. `src/pages/index.js`
- **用途**：网站首页
- **特点**：
  - 使用 Tailwind CSS 和 Fumadocs 设计
  - Hero 区域
  - 特性展示区域（响应式网格）

### 12. `blog/2024-01-01-welcome.md`
- **用途**：示例博客文章
- **内容**：
  - 项目介绍
  - 主要特性列表
  - 代码示例

---

## 🔧 其他文件

### 13. `.gitignore`
- **用途**：Git 忽略文件配置
- **忽略**：
  - `/node_modules`
  - `/build`
  - `.docusaurus`
  - 各种临时和环境文件

### 14. `README.md`
- **用途**：项目说明文档
- **内容**：
  - 项目特性
  - 快速开始指南
  - 项目结构
  - 自定义指南
  - 资源链接

### 15. `SETUP_GUIDE.md` 📘
- **用途**：详细的安装和配置指南
- **内容**：
  - 快速启动步骤
  - 关键文件详解
  - 自定义指南
  - 高级自定义
  - 常见问题解答
  - 进阶学习资源

### 16. 目录占位文件
- `static/.gitkeep` - 确保静态资源目录被 git 跟踪
- `src/components/.gitkeep` - 确保组件目录被 git 跟踪

---

## 🎯 CSS 变量快速参考

### 亮色模式（`:root`）
```css
--color-fd-background: hsl(0, 0%, 96%)
--color-fd-foreground: hsl(0, 0%, 3.9%)
--color-fd-muted: hsl(0, 0%, 96.1%)
--color-fd-muted-foreground: hsl(0, 0%, 45.1%)
--color-fd-card: hsl(0, 0%, 94.7%)
--color-fd-border: hsla(0, 0%, 80%, 50%)
--color-fd-primary: hsl(0, 0%, 9%)
--color-fd-secondary: hsl(0, 0%, 93.1%)
--color-fd-accent: hsla(0, 0%, 82%, 50%)
```

### 暗色模式（`[data-theme='dark']`）
```css
--color-fd-background: hsl(0, 0%, 7.04%)
--color-fd-foreground: hsl(0, 0%, 92%)
--color-fd-muted: hsl(0, 0%, 12.9%)
--color-fd-muted-foreground: hsla(0, 0%, 70%, 0.8)
--color-fd-card: hsl(0, 0%, 9.8%)
--color-fd-border: hsla(0, 0%, 40%, 20%)
--color-fd-primary: hsl(0, 0%, 98%)
--color-fd-secondary: hsl(0, 0%, 12.9%)
--color-fd-accent: hsla(0, 0%, 40.9%, 30%)
```

### 特殊颜色
```css
--color-fd-info: oklch(62.3% 0.214 259.815)
--color-fd-warning: oklch(76.9% 0.188 70.08)
--color-fd-error: oklch(63.7% 0.237 25.331)
--color-fd-success: oklch(72.3% 0.219 149.579)
```

### 布局变量
```css
--radius: 0.5rem
--fd-sidebar-width: 260px
--fd-toc-width: 240px
--fd-nav-height: 64px
```

---

## 🎨 Tailwind 类名快速参考

### 颜色类
| 用途 | 类名 | CSS 变量 |
|------|------|----------|
| 背景 | `bg-fd-background` | `--color-fd-background` |
| 前景文字 | `text-fd-foreground` | `--color-fd-foreground` |
| 静音背景 | `bg-fd-muted` | `--color-fd-muted` |
| 静音文字 | `text-fd-muted-foreground` | `--color-fd-muted-foreground` |
| 卡片背景 | `bg-fd-card` | `--color-fd-card` |
| 边框 | `border-fd-border` | `--color-fd-border` |
| 主色 | `bg-fd-primary` | `--color-fd-primary` |
| 主色文字 | `text-fd-primary-foreground` | `--color-fd-primary-foreground` |
| 次要色 | `bg-fd-secondary` | `--color-fd-secondary` |
| 强调色 | `bg-fd-accent` | `--color-fd-accent` |
| 信息色 | `text-fd-info` | `--color-fd-info` |
| 警告色 | `text-fd-warning` | `--color-fd-warning` |
| 错误色 | `text-fd-error` | `--color-fd-error` |
| 成功色 | `text-fd-success` | `--color-fd-success` |

### 圆角类
| 类名 | 计算值 |
|------|--------|
| `rounded-lg` | `var(--radius)` (0.5rem) |
| `rounded-md` | `calc(var(--radius) - 2px)` |
| `rounded-sm` | `calc(var(--radius) - 4px)` |

---

## 🔍 组件样式覆盖目标

### 导航栏
- `.navbar` - 主容器
- `.navbar__inner` - 内部容器
- `.navbar__title` - 站点标题
- `.navbar__link` - 导航链接
- `.navbar__link--active` - 激活状态链接

### 侧边栏
- `.sidebar` - 侧边栏容器
- `.menu` - 菜单容器
- `.menu__list` - 菜单列表
- `.menu__link` - 菜单项链接
- `.menu__link--active` - 激活状态菜单项

### 文档内容
- `.markdown` - Markdown 容器
- `.markdown > h1, h2, ...` - 标题
- `.markdown > p` - 段落
- `.markdown > ul, ol` - 列表
- `.markdown a` - 链接
- `.markdown code` - 行内代码

### 代码块
- `.theme-code-block` - 代码块容器
- `.prism-code` - Prism 代码区域
- `.theme-code-block-title` - 代码块标题
- `.token.*` - 各种语法元素

### 提示框
- `.admonition` - 基础提示框
- `.admonition-note` - 注意提示框
- `.admonition-tip` - 提示框
- `.admonition-info` - 信息框
- `.admonition-warning` - 警告框
- `.admonition-danger` - 危险框

---

## 📝 修改建议优先级

### 高优先级（建议修改）
1. `docusaurus.config.js` - 站点元数据（title, tagline, url）
2. `src/css/custom.css` - 颜色变量（品牌色）
3. `docs/` - 添加您的实际文档内容
4. `static/img/` - 添加 logo 和图片

### 中优先级（可选修改）
1. `sidebars.js` - 调整侧边栏结构
2. `src/pages/index.js` - 自定义首页
3. `tailwind.config.js` - 添加自定义 Tailwind 配置

### 低优先级（通常不需要修改）
1. `postcss.config.js` - 除非需要额外的 PostCSS 插件
2. `tsconfig.json` - 除非有特殊的 TypeScript 需求
3. `.gitignore` - 已经包含常见忽略项

---

## 🚀 快速命令参考

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建生产版本
npm run build

# 本地预览生产构建
npm run serve

# 清除缓存
npm run clear

# Swizzle 组件（列出可用组件）
npm run swizzle @docusaurus/theme-classic -- --list

# Swizzle 特定组件
npm run swizzle @docusaurus/theme-classic ComponentName -- --wrap
```

---

## ✅ 检查清单

使用此清单确保项目正确设置：

- [ ] 运行 `npm install` 成功
- [ ] 运行 `npm start` 可以打开网站
- [ ] 深色模式切换正常工作
- [ ] 侧边栏显示正确
- [ ] 代码块语法高亮正常
- [ ] 提示框样式正确
- [ ] 响应式布局在移动设备上正常
- [ ] 所有链接可以正常跳转

---

## 📞 获取帮助

如果遇到问题：

1. 查看 `SETUP_GUIDE.md` 的"常见问题"部分
2. 检查浏览器控制台是否有错误
3. 确认 `node_modules` 已正确安装
4. 尝试运行 `npm run clear` 清除缓存
5. 参考官方文档：
   - [Docusaurus 文档](https://docusaurus.io/)
   - [Tailwind CSS 文档](https://tailwindcss.com/)

---

**文件清单生成完毕** ✨
