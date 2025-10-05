# 🚀 从这里开始

欢迎使用 **Docusaurus + Fumadocs 风格** 项目！

## 📦 项目已创建完成 ✅

您的 Docusaurus 项目已经配置好 Fumadocs 设计风格，包括：

- ✅ 完整的 Tailwind CSS 配置
- ✅ Fumadocs 设计系统（CSS 变量和样式）
- ✅ 深色/亮色模式支持
- ✅ 响应式布局
- ✅ 示例文档和博客
- ✅ 自定义首页

---

## ⚡ 快速启动（3 步）

### 1️⃣ 安装依赖

打开终端，在项目目录运行：

```bash
npm install
```

### 2️⃣ 启动开发服务器

```bash
npm start
```

### 3️⃣ 访问网站

浏览器将自动打开 `http://localhost:3000`

---

## 📚 重要文档

建议按以下顺序阅读：

| 文档 | 用途 | 优先级 |
|------|------|--------|
| **START_HERE.md** | 快速启动（本文件） | 🔴 现在 |
| **SETUP_GUIDE.md** | 详细配置指南 | 🟠 接下来 |
| **FILES_REFERENCE.md** | 文件清单和参考 | 🟡 需要时 |
| **PROJECT_STRUCTURE.md** | 项目结构说明 | 🟡 需要时 |
| **README.md** | 项目简介 | 🟢 可选 |

---

## 🎨 核心文件说明

### 样式文件（最重要！）

**`src/css/custom.css`** - 包含所有 Fumadocs 风格

```css
/* Tailwind CSS 指令 */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS 变量定义 */
:root {
  --color-fd-background: hsl(0, 0%, 96%);
  --color-fd-primary: hsl(0, 0%, 9%);
  /* ... 更多变量 */
}

[data-theme='dark'] {
  --color-fd-background: hsl(0, 0%, 7.04%);
  /* ... 暗色模式变量 */
}

/* Docusaurus 组件样式覆盖 */
.navbar { ... }
.sidebar { ... }
.markdown { ... }
```

### 配置文件

**`docusaurus.config.js`** - Docusaurus 主配置
- 包含 **PostCSS 插件配置**（集成 Tailwind）
- 站点元数据、导航栏、页脚等

**`tailwind.config.js`** - Tailwind CSS 配置
- 内容扫描路径
- 深色模式配置
- Fumadocs 颜色系统

**`postcss.config.js`** - PostCSS 配置
- 启用 Tailwind CSS 和 Autoprefixer

---

## 📝 尝试编辑

### 修改颜色主题

编辑 `src/css/custom.css`：

```css
:root {
  /* 从灰色改为蓝色主题 */
  --color-fd-primary: hsl(220, 90%, 50%);
}
```

保存后，网站会自动热更新！

### 添加新文档

1. 创建 `docs/my-doc.md`：

```md
---
sidebar_position: 2
---

# 我的新文档

这是新内容...
```

2. 保存后自动出现在侧边栏

### 修改首页

编辑 `src/pages/index.js`，使用 Tailwind 类：

```jsx
<div className="bg-fd-card border border-fd-border rounded-lg p-6">
  我的自定义内容
</div>
```

---

## 🎯 可用的 Tailwind 类

您可以在任何 React 组件或 `.mdx` 文件中使用这些类：

### 颜色
```jsx
<div className="bg-fd-background" />      {/* 背景色 */}
<div className="bg-fd-card" />            {/* 卡片背景 */}
<div className="bg-fd-muted" />           {/* 静音背景 */}
<p className="text-fd-foreground" />      {/* 前景文字 */}
<p className="text-fd-muted-foreground" />{/* 静音文字 */}
<div className="border-fd-border" />      {/* 边框 */}
```

### 按钮
```jsx
<button className="bg-fd-primary text-fd-primary-foreground px-4 py-2 rounded-md hover:bg-fd-accent transition-colors">
  点击我
</button>
```

