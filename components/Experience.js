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
        staggerChildren: 0.3
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
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
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
            Professional Journey
          </motion.h2>
          <motion.p style={{paddingBottom:'15px'}}
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
                  '--glow-color': `${exp.color}40`
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
                          variants={itemVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                        >
                          <div className="achievement-icon">✓</div>
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="technologies-section">
                    <h5 className="section-label">Technologies Used</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                          whileHover={{ scale: 1.1 }}
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="progress-stats">
            <div className="stat">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .experience-section {
          position: relative;
          padding: 120px 0;
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
          opacity: 0.1;
          filter: blur(40px);
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: 20%;
          right: 10%;
          animation: float 20s infinite ease-in-out;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          bottom: 30%;
          left: 10%;
          animation: float 25s infinite ease-in-out reverse;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          top: 60%;
          right: 20%;
          animation: float 30s infinite ease-in-out;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3.5rem;
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

        .experience-container {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
        }

        .experience-timeline {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          position: relative;
        }

        .experience-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
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
          height: 3px;
          background: linear-gradient(90deg, var(--accent-color), transparent);
          border-radius: 24px 24px 0 0;
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
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 80px var(--glow-color);
        }

        .timeline-line {
          position: absolute;
          bottom: -3rem;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 3rem;
          background: linear-gradient(to bottom, var(--accent-color), transparent);
        }

        .experience-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .company-logo {
          width: 70px;
          height: 70px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          flex-shrink: 0;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .company-info {
          flex: 1;
        }

        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .company-name {
          font-size: 1.6rem;
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .experience-type {
          background: var(--accent-color);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .position {
          font-size: 1.3rem;
          color: var(--accent-color);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }

        .meta-info span {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #cbd5e1;
        }

        .experience-content {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
        }

        .description {
          color: #94a3b8;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .section-label {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .achievements-section {
          margin-bottom: 2rem;
        }

        .achievements-grid {
          display: grid;
          gap: 0.75rem;
        }

        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .achievement-icon {
          color: var(--accent-color);
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .technologies-section {
          margin-bottom: 1rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #cbd5e1;
          padding: 0.5rem 1rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: var(--accent-color);
          border-color: var(--accent-color);
          color: white;
        }

        .career-progress {
          margin-top: 4rem;
          text-align: center;
        }

        .progress-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .stat {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem 1rem;
          backdrop-filter: blur(10px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.95rem;
          font-weight: 500;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(20px) rotate(240deg); }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .experience-section {
            padding: 80px 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .experience-card {
            padding: 2rem;
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
          }
          
          .timeline-line {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }
          
          .experience-card {
            padding: 1.5rem;
          }
          
          .company-name {
            font-size: 1.3rem;
          }
          
          .position {
            font-size: 1.1rem;
          }
          
          .meta-info {
            justify-content: center;
          }
          
          .meta-info span {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
          
          .tech-tags {
            gap: 0.5rem;
          }
          
          .tech-tag {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}