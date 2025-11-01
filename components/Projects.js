
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  const projects = [
    {
      id: 1,
      title: "EMS (Employee Management System)",
      role: "NodeJS Developer",
      description: "Application for team management with multiple roles defined within the team hierarchy. Helps teammates apply leaves and add timesheets for their efforts.",
      responsibilities: [
        "Maintain code to ensure proper flow of statements and data reconciliation",
        "Redesign system flow architecture for better performance using queueing service and AWS Lambda",
        "Implement role-based access control and permission systems",
        "Optimize database queries and API response times"
      ],
      technologies: ["NodeJS", "TypeScript", "Bitbucket pipeline", "PostgreSQL", "AWS Lambda", "SQS"],
      status: "Completed",
      duration: "6 months",
      teamSize: "4 developers",
      color: "#8B5CF6",
      icon: "👥",
      gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
      features: ["Role Management", "Leave System", "Timesheets", "Queue Processing"]
    },
    {
      id: 2,
      title: "TASK-TICKET",
      role: "NodeJS Developer",
      description: "Collaborative project management tool that organizes tasks into boards. Provides information on task status, responsibility, and progress.",
      responsibilities: [
        "Develop and maintain backend code for the application",
        "Database management for MongoDB database",
        "Writing Stored procedures for some functionalities",
        "Implement real-time updates using WebSocket connections"
      ],
      technologies: ["NodeJS", "JavaScript", "MongoDB", "EC2", "WebSocket", "Redis"],
      status: "In Production",
      duration: "8 months",
      teamSize: "3 developers",
      color: "#06B6D4",
      icon: "📋",
      gradient: "linear-gradient(135deg, #06B6D4, #10B981)",
      features: ["Task Boards", "Real-time Updates", "Progress Tracking", "Team Collaboration"]
    },
    {
      id: 3,
      title: "REMINDER APPLICATION",
      role: "NodeJS Developer",
      description: "Android reminder app that alerts users for tasks. Can set up schedules for phone notifications on daily, weekly, or monthly basis.",
      responsibilities: [
        "Handling database and writing stored procedures for complex functionalities",
        "Implemented rating system based on user performance",
        "Writing APIs as per requirements",
        "Integrate push notification services"
      ],
      technologies: ["NodeJS", "TypeScript", "MongoDB", "NGINX", "EC2", "Firebase"],
      status: "Live",
      duration: "4 months",
      teamSize: "2 developers",
      color: "#10B981",
      icon: "⏰",
      gradient: "linear-gradient(135deg, #10B981, #059669)",
      features: ["Smart Reminders", "Push Notifications", "Performance Rating", "Scheduling"]
    },
    {
      id: 4,
      title: "MAIL-SERVICE",
      role: "Backend Developer (Node/JS)",
      description: "Application that provides mail service for different applications. Employees can send mail by uploading a CSV file. Sends multiple mails quickly and securely.",
      responsibilities: [
        "Develop bulk email processing system",
        "Implement CSV parsing and validation",
        "Set up email queue management",
        "Ensure secure email delivery with rate limiting"
      ],
      technologies: ["NodeJS", "JavaScript", "AWS SES", "Redis", "Bull Queue"],
      status: "Completed",
      duration: "3 months",
      teamSize: "2 developers",
      color: "#F59E0B",
      icon: "✉️",
      gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
      features: ["Bulk Emailing", "CSV Processing", "Queue Management", "Rate Limiting"]
    },
    {
      id: 5,
      title: "FAMELINKS-APPLICATION",
      role: "Backend Developer (Node/TS)",
      description: "Free, online photo-sharing application and social network platform acquired by Budlinks in 2020. Allows users to edit and upload photos and short videos.",
      responsibilities: [
        "Develop media upload and processing system",
        "Implement social features and user interactions",
        "Optimize image and video processing pipelines",
        "Build recommendation algorithms"
      ],
      technologies: ["NodeJS", "TypeScript", "AWS S3", "FFmpeg", "Redis", "Elasticsearch"],
      status: "Acquired",
      duration: "12 months",
      teamSize: "6 developers",
      color: "#EC4899",
      icon: "📸",
      gradient: "linear-gradient(135deg, #EC4899, #DB2777)",
      features: ["Media Sharing", "Social Features", "Video Processing", "Recommendations"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Marquee component for technologies
  const TechMarquee = ({ technologies, project }) => (
    <div className="tech-marquee-container">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        direction="left"
      >
        {technologies.map((tech, index) => (
          <motion.span
            key={`${tech}-${index}`}
            className="marquee-tech-item"
            style={{ 
              background: hoveredTech === tech ? project.gradient : 'rgba(255, 255, 255, 0.1)',
              borderColor: project.color
            }}
            whileHover={{ 
              scale: 1.1,
              y: -2
            }}
            onHoverStart={() => setHoveredTech(tech)}
            onHoverEnd={() => setHoveredTech(null)}
          >
            {tech}
          </motion.span>
        ))}
      </Marquee>
    </div>
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="animated-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of my backend development projects and technical contributions
          </motion.p>
        </motion.div>

        <div ref={ref} className="projects-container">
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${activeProject === project.id ? 'active' : ''}`}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setActiveProject(project.id)}
                onHoverEnd={() => setActiveProject(null)}
                style={{ 
                  '--accent-color': project.color,
                  '--gradient': project.gradient,
                  '--glow-color': `${project.color}30`,
                  gridColumn: project.id === 5 ? '1 / -1' : 'auto',
                  justifySelf: project.id === 5 ? 'center' : 'auto',
                  width: project.id === 5 ? 'min(600px, 90%)' : 'auto'
                }}
              >
                {/* Background Glow Effect */}
                <motion.div 
                  className="card-glow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                />

                {/* Project Header */}
                <div className="project-header">
                  <div className="project-icon-wrapper">
                    <div className="project-icon" style={{ background: project.gradient }}>
                      {project.icon}
                    </div>
                    <div className="icon-glow" style={{ background: project.gradient }} />
                  </div>
                  <div className="project-title-section">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-meta">
                      <span className="project-role">{project.role}</span>
                      <motion.span 
                        className="project-status"
                        style={{ background: project.gradient }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.status}
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="project-description">
                  <p>{project.description}</p>
                </div>

                {/* Features */}
                <div className="features-section">
                  <div className="features-grid">
                    {project.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        className="feature-tag"
                        style={{ borderColor: project.color }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: `${project.color}20`,
                          borderColor: project.color
                        }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="project-details">
                  <motion.div 
                    className="detail-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="detail-icon">⏱️</div>
                    <div>
                      <span className="detail-label">Duration</span>
                      <span className="detail-value">{project.duration}</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="detail-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="detail-icon">👥</div>
                    <div>
                      <span className="detail-label">Team Size</span>
                      <span className="detail-value">{project.teamSize}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Responsibilities */}
                <div className="responsibilities-section">
                  <h4 className="section-label">Key Responsibilities</h4>
                  <div className="responsibilities-list">
                    {project.responsibilities.map((responsibility, idx) => (
                      <motion.div
                        key={idx}
                        className="responsibility-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
                        whileHover={{ x: 5, color: project.color }}
                      >
                        <motion.div 
                          className="responsibility-icon"
                          style={{ color: project.color }}
                          whileHover={{ rotate: 90 }}
                        >
                          ➤
                        </motion.div>
                        <span>{responsibility}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies with Marquee */}
                <div className="technologies-section">
                  <h4 className="section-label">Technologies Used</h4>
                  <TechMarquee technologies={project.technologies} project={project} />
                </div>

                {/* Hover Effect Overlay */}
                <div className="hover-overlay" style={{ background: project.gradient }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          color: white;
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-shapes .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, #8B5CF6, #06B6D4);
          opacity: 0.05;
          filter: blur(60px);
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 { width: 300px; height: 300px; top: 10%; right: 10%; animation-delay: 0s; }
        .shape-2 { width: 200px; height: 200px; bottom: 20%; left: 5%; animation-delay: 2s; }
        .shape-3 { width: 250px; height: 250px; top: 60%; right: 20%; animation-delay: 4s; }
        .shape-4 { width: 150px; height: 150px; top: 30%; left: 15%; animation-delay: 1s; }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #c4b5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-container {
          position: relative;
          z-index: 2;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
          gap: 3rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 28px;
          padding: 3rem;
          position: relative;
          transition: all 0.4s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--gradient);
          opacity: 0;
          border-radius: 28px;
          filter: blur(20px);
          z-index: -1;
        }

        .project-card:hover {
          border-color: var(--accent-color);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          transform: translateY(-5px);
        }

        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 28px;
          z-index: -1;
        }

        .project-card:hover .hover-overlay {
          opacity: 0.1;
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .project-icon-wrapper {
          position: relative;
        }

        .project-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          flex-shrink: 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          border-radius: 25px;
          transform: translate(-50%, -50%);
          filter: blur(15px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .project-card:hover .icon-glow {
          opacity: 0.6;
        }

        .project-title-section {
          flex: 1;
        }

        .project-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .project-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }

        .project-role {
          background: rgba(255, 255, 255, 0.15);
          color: #e2e8f0;
          padding: 0.5rem 1.2rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .project-status {
          color: white;
          padding: 0.5rem 1.2rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .project-description {
          margin-bottom: 2rem;
        }

        .project-description p {
          color: #cbd5e1;
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0;
        }

        .features-section {
          margin-bottom: 2rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
        }

        .feature-tag {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid;
          color: #e2e8f0;
          padding: 0.6rem 1rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 600;
          text-align: center;
          transition: all 0.3s ease;
        }

        .project-details {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .detail-icon {
          font-size: 1.2rem;
          opacity: 0.8;
        }

        .detail-label {
          font-size: 0.85rem;
          color: #94a3b8;
          font-weight: 500;
          display: block;
        }

        .detail-value {
          font-size: 1rem;
          color: white;
          font-weight: 700;
          display: block;
        }

        .section-label {
          color: white;
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
        }

        .responsibilities-section {
          margin-bottom: 2.5rem;
          flex: 1;
        }

        .responsibilities-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .responsibility-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 8px;
        }

        .responsibility-icon {
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .technologies-section {
          margin-bottom: 1rem;
        }

        /* Marquee Styles */
        .tech-marquee-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
        }

        .marquee-tech-item {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          border: 2px solid;
          color: #e2e8f0;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          cursor: pointer;
          margin: 0 0.5rem;
          white-space: nowrap;
        }

        .marquee-tech-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 80px 0;
          }
          
          .section-title {
            font-size: 2.8rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .project-card {
            padding: 2.5rem;
          }
          
          .project-header {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          
          .project-details {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .tech-marquee-container {
            padding: 0.8rem 0;
          }
          
          .marquee-tech-item {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2.2rem;
          }
          
          .project-card {
            padding: 2rem;
          }
          
          .project-title {
            font-size: 1.4rem;
          }
          
          .tech-marquee-container {
            padding: 0.6rem 0;
          }
          
          .marquee-tech-item {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
            margin: 0 0.3rem;
          }
        }
      `}</style>
    </section>
  );
}