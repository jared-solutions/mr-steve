import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Target, BookOpen } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Holistic Development',
    description: 'Developing learners intellectually, emotionally, socially, and physically—not just academically.',
  },
  {
    icon: Lightbulb,
    title: 'Effective Learning',
    description: 'Ensuring students understand concepts clearly by using appropriate teaching methods, materials, and strategies.',
  },
  {
    icon: Users,
    title: 'Values and Ethics',
    description: 'Guiding learners to develop good character, discipline, responsibility, and respect for others.',
  },
  {
    icon: Target,
    title: 'Critical Thinking & Creativity',
    description: 'Helping students analyze, question, and solve problems independently while nurturing innovation.',
  },
  {
    icon: BookOpen,
    title: 'Individual Learner Needs',
    description: 'Recognizing that students are different and adapting teaching to suit diverse abilities, backgrounds, and learning styles.',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" style={{ background: 'var(--surface)', padding: '8rem 0' }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Teaching Philosophy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            color: 'var(--text-secondary)',
            fontSize: '1.125rem',
          }}
        >
          My teaching philosophy is built on the belief that every student has the potential 
          to excel. I strive to create an environment where holistic development is nurtured, 
          excellence is expected, supported, and celebrated.
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              style={{
                background: 'var(--background)',
                padding: '2rem',
                borderRadius: '15px',
                textAlign: 'center',
                transition: 'var(--transition)',
                cursor: 'default',
              }}
              whileHover={{ y: -10, boxShadow: 'var(--shadow)' }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}>
                <value.icon size={32} color="white" />
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                color: 'var(--primary)',
                marginBottom: '1rem',
              }}>
                {value.title}
              </h3>

              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #philosophy > div > div:nth-child(3) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          #philosophy > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}