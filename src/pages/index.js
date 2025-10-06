import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Background from '@site/src/components/landing-page/Background';
import Lenis from '@studio-freight/lenis';
import yaml from 'js-yaml';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [lenis, setLenis] = useState(null);
  const [heroProjects, setHeroProjects] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroYamlUrl = useBaseUrl('/hero_projects.yml');
  const currentYear = new Date().getFullYear();

  // Initialize smooth scrolling
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  // Mouse position tracking for parallax effect
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

  // Load hero projects from YAML
  useEffect(() => {
    let mounted = true;
    fetch(heroYamlUrl)
      .then((res) => res.text())
      .then((text) => {
        if (!mounted) return;
        const data = yaml.load(text);
        if (Array.isArray(data)) setHeroProjects(data);
      })
      .catch(() => {
        // noop: keep default empty list on fetch errors
      });
    return () => { mounted = false; };
  }, [heroYamlUrl]);

  // Ensure deep-linking to anchors works with Lenis after YAML content mounts
  useEffect(() => {
    function scrollToHash() {
      if (typeof window === 'undefined') return;
      const { hash } = window.location;
      if (!hash || hash.length <= 1) return;
      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (!el) return;
      // schedule to ensure element layout is ready
      requestAnimationFrame(() => {
        // Find the closest project-showcase section for proper centering
        const section = el.closest('section.project-showcase');
        if (!section) {
          // fallback to element itself
          if (lenis && typeof lenis.scrollTo === 'function') {
            lenis.scrollTo(el, { immediate: true });
          } else {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          return;
        }

        // Calculate centered scroll position accounting for nav height and viewport
        const rect = section.getBoundingClientRect();
        const pageY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const viewportH = window.innerHeight || document.documentElement.clientHeight || 0;
        const navHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--fd-nav-height')) || 0;
        
        // Center the section in viewport, accounting for nav offset
        let targetY = pageY + rect.top - navHeight - (viewportH - navHeight) / 2;
        const maxY = Math.max(0, (document.documentElement.scrollHeight - viewportH));
        targetY = Math.max(0, Math.min(targetY, maxY));

        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(targetY, { immediate: true });
        } else {
          window.scrollTo({ top: targetY, left: 0, behavior: 'smooth' });
        }
      });
    }

    // initial hash scroll once projects are rendered
    if (heroProjects && heroProjects.length > 0) {
      scrollToHash();
    }

    // respond to subsequent hash changes
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [heroProjects, lenis]);

  return (
    <Layout
      title={siteConfig.title}
      description="天空之镜 HevSpecu - 提供GitHub加速镜像、DockerHub加速镜像、高速图床服务Gastigado、智能图片管理工具Aiamgine、时序同笺课表管理等优质服务，为开发者提供高效便捷的技术解决方案。">

      {/* 3D Background */}
      <Background />

      {/* Content Layers */}
      <div className="hev-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div 
            className="hero-content"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <h1 className="hero-title">
            天空之镜
            </h1>
            <p className="hero-subtitle">
              HevSpecu
            </p>
            <div className="cta-buttons">
              <Link
                className="cta-button cta-button-primary breathing-button"
                to="#projects">
                探索项目
              </Link>
              <Link
                className="cta-button cta-button-secondary breathing-button"
                to="/docs/intro">
                查看文档
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section (YAML-driven) */}
        {heroProjects.map((p, idx) => (
          <section key={p.id || idx} id={idx === 0 ? 'projects' : undefined} className="project-showcase">
            {/* Per-project anchor to support #<id> links while preserving #projects on the first section */}
            {p?.id && (
              <span id={p.id} style={{ display: 'block', height: 0, overflow: 'hidden', scrollMarginTop: 'var(--fd-nav-height)' }} aria-hidden="true"></span>
            )}
            <div 
              className="project-card interactive-card"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #00A9FF, #003366)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {p.title}
                </h2>
                {p.subtitle && (
                  <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                    {p.subtitle}
                  </p>
                )}
                {p.description && (
                  <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
                    {p.description}
                  </p>
                )}
                {p.link && (
                  <Link
                    className="cta-button cta-button-primary breathing-button"
                    to={p.link}>
                    {p.linkLabel || '了解更多'}
                  </Link>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Footer Section */}
        <section className="project-showcase">
          <div className="project-card interactive-card" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="card-glow"></div>
            <div className="card-content">
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem', background: 'linear-gradient(135deg, #00A9FF, white)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                关于我们
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                在天空之镜，我们相信技术与艺术的完美融合
              </p>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  className="cta-button cta-button-secondary breathing-button"
                  to="https://github.com/hevspecu"
                  target="_blank">
                  GitHub
                </Link>
                <Link
                  className="cta-button cta-button-secondary breathing-button"
                  to="/about">
                  联系我们
                </Link>
              </div>
              <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                © {currentYear} <a href="https://hevspecu.hxc.space" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>HevSpecu(天空之镜)</a>. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Smooth scroll hint for mobile */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'none'
      }} className="scroll-indicator">
        <div style={{
          width: '30px',
          height: '50px',
          border: '2px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '15px',
          position: 'relative'
        }}>
          <div style={{
            width: '4px',
            height: '10px',
            background: 'white',
            borderRadius: '2px',
            position: 'absolute',
            top: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'scroll 2s infinite'
          }}></div>
        </div>
      </div>

      <style>{`
        /* Breathing button effect */
        .breathing-button {
          animation: breathe 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .breathing-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 0 30px rgba(0, 191, 255, 0.8),
            0 0 60px rgba(0, 246, 255, 0.5);
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

        /* Interactive card effects */
        .interactive-card {
          position: relative;
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .interactive-card::before {
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
          z-index: 1;
        }

        .interactive-card:hover::before {
          left: 100%;
        }

        .interactive-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 10px 40px rgba(0, 191, 255, 0.3),
            0 0 60px rgba(0, 246, 255, 0.2);
          border-color: rgba(0, 191, 255, 0.6);
        }

        .card-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(0, 191, 255, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          transition: all 0.4s ease;
          pointer-events: none;
          z-index: 0;
        }

        .interactive-card:hover .card-glow {
          width: 400px;
          height: 400px;
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        @keyframes scroll {
          0% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateY(20px);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .scroll-indicator {
            display: block !important;
          }
        }
      `}</style>
    </Layout>
  );
}