import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeExp, setActiveExp] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Broadstairs IT Solutions",
      position: "Backend Developer",
      period: "Nov 2021 - Present",
      duration: "2+ years",
      location: "Remote",
      description: "Specializing in Node.js backend development, building scalable server-side applications and RESTful APIs for various client projects.",
      achievements: [
        "Developed and maintained 10+ microservices handling 50K+ daily requests",
        "Reduced API response time by 35% through database optimization",
        "Implemented real-time features using WebSocket and Socket.io",
        "Led migration from JavaScript to TypeScript across projects"
      ],
      technologies: ["Node.js", "TypeScript", "Express", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker"],
      type: "Full-time",
      logo: "🚀",
      color: "#8B5CF6"
    },
    {
      id: 2,
      company: "Formics.io",
      position: "Backend Developer",
      period: "Jan 2021 - Oct 2021",
      duration: "10 months",
      location: "Remote",
      description: "Contributed to backend systems development and database architecture for AI-powered analytics platform.",
      achievements: [
        "Built RESTful APIs for data processing and analytics",
        "Optimized database queries improving performance by 25%",
        "Integrated third-party APIs and payment gateways",
        "Implemented authentication and authorization systems"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "REST APIs", "Stripe API"],
      type: "Full-time",
      logo: "💡",
      color: "#06B6D4"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="experience" className="section experience-section">
      {/* Background Elements */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Journey
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My career path and professional milestones in backend development
          </motion.p>
        </motion.div>

        <div ref={ref} className="experience-container">
          <motion.div
            className="experience-timeline"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`experience-card ${activeExp === exp.id ? 'active' : ''}`}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setActiveExp(exp.id)}
                onHoverEnd={() => setActiveExp(null)}
                style={{ 
                  '--accent-color': exp.color,
                  '--glow-color': `${exp.color}30`
                }}
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="timeline-line"></div>
                )}

                {/* Experience Header */}
                <div className="experience-header">
                  <div className="company-logo" style={{ backgroundColor: exp.color }}>
                    {exp.logo}
                  </div>
                  <div className="company-info">
                    <div className="title-row">
                      <h3 className="company-name">{exp.company}</h3>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                    <h4 className="position">{exp.position}</h4>
                    <div className="meta-info">
                      <span className="period">{exp.period}</span>
                      <span className="duration">{exp.duration}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Experience Content */}
                <div className="experience-content">
                  <p className="description">{exp.description}</p>
                  
                  <div className="achievements-section">
                    <h5 className="section-label">Key Achievements</h5>
                    <div className="achievements-grid">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          className="achievement-item"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.08) }}
                        >
                          <div className="achievement-icon">•</div>
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="technologies-section">
                    <h5 className="section-label">Technologies</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2, delay: (index * 0.1) + (techIndex * 0.04) }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Career Progress */}
        <motion.div
          className="career-progress"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="progress-stats">
            <div className="stat">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .experience-section {
          position: relative;
          padding: 80px 0;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          color: white;
        }

        .background-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, #8B5CF6, #06B6D4);
          opacity: 0.08;
          filter: blur(40px);
        }

        .shape-1 {
          width: 150px;
          height: 150px;
          top: 15%;
          right: 8%;
        }

        .shape-2 {
          width: 120px;
          height: 120px;
          bottom: 25%;
          left: 8%;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          top: 55%;
          right: 15%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.75rem;
          letter-spacing: -0.5px;
        }

        .section-subtitle {
          font-size: 1rem;
          color: #94a3b8;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .experience-container {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .experience-timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
        }

        .experience-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-color), transparent);
          border-radius: 16px 16px 0 0;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .experience-card:hover::before,
        .experience-card.active::before {
          transform: scaleX(1);
        }

        .experience-card:hover,
        .experience-card.active {
          border-color: var(--accent-color);
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.2),
            0 0 40px var(--glow-color);
          background: rgba(255, 255, 255, 0.06);
        }

        .timeline-line {
          position: absolute;
          bottom: -2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 1.5px;
          height: 2rem;
          background: linear-gradient(to bottom, var(--accent-color), transparent);
        }

        .experience-header {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .company-logo {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .company-info {
          flex: 1;
        }

        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.4rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .company-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .experience-type {
          background: var(--accent-color);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          white-space: nowrap;
        }

        .position {
          font-size: 1rem;
          color: var(--accent-color);
          font-weight: 500;
          margin-bottom: 0.75rem;
          letter-spacing: -0.2px;
        }

        .meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }

        .meta-info span {
          background: rgba(255, 255, 255, 0.08);
          padding: 0.4rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 400;
          color: #cbd5e1;
        }

        .experience-content {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 1.5rem;
        }

        .description {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .section-label {
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .achievements-section {
          margin-bottom: 1.5rem;
        }

        .achievements-grid {
          display: grid;
          gap: 0.6rem;
        }

        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          color: #cbd5e1;
          line-height: 1.4;
          font-size: 0.85rem;
        }

        .achievement-icon {
          color: var(--accent-color);
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 0.1rem;
          font-size: 1rem;
        }

        .technologies-section {
          margin-bottom: 0.5rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          padding: 0.35rem 0.75rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 400;
          transition: all 0.2s ease;
        }

        .tech-tag:hover {
          background: var(--accent-color);
          border-color: var(--accent-color);
          color: white;
        }

        .career-progress {
          margin-top: 3rem;
          text-align: center;
        }

        .progress-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .stat {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.5rem 1rem;
          backdrop-filter: blur(10px);
        }

        .stat-number {
          font-size: 1.75rem;
          font-weight: 700;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.4rem;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.85rem;
          font-weight: 400;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .experience-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .section-subtitle {
            font-size: 0.9rem;
          }
          
          .experience-card {
            padding: 1.5rem;
          }
          
          .experience-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .company-logo {
            align-self: center;
          }
          
          .title-row {
            justify-content: center;
          }
          
          .progress-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
            max-width: 250px;
          }
          
          .timeline-line {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }
          
          .experience-card {
            padding: 1.25rem;
          }
          
          .company-name {
            font-size: 1.1rem;
          }
          
          .position {
            font-size: 0.9rem;
          }
          
          .meta-info {
            justify-content: center;
          }
          
          .meta-info span {
            font-size: 0.75rem;
            padding: 0.3rem 0.6rem;
          }
          
          .description {
            font-size: 0.85rem;
          }
          
          .tech-tags {
            gap: 0.4rem;
          }
          
          .tech-tag {
            padding: 0.3rem 0.6rem;
            font-size: 0.7rem;
          }
          
          .achievement-item {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}