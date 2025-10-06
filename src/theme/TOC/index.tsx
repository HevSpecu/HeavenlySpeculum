import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import './styles.css';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface PathPoint {
  x: number;
  y: number;
  level: number;
  id: string;
}

function useActiveHeadingObserver(headingIds: string[]): string[] {
  const [activeAnchors, setActiveAnchors] = useState<string[]>([]);

  useEffect(() => {
    let visible: string[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !visible.includes(entry.target.id)) {
            visible = [...visible, entry.target.id];
          } else if (!entry.isIntersecting && visible.includes(entry.target.id)) {
            visible = visible.filter((v) => v !== entry.target.id);
          }
        }

        if (visible.length > 0) {
          setActiveAnchors(visible);
        }
      },
      {
        rootMargin: '-80px 0% -70% 0%',
        threshold: 1,
      }
    );

    const onScroll = () => {
      const element = document.scrollingElement;
      if (!element) return;
      const top = element.scrollTop;

      if (top <= 0) {
        setActiveAnchors(headingIds.slice(0, 1));
      } else if (top + element.clientHeight >= element.scrollHeight - 6) {
        setActiveAnchors(headingIds.slice(-1));
      }
    };

    for (const heading of headingIds) {
      const element = document.getElementById(heading);
      if (element) observer.observe(element);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [headingIds]);

  return activeAnchors.slice(0, 1);
}

// 生成 SVG path 的 d 属性
function generatePathD(points: PathPoint[]): string {
  if (points.length === 0) return '';
  
  let d = `M ${points[0].x} ${points[0].y}`;
  
  for (let i = 1; i < points.length; i++) {
    const curr = points[i];
    const prev = points[i - 1];
    
    // 如果层级不同，使用斜线连接（对角线）
    // 如果层级相同，使用垂直线
    if (curr.level !== prev.level) {
      // 斜角过渡
      d += ` L ${curr.x} ${curr.y}`;
    } else {
      // 垂直线
      d += ` L ${curr.x} ${curr.y}`;
    }
  }
  
  return d;
}

function SVGTrack({ 
  containerRef,
  toc,
  activeId
}: { 
  containerRef: React.RefObject<HTMLDivElement>;
  toc: TOCItem[];
  activeId: string | undefined;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const activePathRef = useRef<SVGPathElement>(null);
  const [points, setPoints] = useState<PathPoint[]>([]);
  const [pathD, setPathD] = useState('');
  const [svgHeight, setSvgHeight] = useState(0);

  // 测量所有链接的位置并生成路径点
  const measurePoints = useCallback(() => {
    if (!containerRef.current) return;

    const newPoints: PathPoint[] = [];
    const links = containerRef.current.querySelectorAll<HTMLAnchorElement>('a[data-level]');
    
    links.forEach((link) => {
      const level = parseInt(link.getAttribute('data-level') || '2');
      const id = link.getAttribute('href')?.substring(1) || '';
      
      // 计算链接的中心点
      const rect = link.getBoundingClientRect();
      const containerRect = containerRef.current!.getBoundingClientRect();
      
      const y = link.offsetTop + (rect.height / 2);
      // SVG 路径的 x 坐标：h2 在 4px，h3 在 20px（缩进 16px）
      const x = level === 2 ? 4 : 20;
      
      newPoints.push({ x, y, level, id });
    });

    setPoints(newPoints);
    
    if (newPoints.length > 0) {
      const d = generatePathD(newPoints);
      setPathD(d);
      
      // 设置 SVG 高度为最后一个点的 y 坐标 + 一些余量
      const maxY = Math.max(...newPoints.map(p => p.y));
      setSvgHeight(maxY + 50);
    }
  }, [containerRef, toc]);

  // 初始测量和响应式更新
  useEffect(() => {
    measurePoints();
    
    const resizeObserver = new ResizeObserver(measurePoints);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => {
      resizeObserver.disconnect();
    };
  }, [measurePoints]);

  // 更新激活指示器
  useEffect(() => {
    if (!activePathRef.current || !pathD || !activeId || points.length === 0) {
      if (activePathRef.current) {
        activePathRef.current.style.strokeDasharray = '0 0';
        activePathRef.current.style.opacity = '0';
      }
      return;
    }

    // 使用 path 元素本身的 getTotalLength 方法
    const totalLength = activePathRef.current.getTotalLength();
    
    const activeIndex = points.findIndex(p => p.id === activeId);
    if (activeIndex === -1) {
      activePathRef.current.style.strokeDasharray = '0 0';
      activePathRef.current.style.opacity = '0';
      return;
    }
    
    // 计算从起点到激活点的路径长度
    let lengthToActive = 0;
    for (let i = 1; i <= activeIndex; i++) {
      const curr = points[i];
      const prev = points[i - 1];
      const dx = curr.x - prev.x;
      const dy = curr.y - prev.y;
      lengthToActive += Math.sqrt(dx * dx + dy * dy);
    }
    
    // 获取当前激活链接的高度，用于指示器的长度
    const activeLink = containerRef.current?.querySelector<HTMLAnchorElement>(
      `a[href="#${activeId}"]`
    );
    const indicatorLength = activeLink ? activeLink.getBoundingClientRect().height : 20;
    
    // 设置 stroke-dasharray：显示从起点到激活点的路径，加上指示器的长度
    activePathRef.current.style.opacity = '1';
    activePathRef.current.style.strokeDasharray = `${lengthToActive + indicatorLength} ${totalLength}`;
    activePathRef.current.style.strokeDashoffset = '0';
    
  }, [activeId, pathD, points, containerRef]);

  if (!pathD) return null;

  return (
    <svg
      ref={svgRef}
      className="toc-svg-track"
      width="30"
      height={svgHeight}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        overflow: 'visible'
      }}
    >
      {/* 背景轨道 - 灰色 */}
      <path
        d={pathD}
        stroke="var(--ifm-color-emphasis-300)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* 激活轨道 - 主题色 */}
      <path
        ref={activePathRef}
        d={pathD}
        stroke="var(--ifm-color-primary)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="toc-active-path"
      />
    </svg>
  );
}

export default function TOC(): React.ReactElement | null {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    // Find all h2 and h3 headings in the article
    const article = document.querySelector('article');
    if (!article) return;

    const headings = article.querySelectorAll('h2, h3');
    const items: TOCItem[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      title: heading.textContent || '',
      level: parseInt(heading.tagName.substring(1)),
    }));

    setToc(items);
  }, []);

  const headingIds = useMemo(() => toc.map(item => item.id), [toc]);
  const activeAnchors = useActiveHeadingObserver(headingIds);
  const activeId = activeAnchors[0];

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  }, []);

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="toc-wrapper">
      <h3 className="toc-title">目录</h3>
      <div className="toc-container">
        <SVGTrack 
          containerRef={containerRef} 
          toc={toc}
          activeId={activeId}
        />
        <nav ref={containerRef} className="toc-nav">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              data-level={item.level}
              className={`toc-link toc-link-h${item.level} ${
                activeId === item.id ? 'toc-link-active' : ''
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

