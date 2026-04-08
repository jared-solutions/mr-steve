import { ArrowUp, Share2, Music, Mail, Phone } from 'lucide-react';

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
              { Icon: Share2, title: 'Facebook', color: '#1877F2', href: 'https://www.facebook.com' },
              { Icon: Music, title: 'TikTok', color: '#000000', href: 'https://www.tiktok.com' },
              { Icon: Mail, title: 'Email', color: '#EA4335', href: 'mailto:contact@example.com' },
              { Icon: Phone, title: 'Call', color: '#34A853', href: 'tel:0746928424' },
            ].map((social) => (
              <a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.title}
                title={social.title}
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
                }}
              >
                <social.Icon size={20} />
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