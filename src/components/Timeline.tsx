'use client';

import { useEffect, useRef } from 'react';

export interface TimelineEntry {
  id: string;
  title: string;
  company: string;
  companyType: string;
  duration: string;
  dateRange: string;
  achievements: string[];
  technologies: string[];
  accentColor: string;
  icon: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
}

const BADGE_COLORS = ['badge-blue', 'badge-purple', 'badge-cyan', 'badge-green', 'badge-orange'];

export default function Timeline({ entries }: TimelineProps) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (observations) => {
        observations.forEach((obs) => {
          if (obs.isIntersecting) {
            (obs.target as HTMLElement).style.opacity = '1';
            (obs.target as HTMLElement).style.transform = 'translateX(0)';
          }
        });
      },
      { threshold: 0.15 },
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="timeline" style={{ position: 'relative', paddingLeft: '48px' }}>
      {/* Vertical line */}
      <div className="timeline-line" />

      {entries.map((entry, i) => (
        <div
          key={entry.id}
          id={`timeline-item-${entry.id}`}
          ref={(el) => { itemRefs.current[i] = el; }}
          className="timeline-item"
          style={{
            position: 'relative',
            marginBottom: i < entries.length - 1 ? '48px' : 0,
            opacity: 0,
            transform: 'translateX(-16px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            transitionDelay: `${i * 0.1}s`,
          }}
        >
          {/* Dot */}
          <div
            className="timeline-dot"
            style={{
              top: '28px',
              borderColor: entry.accentColor,
              boxShadow: `0 0 12px ${entry.accentColor}66`,
            }}
          />

          {/* Card */}
          <div className="card" style={{ cursor: 'default' }}>
            {/* Header row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '16px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '22px' }}>{entry.icon}</span>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '18px',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {entry.title}
                  </h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: entry.accentColor, fontWeight: 600, fontSize: '14px' }}>
                    {entry.company}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>·</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{entry.companyType}</span>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    marginBottom: '4px',
                  }}
                >
                  {entry.dateRange}
                </div>
                <span className="badge badge-blue" style={{ borderColor: entry.accentColor, color: entry.accentColor, background: `${entry.accentColor}18` }}>
                  {entry.duration}
                </span>
              </div>
            </div>

            {/* Achievements */}
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {entry.achievements.map((ach, j) => (
                <li
                  key={j}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                  }}
                >
                  <span style={{ color: entry.accentColor, marginTop: '2px', flexShrink: 0 }}>▸</span>
                  <span dangerouslySetInnerHTML={{ __html: ach }} />
                </li>
              ))}
            </ul>

            {/* Tech badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {entry.technologies.map((tech, j) => (
                <span
                  key={tech}
                  className={`badge ${BADGE_COLORS[j % BADGE_COLORS.length]}`}
                  id={`badge-${entry.id}-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