### 卡片
```jsx
<div className="bg-fd-card border border-fd-border rounded-lg p-6 shadow-sm">
  卡片内容
</div>
```

---

## 🌙 深色模式

深色模式自动工作！点击右上角的主题切换按钮即可。

所有颜色都通过 CSS 变量定义，在切换主题时自动更新：

- 亮色模式：`:root { ... }`
- 暗色模式：`[data-theme='dark'] { ... }`

---

## 📂 项目结构概览

```
HevSpecu/
├── 📋 docusaurus.config.js  # Docusaurus 配置
├── 📋 tailwind.config.js    # Tailwind 配置
├── 📋 package.json          # 依赖管理
│
├── 📖 docs/                 # 文档目录
│   ├── intro.md
│   └── tutorial-basics/
│
├── 📝 blog/                 # 博客目录
│   └── 2024-01-01-welcome.md
│
├── 🎨 src/
│   ├── css/
│   │   └── custom.css      # ⭐ Fumadocs 样式（核心）
│   ├── components/         # React 组件
│   └── pages/
│       └── index.js        # 首页
│
└── 📦 static/              # 静态资源（图片等）
```

---

## 🔧 常用命令

```bash
# 安装依赖
npm install

# 启动开发服务器（http://localhost:3000）
npm start

# 构建生产版本
npm run build

# 预览生产构建
npm run serve

# 清除缓存（遇到问题时）
npm run clear
```

---

## ❓ 常见问题

### Q1: 样式没有生效？

**A:** 检查文件路径是否在 `tailwind.config.js` 的 `content` 中：

```javascript
content: [
  './src/**/*.{js,jsx,ts,tsx}',
  './docs/**/*.{md,mdx}',
  './blog/**/*.{md,mdx}',
],
```

### Q2: 深色模式不工作？

**A:** 确保 `tailwind.config.js` 中有：

```javascript
darkMode: ['class', '[data-theme="dark"]'],
```

### Q3: 代码块样式不对？

**A:** 检查 `src/css/custom.css` 中的 `.prism-code` 样式是否存在。

### Q4: 安装依赖失败？

**A:** 尝试：
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## 🎓 下一步学习

### 初级
1. 阅读 `SETUP_GUIDE.md` 了解详细配置
2. 修改 `docs/intro.md` 添加自己的内容
3. 尝试修改 `src/css/custom.css` 中的颜色

### 中级
1. 在 `src/components/` 创建自定义组件
2. 修改 `docusaurus.config.js` 自定义站点
3. 学习在 `.mdx` 文件中使用 React 组件

### 高级
1. 使用 Swizzling 完全自定义 Docusaurus 组件
2. 添加自定义 Tailwind 插件
3. 集成其他工具（如 Algolia 搜索）

---

## 📖 参考资源

- **Docusaurus 官方文档**: https://docusaurus.io/
- **Fumadocs 官方网站**: https://fumadocs.vercel.app/
- **Tailwind CSS 文档**: https://tailwindcss.com/
- **MDX 文档**: https://mdxjs.com/

---

## ✅ 检查清单

完成这些步骤确保一切正常：

- [ ] 运行 `npm install` 成功
- [ ] 运行 `npm start` 打开网站
- [ ] 点击深色模式切换按钮，主题正常切换
- [ ] 打开 `docs/intro.md`，内容正确显示
- [ ] 代码块有语法高亮
- [ ] 提示框（:::tip、:::note 等）样式正确
- [ ] 在手机或窄窗口中测试响应式布局
- [ ] 编辑 `docs/intro.md`，保存后自动热更新

---

## 🎉 准备就绪！

您的项目已经准备好了！现在您可以：

1. **立即开始** - 运行 `npm install && npm start`
2. **阅读文档** - 查看 `SETUP_GUIDE.md`
3. **添加内容** - 在 `docs/` 中创建文档
4. **自定义样式** - 修改 `src/css/custom.css`

---

**祝您使用愉快！** 🚀

如有问题，请查看 `SETUP_GUIDE.md` 的"常见问题"部分。
