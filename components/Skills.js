import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const skills = {
    "JavaScript Frameworks": ["NodeJS", "ExpressJS", "NestJS"],
    "Programming Languages": ["JavaScript", "TypeScript"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB"],
    "Cloud Services": ["AWS Lambda", "EC2", "S3", "Firebase"],
    "Tools/Utilities": ["Git", "Bitbucket", "NGINX", "Linux", "PM2"]
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <div ref={ref} className="skills-container">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              className="skill-category card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="skill-category-title">{category}</h3>
              <div className="skills-grid">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .skill-category {
          text-align: center;
          padding: 2rem 1.5rem;
        }
        
        .skill-category-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }
        
        .skill-item {
          background: var(--light);
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          cursor: default;
        }
        
        .skill-item:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }
        
        @media (max-width: 768px) {
          .skills-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .skill-category {
            padding: 1.5rem;
          }
          
          .skills-grid {
            gap: 0.5rem;
          }
          
          .skill-item {
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 480px) {
          .skills-container {
            grid-template-columns: 1fr;
          }
          
          .skill-category-title {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}