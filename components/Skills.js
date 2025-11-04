import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = {
    "Backend Development": {
      items: [
        { name: "Node.js", icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" },
        { name: "Express", icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" },
        { name: "NestJS", icon: "https://www.vectorlogo.zone/logos/nestjs/nestjs-ar21.svg" },
        { name: "REST API", icon: "📡" },
        { name: "GraphQL", icon: "https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg" },
        { name: "Socket.io", icon: "🔌" }
      ],
      icon: "",
      color: "",
      description: "Building robust server-side applications and APIs"
    },
    "Programming Languages": {
      items: [
        { name: "JavaScript", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" },
        { name: "TypeScript", icon: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg" },
        { name: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-ar21.svg" },
        { name: "Java", icon: "https://www.vectorlogo.zone/logos/java/java-ar21.svg" }
      ],
      icon: "",
      color: "",
      description: "Proficient in multiple programming paradigms"
    },
    "Databases": {
      items: [
        { name: "PostgreSQL", icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg" },
        { name: "MySQL", icon: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" },
        { name: "MongoDB", icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" },
        { name: "Redis", icon: "https://www.vectorlogo.zone/logos/redis/redis-ar21.svg" },
        { name: "SQLite", icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21.svg" }
      ],
      icon: "",
      color: "",
      description: "Expertise in both SQL and NoSQL databases"
    },
    "Cloud & DevOps": {
      items: [
        { name: "AWS Lambda", icon: "https://www.vectorlogo.zone/logos/amazon_awslambda/amazon_awslambda-ar21.svg" },
        { name: "AWS", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg"},
        { name: "Docker", icon: "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg" },
        { name: "Nginx", icon: "https://www.vectorlogo.zone/logos/nginx/nginx-ar21.svg" }
      ],
      icon: "",
      color: "",
      description: "Cloud infrastructure and deployment automation"
    }
  };

  const SkillsMarquee = ({ items, category }) => (
    <div className="skills-marquee-container">
      <Marquee gradient={false} speed={50} pauseOnHover direction="left">
        {items.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="marquee-skill-item"
            style={{
              background: activeSkill === skill.name 
                ? `linear-gradient(135deg, ${skills[category].color}20, ${skills[category].color}10)`
                : 'transparent',
              border: activeSkill === skill.name 
                ? `2px solid ${skills[category].color}`
                : '2px solid transparent',
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            onHoverStart={() => setActiveSkill(skill.name)}
            onHoverEnd={() => setActiveSkill(null)}
          >
            <div className="skill-icon-wrapper">
              <div className="skill-icon-glow" style={{ background: skills[category].color }}></div>
              <div className="skill-icon">
                {skill.icon.startsWith('http') ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    loading="lazy"
                    className="skill-image"
                  />
                ) : (
                  <span className="emoji-icon">{skill.icon}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </Marquee>
    </div>
  );

  return (
    <section id="skills" className="section skills-section">
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
            Technical Expertise
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technologies and tools I use to build exceptional digital experiences
          </motion.p>
        </motion.div>

        <div ref={ref} className="skills-content" style={{textAlign:'center'}}>
          {Object.entries(skills).map(([category, data], index) => (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="category-header">
                <div className="category-title-wrapper">
                  <div className="category-icon-glow" style={{ background: data.color }}></div>
                  <div className="category-icon" style={{ color: data.color }}>
                    <span className="category-emoji">{data.icon}</span>
                  </div>
                  <div className="category-info">
                    <h3>{category}</h3>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>

              <SkillsMarquee items={data.items} category={category} />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: white;
          padding: 5rem 0;
          min-height: auto;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
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
          background-clip: text;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .skills-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .skill-category {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .category-header {
          width: 100%;
        }

        .category-title-wrapper {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 1rem;
          position: relative;
        }

        .category-icon-glow {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.3;
          z-index: 0;
          left: 0;
        }

        .category-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }

        .category-emoji {
          font-size: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4));
          transition: all 0.3s ease;
        }

        .skill-category:hover .category-emoji {
          transform: scale(1.1) rotate(5deg);
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6));
        }

        .category-info {
          flex: 1;
          position: relative;
          z-index: 2;
        }

        .category-info h3 {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          margin: 0 0 0.8rem 0;
          line-height: 1.2;
          background: linear-gradient(135deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .category-info p {
          color: #94a3b8;
          font-size: 1.2rem;
          margin: 0;
          line-height: 1.6;
          font-weight: 400;
        }

        .skills-marquee-container {
          width: 100%;
          overflow: hidden;
          border-radius: 20px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem 0;
          background: rgba(255, 255, 255, 0.02);
        }

        .marquee-skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 1.2rem;
          border-radius: 16px;
          margin: 0 25px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          min-width: 120px;
          height: 120px;
          cursor: pointer;
          gap: 1rem;
          position: relative;
          overflow: hidden;
          background: transparent;
        }

        .marquee-skill-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 16px;
        }

        .marquee-skill-item:hover::before {
          opacity: 1;
        }

        .skill-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-icon-glow {
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0;
          transition: all 0.4s ease;
        }

        .marquee-skill-item:hover .skill-icon-glow {
          opacity: 0.3;
          transform: scale(1.3);
        }

        .skill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
          background: transparent;
          border: none;
          padding: 0;
        }

        .marquee-skill-item:hover .skill-icon {
          transform: scale(1.15) translateY(-2px);
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4));
        }

        .skill-image {
          width: 65px;
          height: 65px;
          object-fit: contain;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: brightness(1.1) contrast(1.1);
        }

        .marquee-skill-item:hover .skill-image {
          transform: scale(1.2);
          filter: brightness(1.2) contrast(1.2) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
        }

        .emoji-icon {
          font-size: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
          transition: all 0.3s ease;
        }

        .marquee-skill-item:hover .emoji-icon {
          transform: scale(1.2);
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.6));
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 4rem 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
            padding: 0 1rem;
          }
          
          .container {
            padding: 0 1.5rem;
          }
          
          .skills-content {
            gap: 3rem;
          }
          
          .category-title-wrapper {
            gap: 1.5rem;
          }
          
          .category-emoji {
            font-size: 2.8rem;
          }
          
          .category-info h3 {
            font-size: 1.6rem;
          }
          
          .category-info p {
            font-size: 1.1rem;
          }
          
          .marquee-skill-item {
            margin: 0 20px;
            min-width: 100px;
            height: 100px;
            padding: 1.2rem 1rem;
          }
          
          .skill-image {
            width: 50px;
            height: 50px;
          }
          
          .emoji-icon {
            font-size: 3rem;
          }
        }

        @media (max-width: 480px) {
          .skills-content {
            gap: 2.5rem;
          }
          
          .category-title-wrapper {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.2rem;
          }
          
          .category-info {
            width: 100%;
          }
          
          .category-emoji {
            font-size: 2.5rem;
          }
          
          .marquee-skill-item {
            margin: 0 15px;
            min-width: 90px;
            height: 90px;
            padding: 1rem 0.8rem;
          }
          
          .skill-image {
            width: 45px;
            height: 45px;
          }
          
          .emoji-icon {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}