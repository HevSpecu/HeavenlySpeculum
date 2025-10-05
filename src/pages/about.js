import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const team = [
  {
    name: '张三',
    role: '创始人 & 首席架构师',
    bio: '10年以上全栈开发经验，热爱开源，致力于构建更好的开发工具。',
    avatar: '👨‍💻',
    github: 'https://github.com/user1',
    twitter: 'https://twitter.com/user1',
  },
  {
    name: '李四',
    role: '前端工程师',
    bio: 'React 和 TypeScript 专家，专注于用户体验和性能优化。',
    avatar: '👩‍💻',
    github: 'https://github.com/user2',
    twitter: 'https://twitter.com/user2',
  },
  {
    name: '王五',
    role: '后端工程师',
    bio: '云原生技术爱好者，擅长微服务架构和容器化部署。',
    avatar: '👨‍💼',
    github: 'https://github.com/user3',
    twitter: 'https://twitter.com/user3',
  },
  {
    name: '赵六',
    role: 'UI/UX 设计师',
    bio: '追求极致的设计细节，致力于创造美观且易用的界面。',
    avatar: '👩‍🎨',
    github: 'https://github.com/user4',
    twitter: 'https://twitter.com/user4',
  },
];

const values = [
  {
    icon: '🎯',
    title: '专注质量',
    description: '我们相信高质量的代码和文档是成功项目的基石。每一行代码都经过仔细审查。',
  },
  {
    icon: '🤝',
    title: '开放协作',
    description: '我们拥抱开源精神，欢迎来自世界各地的贡献者加入我们的社区。',
  },
  {
    icon: '🚀',
    title: '持续创新',
    description: '技术日新月异，我们始终保持学习，探索新技术，改进现有解决方案。',
  },
  {
    icon: '💡',
    title: '用户至上',
    description: '倾听用户反馈，快速响应需求，为用户提供最好的体验是我们的首要任务。',
  },
];

function TeamMember({ name, role, bio, avatar, github, twitter }) {
  return (
    <div className="bg-fd-card border border-fd-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
      <div className="text-6xl mb-4">{avatar}</div>
      <h3 className="text-fd-foreground font-semibold text-lg mb-1">
        {name}
      </h3>
      <div className="text-fd-primary text-sm font-medium mb-3">
        {role}
      </div>
      <p className="text-fd-muted-foreground text-sm mb-4">
        {bio}
      </p>
      <div className="flex gap-3 justify-center">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fd-muted-foreground hover:text-fd-foreground transition-colors no-underline"
          aria-label="GitHub">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fd-muted-foreground hover:text-fd-foreground transition-colors no-underline"
          aria-label="Twitter">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="bg-fd-card border border-fd-border rounded-lg p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-fd-foreground font-semibold text-lg mb-2">
        {title}
      </h3>
      <p className="text-fd-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <Layout
      title="关于我们"
      description="了解我们的团队和使命">
      {/* Hero Section */}
      <header className="bg-fd-background py-16 border-b border-fd-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-fd-foreground mb-4">
              关于我们
            </h1>
            <p className="text-xl text-fd-muted-foreground">
              我们是一群热爱技术的开发者，致力于创建高质量的开源项目和工具，
              帮助开发者社区构建更好的软件。
            </p>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-16 bg-fd-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-fd-foreground mb-4">
                  我们的使命
                </h2>
                <p className="text-fd-muted-foreground leading-7 mb-4">
                  我们相信优秀的工具能够显著提升开发效率。我们的使命是创建直观、
                  强大且易于使用的开发工具和库，让开发者能够专注于创造价值，
                  而不是被繁琐的配置和复杂的 API 所困扰。
                </p>
                <p className="text-fd-muted-foreground leading-7">
                  通过开源协作，我们希望能够汇聚全球开发者的智慧，
                  共同推动技术进步，让软件开发变得更加高效和愉悦。
                </p>
              </div>
              <div className="bg-fd-card border border-fd-border rounded-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h3 className="text-fd-foreground font-semibold mb-1">愿景</h3>
                      <p className="text-fd-muted-foreground text-sm">
                        成为开发者最信赖的工具提供商
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💪</div>
                    <div>
                      <h3 className="text-fd-foreground font-semibold mb-1">承诺</h3>
                      <p className="text-fd-muted-foreground text-sm">
                        提供高质量、可维护的开源软件
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🌍</div>
                    <div>
                      <h3 className="text-fd-foreground font-semibold mb-1">影响</h3>
                      <p className="text-fd-muted-foreground text-sm">
                        服务全球数千名开发者和企业
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-fd-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-fd-foreground mb-4 text-center">
              我们的价值观
            </h2>
            <p className="text-fd-muted-foreground text-center mb-12">
              这些核心价值观指导着我们的决策和行动
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <ValueCard key={idx} {...value} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-fd-muted border-t border-fd-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-fd-foreground mb-4 text-center">
              核心团队
            </h2>
            <p className="text-fd-muted-foreground text-center mb-12">
              认识推动项目发展的优秀成员
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, idx) => (
                <TeamMember key={idx} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-fd-background border-t border-fd-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-fd-foreground mb-12 text-center">
              数字说话
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-fd-primary mb-2">5+</div>
                <div className="text-fd-muted-foreground">年经验</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-fd-primary mb-2">20+</div>
                <div className="text-fd-muted-foreground">开源项目</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-fd-primary mb-2">10K+</div>
                <div className="text-fd-muted-foreground">GitHub Stars</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-fd-primary mb-2">100+</div>
                <div className="text-fd-muted-foreground">贡献者</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-fd-muted border-t border-fd-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-fd-foreground mb-4">
              加入我们
            </h2>
            <p className="text-lg text-fd-muted-foreground mb-8">
              我们一直在寻找有才华、有热情的开发者加入我们的团队。
              如果您对我们的项目感兴趣，欢迎联系我们！
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                className="bg-fd-primary text-fd-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors no-underline"
                to="/docs/intro">
                查看文档
              </Link>
              <a
                href="https://github.com/your-org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fd-secondary text-fd-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-accent transition-colors no-underline">
                GitHub
              </a>
              <a
                href="mailto:hello@example.com"
                className="border-2 border-fd-border text-fd-foreground px-6 py-3 rounded-lg font-medium hover:bg-fd-muted transition-colors no-underline">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
