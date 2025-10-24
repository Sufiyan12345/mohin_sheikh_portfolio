import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const experiences = [
    {
      company: "Broadstairs IT Solutions",
      position: "Backend Developer",
      period: "Nov 2021 - Present",
      description: "Working on backend development using Node.js and related technologies."
    },
    {
      company: "Formics.io",
      position: "Backend Developer",
      period: "Jan 2021 - Oct 2021",
      description: "Contributed to backend systems and database management."
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <div ref={ref} className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="experience-content card">
                <div className="experience-header">
                  <h3 className="experience-position">{exp.position}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience-timeline {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .experience-item {
          position: relative;
        }
        
        .experience-content {
          padding: 2rem;
          position: relative;
        }
        
        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .experience-position {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--dark);
          margin: 0;
        }
        
        .experience-period {
          background: var(--primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
        }
        
        .experience-company {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        .experience-description {
          color: var(--secondary);
          line-height: 1.6;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .experience-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .experience-position {
            font-size: 1.25rem;
          }
          
          .experience-company {
            font-size: 1.1rem;
          }
          
          .experience-content {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .experience-timeline {
            gap: 1.5rem;
          }
          
          .experience-position {
            font-size: 1.1rem;
          }
          
          .experience-period {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}