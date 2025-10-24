import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sheikh Mohin
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Backend Developer (NodeJS)
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Experienced Backend Developer specializing in Node.js, TypeScript, and cloud technologies.
            I build robust, scalable server-side applications with modern architectures.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="hero-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://dev.to/your-username" target="_blank" rel="noopener noreferrer">
              Dev.to
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 120px 0 80px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--dark);
          line-height: 1.1;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-description {
          font-size: 1.25rem;
          color: var(--secondary);
          margin-bottom: 2.5rem;
          line-height: 1.7;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .hero-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }
        
        .hero-links a {
          color: var(--secondary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
        }
        
        .hero-links a:hover {
          color: var(--primary);
          background: rgba(255, 255, 255, 0.9);
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 0 60px 0;
            min-height: auto;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
          
          .hero-description {
            font-size: 1.1rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-buttons .btn {
            width: 100%;
            max-width: 250px;
            text-align: center;
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
          
          .hero-links {
            flex-direction: column;
            gap: 1rem;
          }
          
          .hero-links a {
            width: 100%;
            text-align: center;
            max-width: 200px;
          }
        }
      `}</style>
    </section>
  );
}