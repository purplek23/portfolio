import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';
import TechStackVisualizer from '@/components/TechStackVisualizer';
import { TIMELINE_DATA, SKILLS_DATA, CORE_VALUES } from '@/data/portfolioData';

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* ── HERO ── */}
        <section
          id="hero"
          aria-label="Hero section"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '100px 24px 80px',
          }}
        >
          {/* Grid bg */}
          <div className="bg-grid" style={{ position: 'absolute', inset: 0 }} />

          {/* Glow orbs */}
          <div
            className="hero-orb"
            style={{
              width: '500px',
              height: '500px',
              background: 'rgba(59, 130, 246, 0.15)',
              top: '-100px',
              right: '-100px',
              animationDelay: '0s',
            }}
          />
          <div
            className="hero-orb"
            style={{
              width: '400px',
              height: '400px',
              background: 'rgba(139, 92, 246, 0.12)',
              bottom: '0px',
              left: '-80px',
              animationDelay: '3s',
            }}
          />
          <div
            className="hero-orb"
            style={{
              width: '200px',
              height: '200px',
              background: 'rgba(6, 182, 212, 0.1)',
              top: '40%',
              left: '50%',
              animationDelay: '1.5s',
            }}
          />

          <div
            style={{
              maxWidth: '860px',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Status badge */}
            <div
              className="animate-fade-in"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '100px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                marginBottom: '28px',
                fontSize: '13px',
                color: '#34d399',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
              Available for Senior Engineering Leadership Roles
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="animate-fade-in-up delay-100"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', marginBottom: '20px', lineHeight: 1.1 }}
            >
              <span style={{ color: 'var(--text-primary)' }}>Travis Kovar</span>
              <br />
              <span className="gradient-text">AI Driven Technical</span>
              <br />
              <span className="gradient-text">Leadership</span>
            </h1>

            {/* Sub-headline */}
            <p
              id="hero-tagline"
              className="animate-fade-in-up delay-200"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                color: 'var(--text-secondary)',
                maxWidth: '580px',
                margin: '0 auto 36px',
                lineHeight: 1.7,
              }}
            >
              Tech Lead with 8+ years building software that matters.
              I <strong style={{ color: 'var(--text-primary)' }}>architected and delivered a production AI agent</strong> at ALSAC and am
              passionate about AI-native development, team empowerment, and technical vision.
            </p>

            {/* CTA buttons */}
            <div
              className="animate-fade-in-up delay-300"
              style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <a href="#experience" className="btn-primary" id="cta-experience">
                <span>View My Work</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#skills" className="btn-ghost" id="cta-skills">
                <span>Explore Skills</span>
              </a>
            </div>

            {/* Stats row */}
            <div
              className="animate-fade-in-up delay-400"
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '48px',
                marginTop: '64px',
                flexWrap: 'wrap',
              }}
            >
              {[
                { value: '8+', label: 'Years Experience', id: 'stat-years' },
                { value: '8', label: 'Engineers Led', id: 'stat-team' },
                { value: '3+', label: 'Enterprise Platforms', id: 'stat-platforms' },
                { value: '2+', label: 'Years AI Experience', id: 'stat-ai' },
              ].map((stat) => (
                <div key={stat.id} id={stat.id} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: '2rem',
                      background: 'var(--gradient-hero)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", marginTop: '4px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '32px',
              right: '32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ color: 'var(--text-muted)', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace" }}>
              scroll
            </span>
            <div
              style={{
                width: '24px',
                height: '40px',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '6px',
              }}
            >
              <div
                style={{
                  width: '4px',
                  height: '8px',
                  borderRadius: '2px',
                  background: 'var(--accent-blue)',
                  animation: 'fadeInUp 1.5s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </section>

        {/* ── ABOUT / VALUES ── */}
        <section id="about" className="section" aria-label="About section">
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <div className="section-label">About Me</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '16px' }}>
              Building the future with{' '}
              <span className="gradient-text">AI at the core</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '640px', marginBottom: '56px', lineHeight: 1.8 }}>
              I&apos;m a Tech Lead who believes the next generation of software is built
              with intelligent, agentic systems. I&apos;ve spent 8+ years shipping production software and
              leading teams — and the last 2 years going all-in on AI-native development.
            </p>

            {/* Value cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {CORE_VALUES.map((val, i) => (
                <div
                  key={val.id}
                  id={val.id}
                  className="card animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `${val.color}18`,
                      border: `1px solid ${val.color}33`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      marginBottom: '16px',
                    }}
                  >
                    {val.icon}
                  </div>
                  <h3 style={{ marginBottom: '10px', fontSize: '18px', color: val.color }}>{val.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Education & Certs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px' }}>
              <div
                style={{
                  padding: '16px 24px',
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.05)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ fontSize: '24px' }}></span>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '14px' }}>
                    B.S. Computer Science
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '2px' }}>
                    Texas State University
                  </div>
                </div>
                <span className="badge" style={{ marginLeft: 'auto', background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.2)' }}>Completed</span>
              </div>

              <div
                style={{
                  padding: '16px 24px',
                  borderRadius: '12px',
                  background: 'rgba(245, 158, 11, 0.05)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ fontSize: '24px' }}></span>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '14px' }}>
                    AWS Certified Generative AI Practitioner
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '2px' }}>
                    Amazon Web Services
                  </div>
                </div>
                <span className="badge badge-orange" style={{ marginLeft: 'auto' }}>In Progress</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE / TIMELINE ── */}
        <section id="experience" className="section" aria-label="Work experience section" style={{ background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            {/* Glow */}
            <div
              className="glow-orb"
              style={{ width: '400px', height: '400px', background: 'rgba(59,130,246,0.08)', top: '0', right: '0' }}
            />

            <div className="section-label">Experience</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '12px' }}>
              Work <span className="gradient-text">History</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '56px', maxWidth: '520px' }}>
              8+ years of shipping great software — from NLP pipelines and event platforms to architecting and delivering a live production AI agent.
            </p>

            <Timeline entries={TIMELINE_DATA} />
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="section" aria-label="Skills section">
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <div className="section-label">Skills</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '12px' }}>
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '520px' }}>
              From React frontends to agentic AI systems — here&apos;s what I bring to the table.
            </p>
            <TechStackVisualizer categories={SKILLS_DATA} />
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          id="contact"
          className="section"
          aria-label="Contact section"
          style={{ background: 'var(--bg-secondary)' }}
        >
          <div
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              padding: '0 24px',
              textAlign: 'center',
            }}
          >
            <div className="section-label" style={{ justifyContent: 'center' }}>
              Get In Touch
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '16px' }}>
              Let&apos;s <span className="gradient-text">work together</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.8 }}>
              I&apos;m currently open to senior engineering leadership opportunities. If you&apos;re building something
              ambitious — especially in the AI space — I&apos;d love to connect.
            </p>

            <div
              id="contact-links"
              style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <a
                href="mailto:travis@example.com"
                id="contact-email"
                className="btn-primary"
                style={{ fontSize: '14px' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
                <span>Send an Email</span>
              </a>
              <a
                href="https://linkedin.com"
                id="contact-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com"
                id="contact-github"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}
