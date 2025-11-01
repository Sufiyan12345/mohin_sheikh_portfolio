import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState(null);

  const skills = {
    "Backend Development": {
      items: ["NodeJS", "ExpressJS", "NestJS", "REST APIs", "GraphQL", "WebSocket"],
      icon: "⚡",
      color: "#8B5CF6",
      description: "Building robust server-side applications and APIs"
    },
    "Programming Languages": {
      items: ["JavaScript", "TypeScript", "Python", "Java"],
      icon: "💻",
      color: "#06B6D4",
      description: "Proficient in multiple programming paradigms"
    },
    "Databases": {
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
      icon: "🗄️",
      color: "#10B981",
      description: "Expertise in both SQL and NoSQL databases"
    },
    "Cloud & DevOps": {
      items: ["AWS Lambda", "EC2", "S3", "Docker", "CI/CD", "NGINX"],
      icon: "☁️",
      color: "#F59E0B",
      description: "Cloud infrastructure and deployment automation"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Technologies I work with to build amazing digital experiences
          </motion.p>
        </motion.div>

        <div ref={ref} className="skills-grid-container">
          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Column 1 */}
            <div className="skills-column">
              <motion.div
                className="skill-category-card"
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setActiveCategory("Backend Development")}
                onHoverEnd={() => setActiveCategory(null)}
                style={{ 
                  '--accent-color': skills["Backend Development"].color,
                }}
              >
                <div className="card-header">
                  <div className="category-icon" style={{ backgroundColor: skills["Backend Development"].color }}>
                    {skills["Backend Development"].icon}
                  </div>
                  <div className="category-info">
                    <h3>Backend Development</h3>
                    <p>{skills["Backend Development"].description}</p>
                  </div>
                </div>
                <div className="skills-items-grid">
                  {skills["Backend Development"].items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="skill-item"
                      variants={skillItemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover="hover"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="skill-category-card"
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setActiveCategory("Programming Languages")}
                onHoverEnd={() => setActiveCategory(null)}
                style={{ 
                  '--accent-color': skills["Programming Languages"].color,
                }}
              >
                <div className="card-header">
                  <div className="category-icon" style={{ backgroundColor: skills["Programming Languages"].color }}>
                    {skills["Programming Languages"].icon}
                  </div>
                  <div className="category-info">
                    <h3>Programming Languages</h3>
                    <p>{skills["Programming Languages"].description}</p>
                  </div>
                </div>
                <div className="skills-items-grid">
                  {skills["Programming Languages"].items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="skill-item"
                      variants={skillItemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover="hover"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="skills-column">
              <motion.div
                className="skill-category-card"
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setActiveCategory("Cloud & DevOps")}
                onHoverEnd={() => setActiveCategory(null)}
                style={{ 
                  '--accent-color': skills["Cloud & DevOps"].color,
                }}
              >
                <div className="card-header">
                  <div className="category-icon" style={{ backgroundColor: skills["Cloud & DevOps"].color }}>
                    {skills["Cloud & DevOps"].icon}
                  </div>
                  <div className="category-info">
                    <h3>Cloud & DevOps</h3>
                    <p>{skills["Cloud & DevOps"].description}</p>
                  </div>
                </div>
                <div className="skills-items-grid">
                  {skills["Cloud & DevOps"].items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="skill-item"
                      variants={skillItemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover="hover"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="skill-category-card"
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setActiveCategory("Databases")}
                onHoverEnd={() => setActiveCategory(null)}
                style={{ 
                  '--accent-color': skills["Databases"].color,
                }}
              >
                <div className="card-header">
                  <div className="category-icon" style={{ backgroundColor: skills["Databases"].color }}>
                    {skills["Databases"].icon}
                  </div>
                  <div className="category-info">
                    <h3>Databases</h3>
                    <p>{skills["Databases"].description}</p>
                  </div>
                </div>
                <div className="skills-items-grid">
                  {skills["Databases"].items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="skill-item"
                      variants={skillItemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover="hover"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        .skills-grid-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 1000px;
          width: 100%;
        }

        .skills-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .skill-category-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
          min-height: 300px;
          display: flex;
          flex-direction: column;
        }

        .skill-category-card:hover {
          border-color: var(--accent-color);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transform: translateY(-5px);
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .category-icon {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .category-info h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .category-info p {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .skills-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          flex: 1;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 0.75rem 1rem;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: white;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--accent-color);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .skills-column {
            gap: 1.5rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .skill-category-card {
            padding: 1.5rem;
            min-height: 280px;
          }
          
          .card-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .category-icon {
            align-self: center;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }
          
          .skill-category-card {
            padding: 1.25rem;
          }
          
          .skills-items-grid {
            grid-template-columns: 1fr;
          }
          
          .skill-item {
            padding: 0.6rem 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}