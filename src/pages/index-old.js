import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="bg-fd-background py-24 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-fd-foreground mb-4">
          {siteConfig.title}
        </h1>
        <p className="text-xl text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
          {siteConfig.tagline}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            className="bg-fd-primary text-fd-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors no-underline"
            to="/heavenly-speculum">
            🌟 天空之镜
          </Link>
          <Link
            className="bg-fd-secondary text-fd-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors no-underline"
            to="/docs/intro">
            开始使用 →
          </Link>
          <Link
            className="bg-fd-secondary text-fd-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors no-underline"
            to="/blog">
            查看博客
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureSection() {
  return (
    <section className="py-20 bg-fd-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-fd-foreground text-center mb-12">
          为什么选择我们
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-fd-card border border-fd-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-fd-foreground mb-2">
              快速开发
            </h3>
            <p className="text-fd-muted-foreground">
              使用 Tailwind CSS 和预设计的组件快速构建美观的文档站点。
            </p>
          </div>
          
          <div className="bg-fd-card border border-fd-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-fd-foreground mb-2">
              现代设计
            </h3>
            <p className="text-fd-muted-foreground">
              采用 Fumadocs 的精美设计系统，提供一流的用户体验。
            </p>
          </div>
          
          <div className="bg-fd-card border border-fd-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🌙</div>
            <h3 className="text-xl font-semibold text-fd-foreground mb-2">
              深色模式
            </h3>
            <p className="text-fd-muted-foreground">
              完美的深色主题支持，让用户在任何光照条件下都能舒适阅读。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`主页 - ${siteConfig.title}`}
      description="使用 Fumadocs 设计风格的 Docusaurus 文档站点">
      <HomepageHeader />
      <FeatureSection />
    </Layout>
  );
}
