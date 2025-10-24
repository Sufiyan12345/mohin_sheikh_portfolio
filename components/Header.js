import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <nav className="nav">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="#home">Sheikh Mohin</a>
          </motion.div>

          <ul className="nav-links">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-content">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="mobile-menu-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        
        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          border-bottom-color: var(--border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 0;
        }
        
        .logo a {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2.5rem;
        }
        
        .nav-link {
          text-decoration: none;
          color: var(--dark);
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--primary-dark));
          transition: width 0.3s ease;
        }
        
        .nav-link:hover {
          color: var(--primary);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .menu-toggle {
          display: none;
          flex-direction: column;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          width: 30px;
          height: 30px;
          justify-content: center;
          align-items: center;
        }
        
        .menu-toggle span {
          width: 24px;
          height: 2px;
          background: var(--dark);
          margin: 3px 0;
          transition: 0.3s;
          transform-origin: center;
        }
        
        .menu-toggle.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        
        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }
        
        .menu-toggle.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }
        
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          border-top: 1px solid var(--border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .mobile-menu-content {
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .mobile-menu-link {
          padding: 1rem 1.5rem;
          text-decoration: none;
          color: var(--dark);
          font-weight: 500;
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }
        
        .mobile-menu-link:hover {
          background: var(--light);
          color: var(--primary);
          border-left-color: var(--primary);
        }
        
        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }
          
          .nav-links {
            display: none;
          }
          
          .logo a {
            font-size: 1.25rem;
          }
        }
        
        @media (max-width: 480px) {
          .nav {
            padding: 1rem 0;
          }
        }
      `}</style>
    </motion.header>
  );
}