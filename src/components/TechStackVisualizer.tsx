'use client';

import { useEffect, useRef, useState } from 'react';

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  accentColor: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 0–100
  yearsLabel: string;
}

interface TechStackVisualizerProps {
  categories: SkillCategory[];
}

export default function TechStackVisualizer({ categories }: TechStackVisualizerProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id ?? '');
  const [animated, setAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Reset animation when category changes
  useEffect(() => {
    setAnimated(false);
    const t = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(t);
  }, [activeCategory]);


  return (
    <div ref={containerRef} id="tech-stack-visualizer">
      {/* Category tabs */}
      <div
        id="skill-category-tabs"
        role="tablist"
        aria-label="Skill categories"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '32px',
        }}
      >
        {categories.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              id={`tab-${cat.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                border: `1px solid ${isActive ? cat.accentColor : 'var(--border)'}`,
                background: isActive ? `${cat.accentColor}18` : 'var(--bg-card)',
                color: isActive ? cat.accentColor : 'var(--text-secondary)',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Skills panel */}
      <div id="skills-panels-container">
        {categories.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <div
              key={cat.id}
              id={`panel-${cat.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${cat.id}`}
              className="card skill-panel"
              style={{
                display: isActive ? 'grid' : 'none',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {/* Category Header (Only visible in print) */}
              <h3 className="print-only-category-header" style={{ display: 'none' }}>{cat.label}</h3>
              {cat.skills?.map((skill, i) => (
                <div key={skill.name} id={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                  {/* Label row */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {skill.yearsLabel}
                    </span>
                  </div>

                  {/* Bar background */}
                  <div
                    className="skill-bar-bg"
                    style={{
                      height: '4px',
                      borderRadius: '2px',
                      background: 'var(--border)',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className="skill-bar-fill"
                      style={{
                        height: '100%',
                        width: animated && isActive ? `${skill.level}%` : '0%',
                        background: `linear-gradient(90deg, ${cat.accentColor}, ${cat.accentColor}99)`,
                        transitionDelay: `${i * 0.05}s`,
                      }}
                    />
                  </div>

                  {/* Level dots */}
                  <div className="skill-level-dots" style={{ display: 'flex', gap: '4px', marginTop: '6px' }}>
                    {[20, 40, 60, 80, 100].map((threshold) => (
                      <div
                        key={threshold}
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: skill.level >= threshold ? cat.accentColor : 'var(--border)',
                          transition: 'background 0.3s ease',
                          transitionDelay: `${0.3 + threshold / 100}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
