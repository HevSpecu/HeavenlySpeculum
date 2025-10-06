import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

// 导入项目配置
import projectsConfig from '@site/static/projects';

function ProjectCard({ title, subtitle, description, icon, tags, buttons }) {
  // 判断是否为 emoji（简单判断：长度小于5且不包含/）
  const isEmoji = icon && icon.length < 5 && !icon.includes('/');
  
  return (
    <div className="bg-fd-card border border-fd-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
      {/* 图标显示 */}
      <div className="mb-4">
        {isEmoji ? (
          <div className="text-5xl">{icon}</div>
        ) : (
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        )}
      </div>
      
      {/* 标题和副标题 */}
      <h3 className="text-fd-foreground font-semibold text-xl mb-1">
        {title}
      </h3>
      {subtitle && (
        <p className="text-fd-muted-foreground text-sm mb-3 font-medium">
          {subtitle}
        </p>
      )}
      
      {/* 描述 */}
      <p className="text-fd-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
        {description}
      </p>
      
      {/* 标签 */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span 
              key={idx}
              className="bg-fd-secondary text-fd-secondary-foreground px-3 py-1 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* 按钮组 - 支持可变数量和两种样式 */}
      {buttons && buttons.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {buttons.map((button, idx) => {
            const isPrimary = button.style === 'primary';
            const isExternal = button.link.startsWith('http');
            
            // 基础样式类
            const baseClasses = "px-4 py-2 rounded-md text-sm font-medium transition-colors no-underline inline-block";
            
            // 根据样式类型设置不同的类名
            const styleClasses = isPrimary
              ? "bg-fd-primary text-fd-primary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
              : "border border-fd-border text-fd-foreground hover:bg-fd-muted";
            
            const className = `${baseClasses} ${styleClasses}`;
            
            // 内部链接使用 Link 组件，外部链接使用 a 标签
            if (isExternal) {
              return (
                <a
                  key={idx}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  style={{ textDecoration: 'none' }}
                >
                  {button.label}
                </a>
              );
            } else {
              return (
                <Link
                  key={idx}
                  to={button.link}
                  className={className}
                  style={{ textDecoration: 'none' }}
                >
                  {button.label}
                </Link>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <Layout
      title="项目展示"
      description="探索我们的开源项目和工具"
      wrapperClassName="projects-page">
      {/* Hero Section */}
      <header className="bg-fd-background py-16 border-b border-fd-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-fd-foreground mb-4">
              我们的项目
            </h1>
            <p className="text-xl text-fd-muted-foreground mb-8">
              探索我们开发的开源项目和工具，涵盖前端、后端、DevOps 等多个领域
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                className="bg-fd-primary text-fd-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors"
                style={{ textDecoration: 'none' }}
                to="/docs/intro">
                查看文档
              </Link>
              <a
                href="https://github.com/HevSpecu"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-fd-border text-fd-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-muted transition-colors"
                style={{ textDecoration: 'none' }}>
                GitHub 组织
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-16 bg-fd-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsConfig.map((project, idx) => (
              <ProjectCard key={project.id || idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-fd-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-fd-foreground mb-4">
              想要贡献？
            </h2>
            <p className="text-lg text-fd-muted-foreground mb-8">
              我们欢迎所有形式的贡献！无论是报告 Bug、提出新功能建议，还是提交 Pull Request。
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                className="bg-fd-primary text-fd-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors"
                style={{ textDecoration: 'none' }}
                to="/docs/intro">
                贡献指南
              </Link>
              <a
                href="https://github.com/HevSpecu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fd-secondary text-fd-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-accent transition-colors"
                style={{ textDecoration: 'none' }}>
                查看 Issues
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-fd-muted border-t border-fd-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-fd-primary mb-2">
                {projectsConfig.length}+
              </div>
              <div className="text-fd-muted-foreground">开源项目</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-fd-primary mb-2">
                1000+
              </div>
              <div className="text-fd-muted-foreground">GitHub Stars</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-fd-primary mb-2">
                100+
              </div>
              <div className="text-fd-muted-foreground">贡献者</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-fd-primary mb-2">
                50+
              </div>
              <div className="text-fd-muted-foreground">活跃用户</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
