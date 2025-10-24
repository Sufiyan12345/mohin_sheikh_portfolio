export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Sheikh Mohin. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#skills">Skills</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .footer {
          background: var(--dark);
          color: white;
          padding: 2rem 0;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .footer-links a {
          color: var(--gray);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: white;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
          
          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
        </footer>
    );
}