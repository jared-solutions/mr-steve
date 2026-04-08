import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Calendar } from 'lucide-react';

const stats = [
  { icon: Calendar, label: 'Years Experience', value: '7+' },
  { icon: Users, label: 'Students Taught', value: '2000+' },
  { icon: BookOpen, label: 'Subjects Taught', value: '6' },
  { icon: Award, label: 'Achievements', value: '2+' },
];

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--surface)', padding: '8rem 0' }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow)',
            }}>
              <img 
                src="/profile.jpg" 
                alt="Ombongi Mogonchi Steve"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div style=\'padding:4rem;background:var(--background);display:flex;align-items:center;justify-content:center;font-size:8rem;color:var(--primary);font-family:Playfair Display\'>O</div>';
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{
              fontSize: '1.75rem',
              color: 'var(--primary)',
              marginBottom: '1.5rem',
            }}>
              Passionate Educator Transforming Young Minds Through Holistic Teaching
            </h3>

            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              fontSize: '1.125rem',
            }}>
              I am a dedicated teacher with over 7 years of experience in shaping young minds 
              and fostering academic excellence. My journey in education has been driven by a deep 
              commitment to holistic development and creating engaging learning environments.
            </p>

            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              fontSize: '1.125rem',
            }}>
              I design CBC-aligned lessons and school leadership strategies that support Kenya's 
              Competency-Based Curriculum and build learner confidence in classrooms across the country.
            </p>

            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              fontSize: '1.125rem',
            }}>
              Currently serving as Head of Academics at Green River Learning Centre, I bring a 
              wealth of knowledge from my previous roles as Senior Teacher at Marani Shine School 
              and Teacher at Linet Academy School. My teaching philosophy centers on nurturing talent, 
              building strong teams, and making a lasting positive impact on students.
            </p>

            <div className="stats-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              marginTop: '2rem',
            }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  style={{
                    background: 'var(--background)',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    textAlign: 'center',
                  }}
                >
                  <stat.icon size={32} color="var(--secondary)" style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}