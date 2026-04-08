import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--primary)',
      color: 'white',
      padding: '3rem 0 1.5rem',
    }}>
      <div className="container">
        <div className="footer-top" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Contact
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              0746928424
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { label: 'FB', color: '#1877F2', href: 'https://www.facebook.com' },
              { label: 'X', color: '#000000', href: 'https://www.x.com' },
              { label: 'IG', color: '#E4405F', href: 'https://www.instagram.com' },
              { label: 'LI', color: '#0077B5', href: 'https://www.linkedin.com' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: social.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom" style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
            © 2026 Mr Steve. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--secondary)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition)',
            }}
          >
            <ArrowUp size={20} color="white" />
          </button>
        </div>
      </div>
    </footer>
  );
}