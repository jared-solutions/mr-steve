import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={{ background: 'var(--primary)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: 'white' }}
        >
          Get In Touch
        </motion.h2>

        <p style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.8)',
          maxWidth: '600px',
          margin: '0 auto 3rem',
          fontSize: '1.125rem',
        }}>
          Have a question or want to connect? Feel free to reach out.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '2rem' }}>
              Contact Information
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '1.5rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Phone size={24} color="white" />
                </div>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>Phone</p>
                  <p style={{ color: 'white', fontWeight: 600 }}>0746928424</p>
                </div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '1.5rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Mail size={24} color="white" />
                </div>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>Email</p>
                  <p style={{ color: 'white', fontWeight: 600 }}>ombongisteve50@gmail.com</p>
                </div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '1.5rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  border: '2px solid white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <MapPin size={24} color="white" />
                </div>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>Location</p>
                  <p style={{ color: 'white', fontWeight: 600 }}>Kasarani, Nairobi</p>
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '10px',
            }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                References
              </p>
              <p style={{ color: 'white', fontWeight: 600 }}>Elphas Ontita</p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Principal, Drumvale Secondary School - 0748484220</p>
              <p style={{ color: 'white', fontWeight: 600, marginTop: '0.5rem' }}>Ezekiel Manundu</p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Principal, Asumbi Teachers College - 0722467565</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} style={{
              background: 'var(--surface)',
              padding: '2rem',
              borderRadius: '15px',
            }}>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                Send a Message
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid var(--background)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'var(--transition)',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid var(--background)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'var(--transition)',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid var(--background)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    transition: 'var(--transition)',
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}