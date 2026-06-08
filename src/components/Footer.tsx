export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="footer"
      role="contentinfo"
      style={{
        borderTop: '1px solid var(--border)',
        padding: '40px 24px',
        textAlign: 'center',
        background: 'var(--bg-secondary)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '12px',
              color: 'white',
            }}
          >
            TK
          </span>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              color: 'var(--text-primary)',
            }}
          >
            Travis Kovar
          </span>
        </div>

        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '13px',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          &copy; {year} Travis Kovar · Built with Next.js &amp; Tailwind CSS
        </p>

        <div
          id="footer-links"
          style={{ display: 'flex', gap: '24px' }}
        >
          {(['GitHub', 'Email'] as const).map((label) => (
            <a
              key={label}
              href="#contact"
              id={`footer-${label.toLowerCase()}`}
              className="nav-link"
              style={{ fontSize: '13px' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
