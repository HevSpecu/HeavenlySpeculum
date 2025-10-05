import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

// 浮动粒子组件
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

// 镜面几何体组件
function MirrorGeometry() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
      <div className="mirror-hexagon">
        <div className="hexagon-inner"></div>
      </div>
    </div>
  );
}

// 服务卡片组件
function ServiceCard({ title, subtitle, description, icon, link, delay = 0 }) {
  return (
    <div 
      className="service-card group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="service-card-glow"></div>
      <div className="service-card-content">
        <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#00BFFF] transition-colors">
          {title}
        </h3>
        {subtitle && (
          <div className="text-sm text-[#00F6FF] mb-3 font-medium">
            {subtitle}
          </div>
        )}
        <p className="text-gray-300 leading-relaxed mb-4">
          {description}
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#00BFFF] hover:text-[#00F6FF] transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
          >
            访问项目 →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      title: 'Aiamgine',
      subtitle: 'AI 图像处理引擎',
      description: '基于先进神经网络的智能图像处理平台，提供强大的图像识别、增强和生成能力。',
      icon: '🧠',
      link: 'https://github.com/HevSpecu/Aiamgine',
    },
    {
      title: '时序同笺',
      subtitle: 'SDNUChronoSync',
      description: '智能课程表同步系统，为山东师范大学学生提供自动化的日历集成服务。',
      icon: '📅',
      link: 'https://github.com/HevSpecu/SDNUChronoSync',
    },
    {
      title: 'GitHub 加速镜像',
      subtitle: 'Git Mirror Acceleration',
      description: '高速稳定的 GitHub 镜像服务，为开发者提供极速的代码克隆和下载体验。',
      icon: '🐙',
      link: 'https://github.com/HevSpecu',
    },
    {
      title: 'DockerHub 加速镜像',
      subtitle: 'Container Registry Mirror',
      description: '企业级 Docker 镜像加速服务，大幅提升容器镜像的拉取速度和稳定性。',
      icon: '🐳',
      link: 'https://github.com/HevSpecu',
    },
    {
      title: 'Gastigado Fast Image',
      subtitle: '闪电图像服务',
      description: '超高速图像 CDN 服务，全球分发网络确保您的图像以毫秒级速度加载。',
      icon: '⚡',
      link: 'https://github.com/HevSpecu',
    },
  ];

  return (
    <Layout
      title="天空之镜 - HevSpecu"
      description="映照科技未来，连接创新世界。为开发者提供极速、稳定、可靠的镜像加速服务。"
      wrapperClassName="heavenly-speculum-wrapper"
    >
      <style jsx>{`
        /* 隐藏 Docusaurus 默认导航和页脚 */
        :global(.heavenly-speculum-wrapper .navbar) {
          display: none !important;
        }
        
        :global(.heavenly-speculum-wrapper footer) {
          display: none !important;
        }

        /* 自定义 CSS 样式 */
        .hero-container {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0A192F 0%, #101E3C 50%, #0A192F 100%);
          overflow: hidden;
        }

        /* 动态背景 */
        .hero-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(0, 191, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(0, 246, 255, 0.08) 0%, transparent 50%);
          animation: rotate 30s linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* 粒子效果 */
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(0, 246, 255, 0.6);
          border-radius: 50%;
          animation: float linear infinite;
          box-shadow: 0 0 10px rgba(0, 246, 255, 0.5);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        /* 镜面六边形 */
        .mirror-hexagon {
          width: 400px;
          height: 400px;
          position: relative;
          animation: pulse 4s ease-in-out infinite;
        }

        .hexagon-inner {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(0, 191, 255, 0.1) 0%, 
            rgba(0, 246, 255, 0.05) 50%,
            rgba(0, 191, 255, 0.1) 100%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          border: 2px solid rgba(0, 246, 255, 0.3);
          box-shadow: 
            0 0 50px rgba(0, 191, 255, 0.3),
            inset 0 0 50px rgba(0, 246, 255, 0.1);
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        /* 霓虹文字效果 */
        .neon-text {
          text-shadow: 
            0 0 10px rgba(0, 191, 255, 0.8),
            0 0 20px rgba(0, 191, 255, 0.6),
            0 0 30px rgba(0, 191, 255, 0.4),
            0 0 40px rgba(0, 191, 255, 0.2);
          animation: neonPulse 2s ease-in-out infinite;
        }

        @keyframes neonPulse {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(0, 191, 255, 0.8),
              0 0 20px rgba(0, 191, 255, 0.6),
              0 0 30px rgba(0, 191, 255, 0.4);
          }
          50% {
            text-shadow: 
              0 0 15px rgba(0, 191, 255, 1),
              0 0 30px rgba(0, 191, 255, 0.8),
              0 0 45px rgba(0, 191, 255, 0.6);
          }
        }

        /* CTA 按钮 */
        .cta-button {
          background: linear-gradient(135deg, #00BFFF 0%, #00F6FF 100%);
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          color: #0A192F;
          box-shadow: 
            0 0 20px rgba(0, 191, 255, 0.5),
            0 0 40px rgba(0, 246, 255, 0.3);
          animation: breathe 3s ease-in-out infinite;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }

        .cta-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 
            0 0 30px rgba(0, 191, 255, 0.8),
            0 0 60px rgba(0, 246, 255, 0.5);
          color: #0A192F;
          text-decoration: none;
        }

        @keyframes breathe {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(0, 191, 255, 0.5),
              0 0 40px rgba(0, 246, 255, 0.3);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(0, 191, 255, 0.7),
              0 0 60px rgba(0, 246, 255, 0.5);
          }
        }

        /* 服务卡片 */
        .service-card {
          position: relative;
          background: rgba(16, 30, 60, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 246, 255, 0.2);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.4s ease;
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
          overflow: hidden;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(30px);
          }
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(0, 246, 255, 0.1), 
            transparent);
          transition: left 0.5s;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          border-color: rgba(0, 191, 255, 0.6);
          transform: translateY(-8px);
          box-shadow: 
            0 10px 40px rgba(0, 191, 255, 0.3),
            0 0 60px rgba(0, 246, 255, 0.2);
        }

        .service-card-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(0, 191, 255, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          transition: all 0.4s ease;
        }

        .service-card:hover .service-card-glow {
          width: 300px;
          height: 300px;
        }

        .service-card-content {
          position: relative;
          z-index: 1;
        }

        /* 导航栏样式 */
        .hero-nav {
          background: rgba(10, 25, 47, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 246, 255, 0.1);
        }

        .hero-nav a {
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
        }

        .hero-nav a:hover {
          color: #00BFFF;
          text-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
        }

        /* 数据流效果 */
        .data-stream {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(90deg, transparent 95%, rgba(0, 246, 255, 0.1) 100%),
            linear-gradient(0deg, transparent 95%, rgba(0, 246, 255, 0.1) 100%);
          background-size: 50px 50px;
          animation: dataFlow 20s linear infinite;
          opacity: 0.3;
        }

        @keyframes dataFlow {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>

      <div className="hero-container">
        {/* 数据流背景 */}
        <div className="data-stream"></div>
        
        {/* 浮动粒子 */}
        <FloatingParticles />
        
        {/* 镜面几何体 */}
        <MirrorGeometry />

        {/* 导航栏 */}
        <nav className="hero-nav fixed top-0 left-0 right-0 z-50 px-6 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-6">
                <Link to="/docs/intro" className="no-underline">文档</Link>
                <Link to="/projects" className="no-underline">项目</Link>
                <a href="#services" className="no-underline">服务</a>
                <Link to="/blog" className="no-underline">博客</Link>
                <Link to="/about" className="no-underline">关于</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero 主内容区 */}
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
          <div 
            className="text-center px-4"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {/* 主标题 */}
            <h1 className="text-7xl md:text-8xl font-bold mb-6 neon-text text-white">
              天空之镜
            </h1>
            <div className="text-3xl md:text-4xl font-light mb-4 text-[#00F6FF]">
              HevSpecu
            </div>
            
            {/* 标语 */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              映照科技未来 · 连接创新世界
              <br />
              <span className="text-[#00BFFF] font-medium">为开发者提供极速、稳定、可靠的镜像加速服务</span>
            </p>

            {/* CTA 按钮 */}
            <div className="flex gap-6 justify-center flex-wrap">
              <a href="#services" className="cta-button">
                探索我们的服务
              </a>
              <Link 
                to="/docs/intro"
                className="px-8 py-4 border-2 border-[#00BFFF] text-white rounded-full font-semibold hover:bg-[#00BFFF] hover:bg-opacity-20 transition-all no-underline"
              >
                查看文档
              </Link>
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00BFFF] mb-2">5+</div>
                <div className="text-gray-400 text-sm">核心服务</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00BFFF] mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">服务可用性</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00BFFF] mb-2">24/7</div>
                <div className="text-gray-400 text-sm">全天候运行</div>
              </div>
            </div>
          </div>
        </div>

        {/* 向下滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#00BFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* 服务展示区 */}
      <section id="services" className="py-20 bg-[#0A192F] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              核心服务
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              为开发者和企业提供全方位的技术加速与智能服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0A192F] to-[#101E3C] border-t border-[#00BFFF] border-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好加速您的开发了吗？
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            加入数千名开发者，体验极速、稳定的镜像加速服务
          </p>
          <Link to="/docs/intro" className="cta-button">
            立即开始
          </Link>
        </div>
      </section>
    </Layout>
  );
}