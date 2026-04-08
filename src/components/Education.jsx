import { motion } from 'framer-motion';
import { BookOpen, Calendar } from 'lucide-react';

const educationItems = [
  {
    id: 1,
    institution: 'Asumbi Teachers College',
    period: 'Sep 2015 – Jul 2017',
    qualification: 'Primary Teacher Education (Credit)',
  },
  {
    id: 2,
    institution: 'Drumvale Secondary School',
    period: 'Jan 2011 – Nov 2014',
    qualification: 'Kenya Certificate of Secondary Education (C Plain)',
  },
  {
    id: 3,
    institution: 'Nyakoni Junior Academy',
    period: 'Jan 2003 – Nov 2010',
    qualification: 'Kenya Certificate of Primary Education (301 Marks)',
  },
];

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--background)', padding: '8rem 0' }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}>
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                background: 'var(--surface)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: 'var(--shadow)',
                border: '1px solid rgba(26, 54, 93, 0.08)',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
                color: 'var(--secondary)',
              }}>
                <BookOpen size={24} />
                <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--primary)' }}>
                  {item.institution}
                </h3>
              </div>

              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
                fontSize: '1rem',
              }}>
                {item.qualification}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-primary)',
                fontWeight: 600,
              }}>
                <Calendar size={16} />
                <span>{item.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #education > div {
            padding: 0;
          }
          #education > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          #education > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
