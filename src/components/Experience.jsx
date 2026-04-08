import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Head Of Academics',
    institution: 'Green River Learning Centre',
    period: 'Jan 2024 - Present',
    description: 'Leading academic programs and teaching Mathematics, English, Kiswahili, Pre-technical studies, Creative Arts, and Sports. Overseeing curriculum implementation and academic excellence.',
    achievements: [
      'Improved overall academic performance',
      'Implemented modern teaching methodologies',
      'Enhanced student learning outcomes',
      'Coordinated cross-curricular activities',
    ],
    isCurrent: true,
  },
  {
    id: 2,
    role: 'Senior Teacher',
    institution: 'Marani Shine School',
    period: 'Jan 2021 - Jan 2023',
    description: 'Served as Senior Teacher teaching Mathematics, English, Kiswahili, Science, Creative Arts, and Sports. Mentored junior teachers and developed curriculum materials.',
    achievements: [
      'Developed innovative teaching strategies',
      'Increased student engagement by 30%',
      'Led teacher training sessions',
      'Enhanced institutional academic standards',
    ],
    isCurrent: false,
  },
  {
    id: 3,
    role: 'Teacher',
    institution: 'Linet Academy School',
    period: 'Sep 2017 - Nov 2019',
    description: 'Taught Mathematics, English, Kiswahili, Science, Creative Arts, and Sports to elementary students. Developed lesson plans and interactive learning materials.',
    achievements: [
      'Created engaging lesson materials',
      'Improved student comprehension',
      'Organized academic competitions',
      'Collaborated with colleagues on projects',
    ],
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--background)', padding: '8rem 0' }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <div style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '100%',
            background: 'var(--primary)',
            borderRadius: '2px',
          }}></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                paddingBottom: '5rem',
              }}
            >
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '20px',
                height: '20px',
                background: exp.isCurrent ? 'var(--secondary)' : 'var(--primary)',
                borderRadius: '50%',
                border: '4px solid var(--background)',
                zIndex: 1,
              }}></div>

              <div style={{
                width: 'calc(60% - 40px)',
                background: 'var(--surface)',
                borderRadius: '15px',
                padding: '2rem',
                boxShadow: 'var(--shadow)',
                borderLeft: exp.isCurrent ? '4px solid var(--secondary)' : '4px solid var(--primary)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--secondary)',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                }}>
                  <Briefcase size={20} />
                  {exp.isCurrent && (
                    <span style={{
                      background: 'var(--secondary)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                    }}>
                      Current
                    </span>
                  )}
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  color: 'var(--primary)',
                  marginBottom: '0.5rem',
                }}>
                  {exp.role}
                </h3>

                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                }}>
                  {exp.institution}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  marginBottom: '1rem',
                }}>
                  <Calendar size={16} />
                  {exp.period}
                </div>

                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem',
                  lineHeight: 1.7,
                }}>
                  {exp.description}
                </p>

                <div>
                  <h4 style={{
                    fontSize: '1rem',
                    color: 'var(--primary)',
                    marginBottom: '0.75rem',
                  }}>
                    Key Achievements:
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                  }}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                        color: 'var(--text-secondary)',
                      }}>
                        <span style={{ color: 'var(--accent)', marginTop: '4px' }}>★</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience > div > div > div:first-child {
            display: none !important;
          }
          #experience > div > div > div:not(:first-child) {
            width: 100% !important;
            margin-left: 20px !important;
            justify-content: flex-start !important;
          }
          #experience > div > div > div:not(:first-child) > div:first-child {
            left: 0 !important;
            transform: translateX(-50%) !important;
          }
        }
      `}</style>
    </section>
  );
}