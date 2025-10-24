import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const projects = [
    {
      title: "EMS (Employee Management System)",
      role: "NodeJS Developer",
      description: "Application for team management with multiple roles defined within the team hierarchy. Helps teammates apply leaves and add timesheets for their efforts.",
      responsibilities: [
        "Maintain code to ensure proper flow of statements and data reconciliation",
        "Redesign system flow architecture for better performance using queueing service and AWS Lambda"
      ],
      technologies: ["NodeJS", "TypeScript", "Bitbucket pipeline", "PostgreSQL"]
    },
    {
      title: "TASK-TICKET",
      role: "NodeJS Developer",
      description: "Collaborative project management tool that organizes tasks into boards. Provides information on task status, responsibility, and progress.",
      responsibilities: [
        "Develop and maintain backend code for the application",
        "Database management for MongoDB database",
        "Writing Stored procedures for some functionalities"
      ],
      technologies: ["NodeJS", "JavaScript", "MongoDB", "EC2"]
    },
    {
      title: "REMINDER APPLICATION",
      role: "NodeJS Developer",
      description: "Android reminder app that alerts users for tasks. Can set up schedules for phone notifications on daily, weekly, or monthly basis.",
      responsibilities: [
        "Handling database and writing stored procedures for complex functionalities",
        "Implemented rating system based on user performance",
        "Writing APIs as per requirements"
      ],
      technologies: ["NodeJS", "TypeScript", "MongoDB", "NGINX", "EC2"]
    },
    {
      title: "MAIL-SERVICE",
      role: "Backend Developer (Node/JS)",
      description: "Application that provides mail service for different applications. Employees can send mail by uploading a CSV file. Sends multiple mails quickly and securely.",
      technologies: ["NodeJS", "JavaScript"]
    },
    {
      title: "FAMELINKS-APPLICATION",
      role: "Backend Developer (Node/TS)",
      description: "Free, online photo-sharing application and social network platform acquired by Budlinks in 2020. Allows users to edit and upload photos and short videos.",
      technologies: ["NodeJS", "TypeScript"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Major Projects
        </motion.h2>

        <div ref={ref} className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-role">{project.role}</span>
              </div>

              <p className="project-description">{project.description}</p>

              {project.responsibilities && (
                <div className="project-responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .project-header {
          margin-bottom: 1rem;
        }
        
        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        
        .project-role {
          display: inline-block;
          background: var(--primary);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .project-description {
          color: var(--secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        
        .project-responsibilities,
        .project-technologies {
          margin-bottom: 1.5rem;
        }
        
        .project-responsibilities h4,
        .project-technologies h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 0.75rem;
        }
        
        .project-responsibilities ul {
          list-style: none;
          padding: 0;
        }
        
        .project-responsibilities li {
          color: var(--secondary);
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;
          line-height: 1.5;
        }
        
        .project-responsibilities li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-tag {
          background: var(--light);
          color: var(--dark);
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid var(--border);
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .project-card {
            padding: 1.5rem;
          }
          
          .project-title {
            font-size: 1.25rem;
          }
        }
        
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .project-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .tech-tags {
            gap: 0.4rem;
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