import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

// 根据标题自动生成标签
function generateTags(title, description) {
  const keywords = {
    '天空之镜': ['React', '前端', 'Web', 'Docusaurus'],
    'Aiamgine': ['AI', '图像处理', '神经网络', 'Python'],
    '时序同笺': ['课程表', '日历', 'API', 'TypeScript'],
    'GitHub': ['镜像', 'Git', '加速', 'CDN'],
    'Docker': ['容器', '镜像', '加速', 'DevOps'],
    'Gastigado': ['图像', 'CDN', '加速', 'Web'],
  };
  
  const tags = [];
  
  // 根据标题匹配关键词
  for (const [key, values] of Object.entries(keywords)) {
    if (title.includes(key) || description.includes(key)) {
      tags.push(...values);
      break;
    }
  }
  
  // 如果没有匹配到，使用默认标签
  if (tags.length === 0) {
    if (description.includes('镜像') || description.includes('加速')) {
      tags.push('镜像加速', '服务', '开源');
    } else {
      tags.push('开源', '工具', 'HevSpecu');
    }
  }
  
  // 去重并返回前3个标签
  return [...new Set(tags)].slice(0, 3);
}

const projectsData = [
  {
    title: '天空之镜',
    description: '极具未来感和科技感的文档站点，映照科技未来，连接创新世界。采用 Fumadocs 设计系统。',
    github: 'https://github.com/HevSpecu',
    demo: '/',
    image: '🌟',
  },
  {
    title: 'Aiamgine',
    description: '基于先进神经网络的智能图像处理平台，提供强大的图像识别、增强和生成能力。',
    github: 'https://github.com/HevSpecu/Aiamgine',
    demo: null,
    image: '🧠',
  },
  {
    title: '时序同笺 (SDNUChronoSync)',
    description: '智能课程表同步系统，为山东师范大学学生提供自动化的日历集成服务。',
    github: 'https://github.com/HevSpecu/SDNUChronoSync',
    demo: null,
    image: '📅',
  },
  {
    title: 'GitHub 加速镜像',
    description: '高速稳定的 GitHub 镜像服务，为开发者提供极速的代码克隆和下载体验。',
    github: 'https://github.com/HevSpecu',
    demo: null,
    image: '🐙',
  },
  {
    title: 'DockerHub 加速镜像',
    description: '企业级 Docker 镜像加速服务，大幅提升容器镜像的拉取速度和稳定性。',
    github: 'https://github.com/HevSpecu',
    demo: null,
    image: '🐳',
  },
  {
    title: 'Gastigado Fast Image',
    description: '超高速图像 CDN 服务，全球分发网络确保您的图像以毫秒级速度加载。',
    github: 'https://github.com/HevSpecu',
    demo: null,
    image: '⚡',
  },
];

// 自动为每个项目生成标签
const projects = projectsData.map(project => ({
  ...project,
  tags: generateTags(project.title, project.description),
}));

function ProjectCard({ title, description, tags, github, demo, image }) {
  return (
    <div className="bg-fd-card border border-fd-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
      <div className="text-5xl mb-4">{image}</div>
      <h3 className="text-fd-foreground font-semibold text-xl mb-3">
        {title}
      </h3>
      <p className="text-fd-muted-foreground mb-4 flex-grow">
        {description}
      </p>
      
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
      
      <div className="flex gap-3">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-fd-primary text-fd-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors no-underline"
        >
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-fd-border text-fd-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-fd-muted transition-colors no-underline"
          >
            演示
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Layout
      title="项目展示"
      description="探索我们的开源项目和工具">
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
                className="bg-fd-primary text-fd-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors no-underline"
                to="/docs/intro">
                查看文档
              </Link>
              <a
                href="https://github.com/your-org"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-fd-border text-fd-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-muted transition-colors no-underline">
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
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
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
                className="bg-fd-primary text-fd-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors no-underline"
                to="/docs/intro">
                贡献指南
              </Link>
              <a
                href="https://github.com/your-org/your-project/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fd-secondary text-fd-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-accent transition-colors no-underline">
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
                {projects.length}+
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
